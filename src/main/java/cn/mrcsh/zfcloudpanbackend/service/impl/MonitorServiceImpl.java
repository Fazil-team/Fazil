package cn.mrcsh.zfcloudpanbackend.service.impl;

import cn.hutool.core.date.DateField;
import cn.hutool.core.date.DateTime;
import cn.hutool.core.date.DateUtil;
import cn.mrcsh.zfcloudpanbackend.entity.po.Monitor;
import cn.mrcsh.zfcloudpanbackend.entity.po.User;
import cn.mrcsh.zfcloudpanbackend.entity.vo.MonitorVo;
import cn.mrcsh.zfcloudpanbackend.enums.MONITOR_TYPE;
import cn.mrcsh.zfcloudpanbackend.mapper.MonitorMapper;
import cn.mrcsh.zfcloudpanbackend.mapper.UserMapper;
import cn.mrcsh.zfcloudpanbackend.service.MonitorService;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class MonitorServiceImpl implements MonitorService {

    @Autowired
    private MonitorMapper monitorMapper;

    @Autowired
    private UserMapper userMapper;


    @Override
    public void insertMonitor(Monitor monitor) {
        monitorMapper.insert(monitor);
    }

    @Override
    public MonitorVo selectMonitor(MONITOR_TYPE type, Date startTime, Date endTime) {
        QueryWrapper<Monitor> queryWrapper = new QueryWrapper<>();
        queryWrapper.between("time_point", startTime, endTime)
                .eq("type", type.getType());
        List<Monitor> monitors = monitorMapper.selectList(queryWrapper);
        List<String> times = new ArrayList<>();
        List<Long> data = new ArrayList<>();
        MonitorVo monitorVo = new MonitorVo();
        for (Monitor monitor : monitors) {
            times.add(new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(monitor.getTimePoint()));
            data.add(monitor.getNum());
        }
        monitorVo.setTime(times);
        monitorVo.setData(data);
        return monitorVo;
    }

    @Override
    public MonitorVo selectUserRegister(Date start, Date end) {
        List<DateTime> dateTimes = DateUtil.rangeToList(start, end, DateField.DAY_OF_YEAR);
        List<String> times = new ArrayList<>();
        List<Long> data = new ArrayList<>();
        for (DateTime date : dateTimes) {
            times.add(new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(date));
            QueryWrapper<User> queryWrapper = new QueryWrapper<>();
            DateTime dateTime = DateUtil.offsetDay(date, 1);
            queryWrapper.between("create_time", date, dateTime);
            List<User> users = userMapper.selectList(queryWrapper);
            data.add((long) users.size());
        }
        MonitorVo monitorVo = new MonitorVo();
        monitorVo.setTime(times);
        monitorVo.setData(data);
        return monitorVo;
    }
}
