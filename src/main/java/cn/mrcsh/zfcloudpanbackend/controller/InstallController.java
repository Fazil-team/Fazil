package cn.mrcsh.zfcloudpanbackend.controller;

import cn.mrcsh.zfcloudpanbackend.ZfCloudPanBackendApplication;
import cn.mrcsh.zfcloudpanbackend.config.Temp;
import cn.mrcsh.zfcloudpanbackend.entity.structure.InstallStructure;
import cn.mrcsh.zfcloudpanbackend.task.DatabaseInitialize;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.constraints.Null;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.yaml.snakeyaml.DumperOptions;
import org.yaml.snakeyaml.Yaml;

import java.io.*;
import java.util.LinkedHashMap;
import java.util.Map;

@Slf4j
@RestController
@CrossOrigin
public class InstallController extends BaseController {

    @Autowired
    private ApplicationContext applicationContext;

    private String jdbcUrl = "jdbc:mysql://#HOST:#PORT/#DB_NAME?timeZone=#TIMEZONE";

    @Autowired
    private DatabaseInitialize databaseInitialize;

    @PostMapping("/install")
    @Operation(tags = "安装")
    public response install(@RequestBody InstallStructure installStructure) {
        try {
            String realJdbcURL = jdbcUrl.replaceAll("#HOST",installStructure.getMysql_host())
                    .replaceAll("#PORT",String.valueOf(installStructure.getMysql_port()))
                    .replaceAll("#DB_NAME",installStructure.getMysql_db_name())
                    .replaceAll("#TIMEZONE", "Asia/Shanghai");

            writeFullConfig(Temp.WorkDir+"/config/db.yml",
                    installStructure.getApp_port(),
                    realJdbcURL,
                    installStructure.getMysql_username(),
                    installStructure.getMysql_password(),
                    installStructure.getRedis_host(),
                    installStructure.getRedis_port(),
                    installStructure.getRedis_username(),
                    installStructure.getRedis_password(),
                    true,
                    installStructure.getData_dir(),
                    installStructure.isFfmpeg(),
                    installStructure.getFfmpeg_bin_dir(),
                    installStructure.getDomain());
            databaseInitialize.setUrl(realJdbcURL);
            databaseInitialize.setUsername(installStructure.getMysql_username());
            databaseInitialize.setPassword(installStructure.getMysql_password());
            databaseInitialize.initDatabase();
            // 写入管理员用户
            databaseInitialize.initAdminUsers(installStructure.getAdmin_username(), installStructure.getAdmin_password());
            new Thread(() -> {
                try {
                    Thread.sleep(100);
                    log.info("停机");
                    SpringApplication.exit(applicationContext);
                    System.exit(0);
                } catch (InterruptedException e) {
                    throw new RuntimeException(e);
                }
            }).start();
            return success(installStructure);
        }catch (Exception e){
            try {
                resetConfig();
            }catch (Exception e1){

            }
            throw new NullPointerException("MySQL/Redis连接失败，请检查填写内容");
        }
    }

    public static void writeFullConfig(
            String ymlPath,
            int serverPort,
            String dbUrl,
            String dbUser,
            String dbPass,
            String redisHost,
            int redisPort,
            String redisUser,
            String redisPass,
            boolean installed,
            String dataDir,
            boolean ffmpeg_enable,
            String ffmpeg_bin_dir,
            String domain
    ) throws IOException {
        // 构建完整的 Map 结构
        Map<String, Object> root = new LinkedHashMap<>();

        // server
        Map<String, Object> server = new LinkedHashMap<>();
        server.put("port", serverPort);
        root.put("server", server);

        // spring -> data -> redis
        Map<String, Object> redis = new LinkedHashMap<>();
        redis.put("host", redisHost);
        redis.put("port", redisPort);
        redis.put("username", redisUser == null ? "" : redisUser);
        redis.put("password", redisPass == null ? "" : redisPass);

        Map<String, Object> data = new LinkedHashMap<>();
        data.put("redis", redis);

        // spring -> datasource
        Map<String, Object> datasource = new LinkedHashMap<>();
        datasource.put("driver-class-name", "com.mysql.cj.jdbc.Driver");
        datasource.put("url", dbUrl);
        datasource.put("username", dbUser);
        datasource.put("password", dbPass);

        Map<String, Object> spring = new LinkedHashMap<>();
        spring.put("data", data);
        spring.put("datasource", datasource);

        root.put("spring", spring);

        // app -> installed
        Map<String, Object> app = new LinkedHashMap<>();
        app.put("installed", installed);
        app.put("data-save-path", dataDir);
        app.put("client-baseurl", domain);

        Map<String, Object> ffmpeg = new LinkedHashMap<>();
        ffmpeg.put("enable", ffmpeg_enable);
        ffmpeg.put("dir", ffmpeg_bin_dir);
        app.put("ffmpeg", ffmpeg);
        root.put("app", app);

        // 写入 YML 文件
        DumperOptions options = new DumperOptions();
        options.setDefaultFlowStyle(DumperOptions.FlowStyle.BLOCK);
        options.setPrettyFlow(true);
        options.setIndent(2);
        Yaml yaml = new Yaml(options);

        try (FileWriter writer = new FileWriter(ymlPath)) {
            yaml.dump(root, writer);
        }
    }

    public static void resetConfig() throws IOException {
        File file = new File(Temp.WorkDir+"/config/db.yml");
        BufferedWriter bw = new BufferedWriter(new FileWriter(file));
        bw.write("""
                server:
                  port: 8080
                spring:
                  datasource:
                    driver-class-name: com.mysql.cj.jdbc.Driver
                    url:
                    username:
                    password:
                app:
                  installed: false
                  data-save-path: ''
                  client-baseurl: ''
                  ffmpeg:
                    enable: false
                    dir: ''
                """);
        bw.flush();
        bw.close();
    }
}
