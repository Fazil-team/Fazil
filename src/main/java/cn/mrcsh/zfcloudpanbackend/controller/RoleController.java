package cn.mrcsh.zfcloudpanbackend.controller;

import cn.dev33.satoken.annotation.SaCheckLogin;
import cn.dev33.satoken.annotation.SaCheckPermission;

import cn.mrcsh.zfcloudpanbackend.entity.po.Role;
import cn.mrcsh.zfcloudpanbackend.entity.structure.PageStructure;
import cn.mrcsh.zfcloudpanbackend.service.RoleService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/role")
@CrossOrigin
@Slf4j
@Tag(name = "角色模块")
@ConditionalOnProperty(name = "app.installed", havingValue = "true")
public class RoleController extends BaseController {

    @Autowired
    private RoleService roleService;

    @GetMapping
    
    @SaCheckLogin
    @SaCheckPermission("sys:role:select")
    public response allRoles(Integer page_size, Integer current_page){
        PageStructure<Role> roles = roleService.getRoles(current_page, page_size);
        return success(roles);
    }

    
    @PostMapping
    @SaCheckLogin
    @SaCheckPermission("sys:role:new")
    public response addRole(@RequestBody Role role){
        roleService.addRole(role);
        return success();
    }

    
    @DeleteMapping("/{id}")
    @SaCheckLogin
    @SaCheckPermission("sys:role:remove")
    public response deleteRole(@PathVariable("id") Integer id){
        roleService.deleteRole(id);
        return success();
    }

    
    @PutMapping
    @SaCheckLogin
    @SaCheckPermission("sys:role:update")
    public response updateRole(@RequestBody Role role){
        roleService.updateRole(role);
        return success();
    }
}
