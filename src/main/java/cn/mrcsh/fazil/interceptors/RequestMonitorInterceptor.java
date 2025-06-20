package cn.mrcsh.fazil.interceptors;

import cn.hutool.core.util.IdUtil;
import cn.mrcsh.fazil.annotation.Monitor;
import cn.mrcsh.fazil.config.APPConfig;
import cn.mrcsh.fazil.config.Temp;
import cn.mrcsh.fazil.entity.po.AccessLog;
import cn.mrcsh.fazil.enums.MONITOR_TYPE;
import cn.mrcsh.fazil.service.AccessLogService;
import cn.mrcsh.fazil.utils.RuntimeUtils;
import com.alibaba.fastjson2.JSON;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import java.util.Date;

@Slf4j
@Component
@ConditionalOnProperty(name = "app.installed", havingValue = "true")
public class RequestMonitorInterceptor implements HandlerInterceptor {

    @Autowired
    private APPConfig appConfig;

    @Override
    @Monitor(MONITOR_TYPE.API)
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        String status = "成功";
        Temp.MonitorCache.put(MONITOR_TYPE.API.getType(), Temp.MonitorCache.getOrDefault(MONITOR_TYPE.API.getType(), 0L) + 1);
        AccessLog accessLog = new AccessLog();
        accessLog.setId(IdUtil.getSnowflakeNextIdStr());
        accessLog.setPath(request.getRequestURI());
        accessLog.setMethod(request.getMethod());
        accessLog.setCreateTime(new Date());
        accessLog.setUpdateTime(new Date());
        accessLog.setResult(status);
        // todo 测试日志
        accessLog.setAccessFrom("127.0.0.1");
        accessLog.setAccessAs("admin");
        try {
            accessLog.setParams(JSON.toJSONString(request.getParameterMap()));
            if(accessLog.getParams().length() > 255){
                accessLog.setParams("参数过长");
            }
        }catch (Exception e){
            accessLog.setParams("转换错误");
        }
        if(RuntimeUtils.getBean(APPConfig.class).isInstalled()){
            RuntimeUtils.getBean(AccessLogService.class).insertLog(accessLog);
        }
        return HandlerInterceptor.super.preHandle(request, response, handler);
    }
}
