package cn.mrcsh.zfcloudpanbackend.controller;

import cn.dev33.satoken.exception.NotLoginException;
import cn.dev33.satoken.exception.NotPermissionException;
import cn.hutool.http.server.HttpServerResponse;
import cn.mrcsh.zfcloudpanbackend.enums.ErrorCode;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

@ControllerAdvice
@Slf4j
public class ABaseExceptionHandler extends BaseController {

    @ExceptionHandler(value = Exception.class)
    @ResponseBody
    public response error(Exception e, HttpServerResponse response){
        e.printStackTrace();
        if (e instanceof NotLoginException) {
            return error(ErrorCode.NO_LOGIN);
        } else if (e instanceof NullPointerException) {
            return error(ErrorCode.RUNTIME_EXCE);
        }else if(e instanceof NotPermissionException){
            return error(ErrorCode.NO_PERMISSION);
        }else {
            return error(e.getMessage());
        }
    }
}
