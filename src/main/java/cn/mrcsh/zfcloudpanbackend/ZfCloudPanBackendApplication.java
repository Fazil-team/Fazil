package cn.mrcsh.zfcloudpanbackend;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication
@MapperScan("cn.mrcsh.zfcloudpanbackend.mapper")
@EnableTransactionManagement
@EnableAspectJAutoProxy
@EnableAsync
public class ZfCloudPanBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(ZfCloudPanBackendApplication.class, args);
    }

}
