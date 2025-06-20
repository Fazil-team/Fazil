package cn.mrcsh.fazil.service;

import cn.mrcsh.fazil.entity.po.Menu;

import java.util.List;

public interface MenuService {
    void addMenu(Menu menu);
    void updateMenu(Menu menu);
    void deleteMenu(Integer id);
    List<Menu> getMenuList(Integer parentId);
    List<Menu> getMenuList();
    List<Menu> getMenuListByRoleId(Integer role, String sys);
    List<String> getAuthList(String userId);
}
