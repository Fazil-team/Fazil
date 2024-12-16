package cn.mrcsh.zfcloudpanbackend.enums;

public enum ErrorCode {
    NO_LOGIN(2,"未登陆"),
    NO_PERMISSION(3,"无此权限"),
    RUNTIME_EXCE(1, "系统异常")

    ;
    private Integer code;
    private String message;

    ErrorCode(Integer code, String message) {
        this.code = code;
        this.message = message;
    }

    public Integer getCode() {
        return code;
    }

    public String getMessage() {
        return message;
    }
}
