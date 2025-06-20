package cn.mrcsh.fazil.annotation;

import cn.mrcsh.fazil.enums.MONITOR_TYPE;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
public @interface Monitor {
    MONITOR_TYPE value() default MONITOR_TYPE.API;

}
