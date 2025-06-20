package cn.mrcsh.fazil;

import cn.mrcsh.fazil.config.Temp;
import com.alibaba.druid.spring.boot3.autoconfigure.DruidDataSourceAutoConfigure;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import java.io.File;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class, DruidDataSourceAutoConfigure.class})
@EnableTransactionManagement
@EnableAspectJAutoProxy
@EnableAsync
@Slf4j
public class Fazil {

    private static ConfigurableApplicationContext context;

    public static void main(String[] args) {
        // 初始化文件系统
        // 创建config文件夹
        Temp.WorkDir = System.getProperty("user.dir");
        File configFolder = new File(Temp.WorkDir + File.separator + "config");
        if(!configFolder.exists()){
            configFolder.mkdirs();
        }
        // 创建static文件夹
        File staticFolder = new File(Temp.WorkDir + File.separator + "static");
        if(!staticFolder.exists()){
            staticFolder.mkdirs();
        }
        context = SpringApplication.run(Fazil.class, args);
    }
}
