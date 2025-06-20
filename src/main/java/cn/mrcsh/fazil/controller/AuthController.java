package cn.mrcsh.fazil.controller;

import cn.dev33.satoken.stp.StpUtil;
import cn.hutool.core.util.StrUtil;
import cn.hutool.crypto.SecureUtil;

import cn.mrcsh.fazil.entity.dto.UserLoginDto;
import cn.mrcsh.fazil.entity.dto.UserRegisterDto;
import cn.mrcsh.fazil.entity.po.User;
import cn.mrcsh.fazil.entity.vo.UserVo;
import cn.mrcsh.fazil.mapper.RoleMapper;
import cn.mrcsh.fazil.service.MenuService;
import cn.mrcsh.fazil.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.util.Date;

@RestController
@RequestMapping("/auth")
@Slf4j
@CrossOrigin
@Tag(name = "鉴权模块")
@ConditionalOnProperty(name = "app.installed", havingValue = "true")
public class AuthController extends BaseController {

    @Autowired
    private MenuService menuService;

    @Autowired
    private UserService userService;

    @Autowired
    private RoleMapper roleMapper;


    @PostMapping("/login/{sys}")
    
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
            userVo.setId(user.getId());
            String roleName = roleMapper.selectById(user.getRole()).getRoleName();
            userVo.setRole(roleName);
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
    @Operation(summary = "注册")
    public response register(@RequestBody UserRegisterDto userRegisterDto) {
        if(StrUtil.isBlank(userRegisterDto.getUserName()) || StrUtil.isBlank(userRegisterDto.getPassword()) || StrUtil.isBlank(userRegisterDto.getCheckCode())){
            return error("表单未填写完整");
        }

        if(StrUtil.isBlank(userRegisterDto.getSeqId())){
            return error("请刷新页面重新获取验证码");
        }
        userService.register(userRegisterDto);
        return success();
    }

    @PostMapping("/new_user")
    public response newUser(@RequestBody UserRegisterDto userRegisterDto) {
        userRegisterDto.setSeqId("1");
        userService.register(userRegisterDto);
        return success();
    }
}
