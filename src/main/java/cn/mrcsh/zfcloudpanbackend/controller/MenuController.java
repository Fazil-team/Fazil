package cn.mrcsh.zfcloudpanbackend.controller;

import cn.dev33.satoken.annotation.SaCheckLogin;
import cn.dev33.satoken.annotation.SaCheckPermission;

import cn.mrcsh.zfcloudpanbackend.entity.po.Menu;
import cn.mrcsh.zfcloudpanbackend.service.MenuService;
import cn.mrcsh.zfcloudpanbackend.utils.TreeUtils;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/menu")
@Tag(name = "菜单模块")
public class MenuController extends BaseController {

    @Autowired
    private MenuService menuService;

    @GetMapping
    
    @SaCheckLogin
    @SaCheckPermission("sys:menu:select")
    public response getMenus(){
        List<Menu> menuList = menuService.getMenuList();
        List<Menu> menus = TreeUtils.streamToTree(menuList, 0);
        return success(menus);
    }

    @PostMapping
    
    @SaCheckLogin
    @SaCheckPermission("sys:menu:new")
    public response addMenu(@RequestBody Menu menu){
        menu.setId(null);
        menuService.addMenu(menu);
        return success();
    }

    @PutMapping
    
    @SaCheckLogin
    @SaCheckPermission("sys:menu:update")
    public response updateMenu(@RequestBody Menu menu){
        menuService.updateMenu(menu);
        return success();
    }

    @DeleteMapping("/{id}")
    
    @SaCheckLogin
    @SaCheckPermission("sys:menu:remove")
    public response deleteMenu(@PathVariable Integer id){
        menuService.deleteMenu(id);
        return success();
    }
}
