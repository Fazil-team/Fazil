package cn.mrcsh.zfcloudpanbackend.entity.vo;

import cn.mrcsh.zfcloudpanbackend.entity.po.Menu;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
public class UserVo {
    private String username;
    private String token;
    private String avatar;
    private String lastLoginTime;
    private List<Menu> menus;
}
