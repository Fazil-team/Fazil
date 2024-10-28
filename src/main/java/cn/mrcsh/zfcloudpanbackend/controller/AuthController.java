package cn.mrcsh.zfcloudpanbackend.controller;

import cn.dev33.satoken.stp.StpUtil;
import cn.hutool.crypto.SecureUtil;
import cn.mrcsh.zfcloudpanbackend.annotation.AccessLog;
import cn.mrcsh.zfcloudpanbackend.entity.dto.UserLoginDto;
import cn.mrcsh.zfcloudpanbackend.entity.dto.UserRegisterDto;
import cn.mrcsh.zfcloudpanbackend.entity.po.User;
import cn.mrcsh.zfcloudpanbackend.entity.vo.UserVo;
import cn.mrcsh.zfcloudpanbackend.service.MenuService;
import cn.mrcsh.zfcloudpanbackend.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.util.Date;

@RestController
@RequestMapping("/auth")
@Slf4j
@CrossOrigin
@Tag(name = "鉴权模块")
public class AuthController extends BaseController {

    @Autowired
    private MenuService menuService;

    @Autowired
    private UserService userService;


    @PostMapping("/login/{sys}")
    @AccessLog()
    @ApiResponses
    @Operation(summary = "登录")
    public response login(@RequestBody UserLoginDto userLoginDto, @PathVariable String sys) {
        UserVo userVo = new UserVo();
        userVo.setUsername(userLoginDto.getUsername());
        String passwd = userLoginDto.getPassword();
//        String passwd = SecureUtil.md5().digestHex(userLoginDto.getPassword());
        User user = userService.getUser(userLoginDto.getUsername());
        if (user == null) {
            return error("用户不存在");
        }
        String passwdSource = SecureUtil.sha256(passwd);
        if (passwdSource.equals(user.getPassword())) {
            StpUtil.login(user.getId());
            String tokenValue = StpUtil.getTokenInfo().getTokenValue();
            userVo.setToken(tokenValue);
            userVo.setMenus(menuService.getMenuListByRoleId(user.getRole(), sys));
            userVo.setAvatar(user.getAvatar());
            userVo.setLastLoginTime(new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date()));
            return success(userVo);
        }
        return error("密码错误");
    }

    @PostMapping("/logout")
    @Operation(summary = "登出")
    public response logout() {
        StpUtil.logout();
        return success();
    }

    @PostMapping("/register")
    @AccessLog()
    @Operation(summary = "注册")
    public response register(@RequestBody UserRegisterDto userRegisterDto) {
        User user = new User();
        user.setUserName(userRegisterDto.getUserName());
        user.setPassword(userRegisterDto.getPassword());
        user.setEmail(userRegisterDto.getEmail());
        user.setCreateTime(new Date());
        user.setUpdateTime(new Date());
        user.setRole(userRegisterDto.getRole());
        user.setSettings("{}");
        try {
            userService.addUser(user);
        } catch (Exception e) {
            return error("用户已存在");
        }
        return success();
    }
}
