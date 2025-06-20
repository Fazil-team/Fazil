package cn.mrcsh.fazil.entity.structure;

import lombok.Data;

import java.util.Date;

@Data
public class BaseEntity {
    // 创建时间
    private Date createTime;
    // 更细时间
    private Date updateTime;
    // 是否删除
    private boolean deleted;
}
