package cn.mrcsh.zfcloudpanbackend;

import cn.hutool.http.HttpRequest;
import cn.hutool.http.HttpUtil;
import cn.mrcsh.zfcloudpanbackend.config.Temp;
import cn.mrcsh.zfcloudpanbackend.controller.BaseController;
import cn.mrcsh.zfcloudpanbackend.utils.SerialNumberUtil;
import com.alibaba.druid.spring.boot3.autoconfigure.DruidDataSourceAutoConfigure;
import com.alibaba.fastjson2.JSON;
import lombok.extern.slf4j.Slf4j;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.ApplicationArguments;
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
public class ZfCloudPanBackendApplication {

    private static ConfigurableApplicationContext context;

    public static void main(String[] args) {
        Temp.WorkDir = System.getProperty("user.dir");
        context = SpringApplication.run(ZfCloudPanBackendApplication.class, args);
    }

    /**
     * 调用该方法即可完成应用重启
     */
    public static void restart() {
        ApplicationArguments args = context.getBean(ApplicationArguments.class);
        Thread thread = new Thread(() -> {
            context.close();
            context = SpringApplication.run(ZfCloudPanBackendApplication.class, args.getSourceArgs());
        });
        thread.setDaemon(false); // 必须将重启线程设置为user线程，防止close方法触发jvm关闭所有线程，导致重启失败（当唯一运行的线程都是守护进程线程时，Java虚拟机将退出）
        thread.start();
    }

}
