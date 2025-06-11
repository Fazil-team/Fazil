package cn.mrcsh.zfcloudpanbackend.aop;

import cn.mrcsh.zfcloudpanbackend.annotation.Lock;
import cn.mrcsh.zfcloudpanbackend.utils.RedisUtil;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.stereotype.Component;

import java.lang.reflect.Method;

@Aspect
@Component
@ConditionalOnProperty(name = "app.installed", havingValue = "true")
public class LockAspect {

    @Autowired
    private RedisUtil redisUtil;

    @Pointcut("@annotation(cn.mrcsh.zfcloudpanbackend.annotation.Lock)")
    public void pt() {}

    @Around("pt()")
    public Object lock(ProceedingJoinPoint joinPoint) {
        Object proceed = null;
        try {
            MethodSignature methodSignature = (MethodSignature) joinPoint.getSignature();
            Lock lock = methodSignature.getMethod().getAnnotation(Lock.class);
            // 获取锁
            Object o = redisUtil.get(lock.lockName());
            // 未获取到锁
            if(o != null){
                Thread.sleep(100);
                lock(joinPoint);
            }else { // 获取到锁
                // 加锁
                redisUtil.set(lock.lockName(), String.valueOf(System.currentTimeMillis()));
                proceed = joinPoint.proceed();
                // 释放锁
                redisUtil.del(lock.lockName());
            }
        } catch (Throwable e) {
            e.printStackTrace();
        }
        return proceed;
    }
}
