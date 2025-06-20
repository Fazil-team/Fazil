package cn.mrcsh.fazil.service.impl;

import cn.mrcsh.fazil.config.APPConfig;
import cn.mrcsh.fazil.entity.po.Role;
import cn.mrcsh.fazil.entity.po.User;
import cn.mrcsh.fazil.entity.structure.PageStructure;
import cn.mrcsh.fazil.mapper.RoleMapper;
import cn.mrcsh.fazil.service.RoleService;
import cn.mrcsh.fazil.service.UserService;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@ConditionalOnProperty(name = "app.installed", havingValue = "true")
public class RoleServiceImpl implements RoleService {

    @Autowired
    private APPConfig appConfig;

    @Autowired
    private RoleMapper roleMapper;

    @Autowired
    private UserService userService;

    @Override
    public void addRole(Role role) {
        roleMapper.insert(role);
    }

    @Override
    @Transactional
    public void deleteRole(Integer roleId) {
        List<User> users = userService.selectByRoleId(roleId);
        if(!users.isEmpty()){
            for (User user : users) {
                user.setRole(appConfig.getDefaultRoleId());
                userService.updateUser(user);
            }
        }
        roleMapper.deleteById(roleId);
    }

    @Override
    public void updateRole(Role role) {
        //TODO 向受影响用户发送权限变更消息
        roleMapper.updateById(role);
    }

    @Override
    public List<Role> getRoles(String roleName) {
        QueryWrapper<Role> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("role_name", roleName);
        return roleMapper.selectList(queryWrapper);
    }

    @Override
    public PageStructure<Role> getRoles(Integer currentPage, Integer pageSize) {
        PageStructure<Role> result = new PageStructure<>();
        Page<Role> rolePage = roleMapper.selectPage(new Page<>(currentPage, pageSize), null);
        result.setData(rolePage.getRecords());
        result.setTotal(rolePage.getTotal());
        return result;
    }

    @Override
    public Role getRole(Integer role) {
        return roleMapper.selectById(role);
    }
}
