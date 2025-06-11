package cn.mrcsh.zfcloudpanbackend.service.impl;

import cn.mrcsh.zfcloudpanbackend.entity.po.Menu;
import cn.mrcsh.zfcloudpanbackend.entity.po.Role;
import cn.mrcsh.zfcloudpanbackend.mapper.MenuMapper;
import cn.mrcsh.zfcloudpanbackend.mapper.RoleMapper;
import cn.mrcsh.zfcloudpanbackend.mapper.UserMapper;
import cn.mrcsh.zfcloudpanbackend.service.MenuService;
import cn.mrcsh.zfcloudpanbackend.service.RoleService;
import cn.mrcsh.zfcloudpanbackend.utils.TreeUtils;
import com.alibaba.fastjson2.JSON;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.DependsOn;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@DependsOn("databaseInitialize")
@ConditionalOnProperty(name = "app.installed", havingValue = "true")
public class MenuServiceImpl implements MenuService {

    @Autowired
    private MenuMapper menuMapper;

    @Autowired
    private RoleService roleService;

    @Autowired
    private RoleMapper roleMapper;
    @Qualifier("userMapper")
    @Autowired
    private UserMapper userMapper;

    @Override
    public void addMenu(Menu menu) {
        menuMapper.insert(menu);
    }

    @Override
    public void updateMenu(Menu menu) {
        menuMapper.updateById(menu);
    }

    @Override
    public void deleteMenu(Integer id) {
        //删除角色中的菜单
        List<Role> roles = roleMapper.selectList(null);
        if (roles.isEmpty()) {
            return;
        }
        roles.forEach(e->{
            List<Integer> menuIds = new ArrayList<>(List.of(JSON.parseObject(e.getMenuIds(), Integer[].class)));
            List<Integer> AuthIds = new ArrayList<>(List.of(JSON.parseObject(e.getAuthIds(), Integer[].class)));
            menuIds.removeIf(item->item.equals(id));
            AuthIds.removeIf(item->item.equals(id));
            e.setMenuIds(JSON.toJSONString(menuIds));
            e.setAuthIds(JSON.toJSONString(AuthIds));
            roleMapper.updateById(e);
        });
        menuMapper.deleteById(id);
    }

    @Override
    public List<Menu> getMenuList(Integer parentId) {
        QueryWrapper<Menu> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("menu_pid", parentId);
        return menuMapper.selectList(queryWrapper);
    }

    @Override
    public List<Menu> getMenuList() {
        return menuMapper.selectList(null);
    }

    @Override
    public List<Menu> getMenuListByRoleId(Integer roleId, String sys) {
        Role role = roleService.getRole(roleId);
        List<Menu> source = new ArrayList<>();
        String menuIds = role.getMenuIds();
        List ids = JSON.parseObject(menuIds, List.class);
        ids.forEach(id -> {
            Menu menu = menuMapper.selectById(Integer.parseInt(String.valueOf(id)));
            if(menu.getSys().equals(sys)){
                source.add(menu);
            }
        });
        return TreeUtils.streamToTree(source, 0);
    }

    @Override
    public List<String> getAuthList(String userId) {
        Integer roleId = userMapper.selectById(userId).getRole();
        Role role = roleService.getRole(roleId);
        List<String> source = new ArrayList<>();
        String menuIds = role.getAuthIds();
        List ids = JSON.parseObject(menuIds, List.class);
        ids.forEach(id -> {
            source.add(menuMapper.selectById(Integer.parseInt(String.valueOf(id))).getMenuPurview());
        });
        return source;
    }


}
