package cn.mrcsh.fazil.service;

import cn.mrcsh.fazil.entity.po.AccessLog;
import cn.mrcsh.fazil.entity.structure.PageStructure;

public interface AccessLogService {
    void insertLog(AccessLog accessLog);

    PageStructure<AccessLog> selectPage(Integer pageSize, Integer currentPage);
}
