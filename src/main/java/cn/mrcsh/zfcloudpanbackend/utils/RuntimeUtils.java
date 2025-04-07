package cn.mrcsh.zfcloudpanbackend.utils;

import cn.mrcsh.zfcloudpanbackend.service.AccessLogService;
import org.springframework.beans.BeansException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.context.EnvironmentAware;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;

@Component
public class RuntimeUtils implements ApplicationContextAware, EnvironmentAware {

    private static ApplicationContext applicationContext;


    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        RuntimeUtils.applicationContext = applicationContext;
    }

    @Override
    public void setEnvironment(Environment environment) {

    }

    public static <T> T getBean(Class<T> clz) {
        return applicationContext.getBean(clz);
    }
}
