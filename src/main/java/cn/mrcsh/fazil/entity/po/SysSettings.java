package cn.mrcsh.fazil.entity.po;

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
    private String icp;
    @TableField(exist = false)
    private boolean isRegister;
    private String indexCode;
    private String smtpHost;
    private Integer smtpPort;
    private String smtpEmail;
    private String smtpPassword;
    private String smtpPattern;
}
