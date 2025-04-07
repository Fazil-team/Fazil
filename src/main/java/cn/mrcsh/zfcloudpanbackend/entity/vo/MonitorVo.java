package cn.mrcsh.zfcloudpanbackend.entity.vo;

import lombok.Data;

import java.util.List;

@Data
public class MonitorVo {
    private List<String> time;
    private List<Long> data;
}
