package cn.mrcsh.fazil.entity.po;

import cn.mrcsh.fazil.entity.structure.BaseEntity;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
@TableName("t_user_storage")
public class UserStorage extends BaseEntity {
    @TableId(type = IdType.AUTO)
    private String id;
    private String userId;
    private String name;
    private String type;
    private String configJson;
}
