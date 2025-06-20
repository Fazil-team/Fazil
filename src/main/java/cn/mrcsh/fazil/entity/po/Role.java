package cn.mrcsh.fazil.entity.po;

import cn.mrcsh.fazil.entity.structure.BaseEntity;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
@TableName("t_role")
public class Role extends BaseEntity {
    @TableId(type = IdType.AUTO)
    private Integer id;
    private String roleName;
    private String menuIds;
    private String authIds;
}
