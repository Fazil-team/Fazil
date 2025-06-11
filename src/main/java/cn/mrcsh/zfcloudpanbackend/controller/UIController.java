package cn.mrcsh.zfcloudpanbackend.controller;

import cn.hutool.core.io.FileUtil;
import cn.mrcsh.zfcloudpanbackend.config.APPConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.io.File;
import java.io.IOException;

@Controller
//@ConditionalOnProperty(name = "app.installed", havingValue = "true")
public class UIController {

    @Autowired
    private APPConfig appConfig;

    @RequestMapping(value = {
            "/ui"
    })
    public String ui() {
        if(appConfig.isInstalled()){
            return "forward:/ui/index.html/#/";
        }else {
            return "forward:/install/index.html";
        }
    }

    @RequestMapping(value = {
            "/admin"
    })
    public String admin() {
        if(appConfig.isInstalled()){
            return "forward:/admin/index.html/#/";
        }else {
            return "forward:/install/index.html";
        }
    }

    @RequestMapping(value = {
            "/"
    })
    public String index() {

        if(appConfig.isInstalled()){
            return "forward:/home/index.html";
        }else {
            return "forward:/install/index.html";
        }

    }
}
