package cn.mrcsh.fazil.service;

import cn.mrcsh.fazil.entity.po.Role;
import cn.mrcsh.fazil.entity.structure.PageStructure;

import java.util.List;

public interface RoleService {
    void addRole(Role role);
    void deleteRole(Integer role);
    void updateRole(Role role);
    List<Role> getRoles(String roleName);
    PageStructure<Role> getRoles(Integer currentPage, Integer pageSize);

    Role getRole(Integer role);
}
