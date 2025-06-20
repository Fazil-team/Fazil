package cn.mrcsh.fazil.controller;

import cn.mrcsh.fazil.service.SysSettingsService;
import cn.mrcsh.fazil.service.UserService;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/common")
@ConditionalOnProperty(name = "app.installed", havingValue = "true")
public class CommonController extends BaseController{

    @Autowired
    private UserService userService;
    @Autowired
    private SysSettingsService sysSettingsService;

    // 获取静态文件夹文件
    @GetMapping("/resource/{type}")
    public void resource(HttpServletResponse response, @PathVariable String type, String user_id) throws Exception {
        switch (type){
            case "avatar" -> {
                userService.getUserAvatar(response ,user_id);
            }
            case "sys" -> {
                sysSettingsService.getSysImg(response, user_id);
            }
            default -> {}
        }
    }
}
