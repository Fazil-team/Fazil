package cn.mrcsh.zfcloudpanbackend.entity.po;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@Data
@TableName("t_setting")
public class SysSettings {
    private Integer id;
    private String title;
    private String loginBgImg;
    private String logoSmall;
    private String logo;
    private String logoTextBlack;
    private String logoTextWhite;
    @TableField(exist = false)
    private String ICP;
    @TableField(exist = false)
    private boolean isRegister;
    private String indexCode;
}
