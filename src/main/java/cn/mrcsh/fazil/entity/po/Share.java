package cn.mrcsh.fazil.entity.po;

import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.util.Date;

@Data
@TableName("t_share")
public class Share {
    @TableId
    private String shareId;
    private String shareUserId;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date shareExpireTime;
    private String sharePwd;
    private String shareFileId;
    private String shareUrl;
    private Date createTime;
    private Date updateTime;
}
