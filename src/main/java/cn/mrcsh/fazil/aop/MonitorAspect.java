package cn.mrcsh.fazil.aop;

import cn.mrcsh.fazil.annotation.Monitor;
import cn.mrcsh.fazil.config.Temp;
import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.stereotype.Component;

@Aspect
@Component
@Slf4j
public class MonitorAspect {

    @Pointcut("@annotation(cn.mrcsh.fazil.annotation.Monitor)")
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
