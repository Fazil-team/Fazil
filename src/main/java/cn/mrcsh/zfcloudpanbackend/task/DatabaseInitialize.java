package cn.mrcsh.zfcloudpanbackend.task;

import cn.hutool.core.io.resource.ClassPathResource;
import jakarta.annotation.PostConstruct;
import lombok.extern.slf4j.Slf4j;
import org.apache.ibatis.jdbc.ScriptRunner;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.URI;
import java.net.URISyntaxException;
import java.nio.charset.StandardCharsets;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

/**
 * 用于第一次启动时，初始化数据库的配置类
 */
@Slf4j
@Configuration
public class DatabaseInitialize {

    /**
     * 读取连接地址
     */
    @Value("${spring.datasource.url}")
    private String url;

    /**
     * 读取用户名
     */
    @Value("${spring.datasource.username}")
    private String username;

    /**
     * 读取密码
     */
    @Value("${spring.datasource.password}")
    private String password;

    /**
     * 检测当前连接的库是否存在（连接URL中的数据库）
     *
     * @return 当前连接的库是否存在
     */
    private boolean currentDatabaseExists() {
        // 尝试以配置文件中的URL建立连接
        try {
            Connection connection = DriverManager.getConnection(url, username, password);
            connection.close();
        } catch (SQLException e) {
            // 若连接抛出异常则说明连接URL中指定数据库不存在
            return false;
        }
        // 正常情况下说明连接URL中数据库存在
        return true;
    }

    /**
     * 执行SQL脚本
     *
     * @param path        SQL脚本文件的路径
     * @param isClasspath SQL脚本路径是否是classpath路径
     * @param connection  数据库连接对象，通过这个连接执行脚本
     */
    private void runSQLScript(String path, boolean isClasspath, Connection connection) {
        try (InputStream sqlFileStream = isClasspath ? new ClassPathResource(path).getStream() : new FileInputStream(path)) {
            BufferedReader sqlFileStreamReader = new BufferedReader(new InputStreamReader(sqlFileStream, StandardCharsets.UTF_8));
            // 创建SQL脚本执行器对象
            ScriptRunner scriptRunner = new ScriptRunner(connection);
            // 使用SQL脚本执行器对象执行脚本
            scriptRunner.runScript(sqlFileStreamReader);
            // 最后关闭文件读取器
            sqlFileStreamReader.close();
        } catch (Exception e) {
            log.error("读取文件或者执行脚本失败！");
            e.printStackTrace();
        }
    }

    /**
     * 执行SQL脚本以创建数据库
     */
    private void createDatabase() {
        try {
            // 修改连接语句，重新建立连接
            // 重新建立的连接不再连接到指定库，而是直接连接到整个MySQL
            // 使用URI类解析并拆解连接地址，重新组装
            URI databaseURI = new URI(url.replace("jdbc:", ""));
            // 得到连接地址中的数据库平台名（例如mysql）
            String databasePlatform = databaseURI.getScheme();
            // 得到连接地址和端口
            String hostAndPort = databaseURI.getAuthority();
            // 得到连接地址中的库名
            String databaseName = databaseURI.getPath().substring(1);
            // 组装新的连接URL，不连接至指定库
            String newURL = "jdbc:" + databasePlatform + "://" + hostAndPort + "/";
            // 重新建立连接
            Connection connection = DriverManager.getConnection(newURL, username, password);
            Statement statement = connection.createStatement();
            // 执行SQL语句创建数据库
            statement.execute("create database if not exists `" + databaseName + "`");
            // 关闭会话和连接
            statement.close();
            connection.close();
            log.info("创建数据库完成！");
        } catch (URISyntaxException e) {
            log.error("数据库连接URL格式错误！");
            throw new RuntimeException(e);
        } catch (SQLException e) {
            log.error("连接失败！");
            throw new RuntimeException(e);
        }
    }

    /**
     * 该方法用于检测数据库是否需要初始化，如果是则执行SQL脚本进行初始化操作
     */
    @PostConstruct
    private void initDatabase() {
        log.info("开始检查数据库是否需要初始化...");
        // 检测当前连接数据库是否存在
        if (currentDatabaseExists()) {
            log.info("数据库存在，不需要初始化！");
            return;
        }
        log.warn("数据库不存在！准备执行初始化步骤...");
        // 先创建数据库
        createDatabase();
        // 然后再次连接，执行脚本初始化库中的表格
        try (Connection connection = DriverManager.getConnection(url, username, password)) {
            runSQLScript("/init.sql", true, connection);
            log.info("初始化表格完成！");
        } catch (Exception e) {
            log.error("初始化表格时，连接数据库失败！");
            e.printStackTrace();
        }
    }

}