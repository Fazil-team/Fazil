package cn.mrcsh.fazil.controller;

import cn.dev33.satoken.annotation.SaCheckLogin;
import cn.hutool.core.io.FileUtil;
import cn.mrcsh.fazil.config.APPConfig;
import cn.mrcsh.fazil.config.Temp;
import cn.mrcsh.fazil.entity.po.SysSettings;
import cn.mrcsh.fazil.service.SysSettingsService;
import cn.mrcsh.fazil.utils.MinioUtils;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.core.io.ClassPathResource;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.charset.StandardCharsets;

@RestController
@RequestMapping("/setting")
@CrossOrigin
@Slf4j
@Tag(name = "设置模块")
@ConditionalOnProperty(name = "app.installed", havingValue = "true")
public class SettingsController extends BaseController {

    @Autowired
    private SysSettingsService service;
    @Autowired
    private MinioUtils minioUtils;

    @Autowired
    private APPConfig config;

    @PutMapping
    @SaCheckLogin
    public response saveSetting(@RequestBody SysSettings setting) {
        service.update(setting);
        return success();
    }

    @GetMapping
    public response settings() {
        SysSettings sysSettings = service.getSysSettings();
        sysSettings.setRegister(Temp.isAutoCheck);
        return success(sysSettings);
    }

    @PostMapping("/upload/{action}")
    @SaCheckLogin
    public response upload(@RequestParam("file") MultipartFile file, @PathVariable Integer action) throws IOException {
        String upload = "";
//        minioUtils.upload(file);
        log.info("文件名:{}, URL: {}, 后缀: {}", file.getOriginalFilename(), upload, FileUtil.getSuffix(file.getOriginalFilename()));
        SysSettings sysSettings = service.getSysSettings();
        File sys_img_folder = new File(config.getDataSavePath() + "/static/sys_img");
        if (!sys_img_folder.exists()) {
            sys_img_folder.mkdirs();
        }
        switch (action) {
            // 登录背景
            case 1 -> {
                File imgFile = new File(config.getDataSavePath() + "/static/sys_img", "bg." + FileUtil.getSuffix(file.getOriginalFilename()));
                file.transferTo(imgFile);
                sysSettings.setLoginBgImg(imgFile.getAbsolutePath());
            }
            // 整体logo
            case 2 -> {
                File imgFile = new File(config.getDataSavePath() + "/static/sys_img", "full_logo." + FileUtil.getSuffix(file.getOriginalFilename()));
                file.transferTo(imgFile);
                sysSettings.setLogo(imgFile.getAbsolutePath());
            }
            // 小图标
            case 3 -> {
                File icoFile = new File(Temp.WorkDir+"/static/favicon.ico");
                file.transferTo(icoFile);
                sysSettings.setLogoSmall(icoFile.getAbsolutePath());
            }
            default -> {
                return error("不支持的操作");
            }
        }
        service.update(sysSettings);
        return success(upload);
    }

    @GetMapping("/version")
    public response version() throws IOException {
        ClassPathResource classPathResource = new ClassPathResource("version");
        String s = FileUtil.readString(classPathResource.getURL(), StandardCharsets.UTF_8).replaceAll("\r\n", "");
        return success(s);
    }

    @PostMapping("/import_ui")
    @SaCheckLogin
    public response change_ui(MultipartFile file) throws IOException {
        service.importUI(file);
        return success();
    }
}
