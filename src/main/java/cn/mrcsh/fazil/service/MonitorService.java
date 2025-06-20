package cn.mrcsh.fazil.service;

import cn.mrcsh.fazil.entity.po.Monitor;
import cn.mrcsh.fazil.entity.vo.MonitorVo;
import cn.mrcsh.fazil.enums.MONITOR_TYPE;

import java.util.Date;

public interface MonitorService {
    void insertMonitor(Monitor monitor);

    MonitorVo selectMonitor(MONITOR_TYPE type, Date startTime, Date endTime);

    MonitorVo selectUserRegister(Date start, Date end);
}
