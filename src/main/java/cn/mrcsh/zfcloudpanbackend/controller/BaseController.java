package cn.mrcsh.zfcloudpanbackend.controller;

import cn.mrcsh.zfcloudpanbackend.enums.ErrorCode;
import lombok.AllArgsConstructor;
import lombok.Data;

public class BaseController {
    @Data
    @AllArgsConstructor
    public static class response {
        private Integer code;
        private String msg;
        private Object data;
    }

    public response success(){
        return new response(200, "success", null);
    }

    public response success(Object data){
        return new response(200, "success", data);
    }
    public response error(String msg){
        return new response(1, msg, null);
    }
    public response error(ErrorCode e){
        return new response(e.getCode(), e.getMessage(), null);
    }
}
