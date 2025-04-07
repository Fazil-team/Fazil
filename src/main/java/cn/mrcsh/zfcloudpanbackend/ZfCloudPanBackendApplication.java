package cn.mrcsh.zfcloudpanbackend;

import cn.hutool.core.io.FileUtil;
import cn.hutool.http.HttpRequest;
import cn.hutool.http.HttpUtil;
import cn.mrcsh.zfcloudpanbackend.config.Temp;
import cn.mrcsh.zfcloudpanbackend.controller.BaseController;
import cn.mrcsh.zfcloudpanbackend.utils.SerialNumberUtil;
import com.alibaba.fastjson2.JSON;
import lombok.extern.slf4j.Slf4j;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import java.io.File;
import java.lang.reflect.Method;
import java.net.URL;
import java.net.URLClassLoader;

@SpringBootApplication
@MapperScan("cn.mrcsh.zfcloudpanbackend.mapper")
@EnableTransactionManagement
@EnableAspectJAutoProxy
@EnableAsync
@Slf4j
public class ZfCloudPanBackendApplication {

    public static void main(String[] args) {
//        try {
//            // 判断序列号是否有效
//            File file = new File(System.getProperty("user.dir")+"/license/license.key");
//            HttpRequest request = HttpUtil.createRequest(cn.hutool.http.Method.POST, "http://host.mrcsh.cn:6081/rsa/decode/" + SerialNumberUtil.getHwid());
//            request.form("file", file);
//            BaseController.response response = JSON.parseObject(request.execute().body(), BaseController.response.class);
//            if(response.getCode() != 200){
//                Temp.isAutoCheck = false;
//                log.info("注册失败: {}, 请自行重新注册", response.getMsg());
//            }else {
//                log.info("注册成功");
//                Temp.isAutoCheck = true;
//            }
//        }catch (Exception e) {
//            e.printStackTrace();
//        }

         SpringApplication.run(ZfCloudPanBackendApplication.class, args);
    }

}
