package cn.mrcsh.zfcloudpanbackend.entity.po;

import cn.mrcsh.zfcloudpanbackend.entity.structure.BaseEntity;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
@TableName("t_user_storage")
public class UserStorage extends BaseEntity {
    private String id;
    private String userId;
    private String name;
    private String type;
    private String configJson;
}
