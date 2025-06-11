package cn.mrcsh.zfcloudpanbackend.service.impl;

import cn.mrcsh.zfcloudpanbackend.entity.po.AccessLog;
import cn.mrcsh.zfcloudpanbackend.entity.structure.PageStructure;
import cn.mrcsh.zfcloudpanbackend.mapper.AccessLogMapper;
import cn.mrcsh.zfcloudpanbackend.service.AccessLogService;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
@ConditionalOnProperty(name = "app.installed", havingValue = "true")
public class AccessLogServiceImpl implements AccessLogService {

    @Autowired
    private AccessLogMapper accessLogMapper;

    @Async
    @Override
    public void insertLog(AccessLog accessLog) {
        accessLogMapper.insert(accessLog);
    }

    @Override
    public PageStructure<AccessLog> selectPage(Integer pageSize, Integer currentPage) {
        QueryWrapper<AccessLog> accessLogQueryWrapper = new QueryWrapper<>();
        accessLogQueryWrapper.orderByDesc("create_time");
        PageStructure<AccessLog> result = new PageStructure<>();
        Page<AccessLog> accessLogPage = accessLogMapper.selectPage(new Page<>(currentPage, pageSize),accessLogQueryWrapper);
        result.setData(accessLogPage.getRecords());
        result.setTotal(accessLogPage.getTotal());
        result.setPage_size(pageSize);
        return result;
    }
}
