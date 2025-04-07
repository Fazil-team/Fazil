package cn.mrcsh.zfcloudpanbackend.controller;

import cn.hutool.core.io.FileUtil;
import cn.hutool.http.HttpRequest;
import cn.hutool.http.HttpUtil;
import cn.hutool.http.Method;
import cn.mrcsh.zfcloudpanbackend.config.Temp;
import cn.mrcsh.zfcloudpanbackend.utils.SerialNumberUtil;
import com.alibaba.fastjson2.JSON;
import lombok.SneakyThrows;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;

@RestController
@RequestMapping("/license")
@CrossOrigin
public class LicenseController extends BaseController{

    @PostMapping("/check")
    @SneakyThrows
    public response checkLicense(MultipartFile file) {
        HttpRequest request = HttpUtil.createRequest(Method.POST, "http://host.mrcsh.cn:6081/rsa/decode/" + SerialNumberUtil.getHwid());
        File licenseFolder = new File(System.getProperty("user.dir") + "/license");
        File licenseFile = FileUtil.file(System.getProperty("user.dir") + "/license/license.key");
        if(!licenseFolder.exists()){
            licenseFolder.mkdirs();
        }
        if(!licenseFile.exists()){
            licenseFile.createNewFile();
        }
        file.transferTo(licenseFile);
        request.form("file", licenseFile);
        response response = JSON.parseObject(request.execute().body(), BaseController.response.class);
        response.setData(null);
        if(response.getCode() == 200){
            Temp.isAutoCheck = true;
        }
        return response;
    }
}
