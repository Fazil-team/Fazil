package cn.mrcsh.fazil.entity.po;

import cn.mrcsh.fazil.entity.structure.BaseEntity;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Data
@TableName("t_menu")
public class Menu extends BaseEntity {
    @TableId(type = IdType.AUTO)
    private Integer id;
    private String menuName;
    private String menuPurview;
    private String menuRouterPath;
    private Integer menuPid;
    private String menuComment;
    private String icon;
    private boolean outline;
    private String menuType;
    private String sys;
    @TableField(exist = false)
    private List<Menu> treeMenus = null;
}
