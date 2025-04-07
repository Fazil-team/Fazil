package cn.mrcsh.zfcloudpanbackend.task;

import cn.hutool.core.util.IdUtil;
import cn.mrcsh.zfcloudpanbackend.config.Temp;
import cn.mrcsh.zfcloudpanbackend.entity.po.Monitor;
import cn.mrcsh.zfcloudpanbackend.enums.MONITOR_TYPE;
import cn.mrcsh.zfcloudpanbackend.service.MonitorService;
import jakarta.annotation.PostConstruct;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.LinkedHashMap;

@Component
@Slf4j
public class MonitorTask {

    @Autowired
    private MonitorService monitorService;

    @PostConstruct
    public void init() {
        log.info("MonitorTask init");
        new Thread(() -> {
            // 统计粒度5分钟
            while (true){
                try {
                    Thread.sleep(1000*60*5);
                    // 插入数据库
                    for (MONITOR_TYPE value : MONITOR_TYPE.values()) {
                        Monitor monitor = new Monitor();
                        monitor.setId(IdUtil.getSnowflakeNextIdStr());
                        monitor.setType(value.getType());
                        monitor.setNum(Temp.MonitorCache.get(value.getType()) == null ? 0 : Temp.MonitorCache.get(value.getType()));
                        monitor.setTimePoint(new Date());
                        monitorService.insertMonitor(monitor);
                    }
                    Temp.MonitorCache = new LinkedHashMap<>();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        }).start();

    }
}
