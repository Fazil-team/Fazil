package cn.mrcsh.zfcloudpanbackend.service;

import cn.hutool.core.date.DateTime;
import cn.mrcsh.zfcloudpanbackend.entity.po.Monitor;
import cn.mrcsh.zfcloudpanbackend.entity.vo.MonitorVo;
import cn.mrcsh.zfcloudpanbackend.enums.MONITOR_TYPE;

import java.util.Date;
import java.util.List;

public interface MonitorService {
    void insertMonitor(Monitor monitor);

    MonitorVo selectMonitor(MONITOR_TYPE type, Date startTime, Date endTime);

    MonitorVo selectUserRegister(Date start, Date end);
}
