package cn.mrcsh.zfcloudpanbackend.enums;

public enum MONITOR_TYPE {
    API("api", "接口调用频率"),
    DOWNLOAD("download", "下载次数"),
    USER_REG("register", "用户注册"),
    SERVER_DISK("disk", "服务器剩余空间"),
    SERVER_MEN("mem", "服务器内存占用"),
    SERVER_CPU("cpu", "服务器CPU占用"),
    NETWORK("network", "流量")
    ;

    private String type;
    private String desc;

    MONITOR_TYPE(String type, String desc) {
        this.type = type;
        this.desc = desc;
    }

    public String getType() {
        return type;
    }

    public String getDesc() {
        return desc;
    }
}
