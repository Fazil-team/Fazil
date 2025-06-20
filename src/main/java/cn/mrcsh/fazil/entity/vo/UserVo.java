package cn.mrcsh.fazil.entity.vo;

import cn.mrcsh.fazil.entity.po.Menu;
import lombok.Data;

import java.util.List;

@Data
public class UserVo {
    private String id;
    private String username;
    private String token;
    private String avatar;
    private String lastLoginTime;
    private List<Menu> menus;
    private String role;
}
