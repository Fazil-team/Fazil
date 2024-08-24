package cn.mrcsh.zfcloudpanbackend.controller;

import cn.hutool.core.io.FileUtil;
import cn.mrcsh.zfcloudpanbackend.entity.po.SysSettings;
import cn.mrcsh.zfcloudpanbackend.service.SysSettingsService;
import cn.mrcsh.zfcloudpanbackend.utils.MinioUtils;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/setting")
@CrossOrigin
@Slf4j
@Tag(name = "设置模块")
public class SettingsController extends BaseController {

    @Autowired
    private SysSettingsService service;
    @Autowired
    private MinioUtils minioUtils;

    @PutMapping
    public response saveSetting(@RequestBody SysSettings setting) {
        service.update(setting);
        return success();
    }

    @GetMapping
    public response settings(){
        SysSettings sysSettings = service.getSysSettings();
        return success(sysSettings);
    }

    @PostMapping("/upload/{action}")
    public response upload(@RequestParam("file") MultipartFile file, @PathVariable Integer action) {
        String upload = minioUtils.upload(file);
        log.info("文件名:{}, URL: {}, 后缀: {}",file.getOriginalFilename(),upload, FileUtil.getSuffix(file.getOriginalFilename()));
        SysSettings sysSettings = service.getSysSettings();
        switch (action){
            case 1->{
                sysSettings.setLoginBgImg(upload);
            }
            case 2->{
                sysSettings.setLogo(upload);
            }
            case 3->{
                sysSettings.setLogoSmall(upload);
            }
            case 4->{
                sysSettings.setLogoTextBlack(upload);
            }
            case 5->{
                sysSettings.setLogoTextWhite(upload);
            }
            default -> {return error("不支持的操作");}
        }
        service.update(sysSettings);
        return success(upload);
    }
}
