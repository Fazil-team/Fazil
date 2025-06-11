package cn.mrcsh.zfcloudpanbackend.controller;

import cn.hutool.core.io.FileUtil;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.io.File;
import java.io.IOException;

@Controller
public class UIController {
    @RequestMapping(value = {
            "/ui"
    })
    public String ui() {
        return "forward:/ui/index.html/#/";
    }

    @RequestMapping(value = {
            "/admin"
    })
    public String admin() {
        return "forward:/admin/index.html/#/";
    }

    @RequestMapping(value = {
            "/home",
            "/home/"
    })
    public String home() {
        return "forward:/home/index.html";
    }

    @RequestMapping(value = {
            "/"
    })
    public String index() {
        return "forward:/index/index.html";
    }
}
