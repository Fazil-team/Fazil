package cn.mrcsh.fazil.entity.po;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

import java.util.Date;

@Data
@TableName("t_monitor")
public class Monitor {
    private String id;
    private Date timePoint;
    // 根据MONITOR_TYPE枚举查询
    private String type;
    private long num;
}
