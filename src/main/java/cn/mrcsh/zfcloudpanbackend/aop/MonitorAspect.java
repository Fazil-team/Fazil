package cn.mrcsh.zfcloudpanbackend.aop;

import cn.mrcsh.zfcloudpanbackend.annotation.Monitor;
import cn.mrcsh.zfcloudpanbackend.config.Temp;
import cn.mrcsh.zfcloudpanbackend.service.MonitorService;
import cn.mrcsh.zfcloudpanbackend.utils.RedisUtil;
import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Aspect
@Component
@Slf4j
public class MonitorAspect {

    @Pointcut("@annotation(cn.mrcsh.zfcloudpanbackend.annotation.Monitor)")
    public void pointCut() {}


    @Around("pointCut()")
    public Object around(ProceedingJoinPoint joinPoint) throws Throwable {
        // 获取方法对象
        MethodSignature methodSignature = (MethodSignature) joinPoint.getSignature();
        Monitor annotation = methodSignature.getMethod().getAnnotation(Monitor.class);
        Temp.MonitorCache.put(annotation.value().getType(), Temp.MonitorCache.getOrDefault(annotation.value().getType(), 0L) + 1);

        log.info("[监控 - {}] {}", annotation.value().getType(),Temp.MonitorCache);

        Object proceed = joinPoint.proceed();
        return proceed;
    }
}
