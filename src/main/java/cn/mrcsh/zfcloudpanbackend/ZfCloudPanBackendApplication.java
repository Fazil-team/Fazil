package cn.mrcsh.zfcloudpanbackend;

import cn.hutool.http.HttpRequest;
import cn.hutool.http.HttpUtil;
import cn.mrcsh.zfcloudpanbackend.config.Temp;
import cn.mrcsh.zfcloudpanbackend.controller.BaseController;
import cn.mrcsh.zfcloudpanbackend.utils.SerialNumberUtil;
import com.alibaba.fastjson2.JSON;
import lombok.extern.slf4j.Slf4j;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import java.io.File;

@SpringBootApplication()
@MapperScan("cn.mrcsh.zfcloudpanbackend.mapper")
@EnableTransactionManagement
@EnableAspectJAutoProxy
@EnableAsync
@Slf4j
public class ZfCloudPanBackendApplication {

    public static void main(String[] args) {
//        Temp.WorkDir = System.getProperty("user.dir");
        SpringApplication.run(ZfCloudPanBackendApplication.class, args);
    }

}
