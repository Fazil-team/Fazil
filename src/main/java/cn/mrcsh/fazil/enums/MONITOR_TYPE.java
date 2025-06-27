package cn.mrcsh.fazil.enums;

public enum MONITOR_TYPE {
    API("api", "接口调用频率"),
    DOWNLOAD_COUNT("download", "下载次数"),
    USER_REG("register", "用户注册"),
    SERVER_DISK("disk", "服务器剩余空间"),
    SERVER_MEN("mem", "服务器内存占用"),
    SERVER_CPU("cpu", "服务器CPU占用"),
    UPLOAD_FLEX("upload_flex", "上传流量"),
    DOWNLOAD_FLEX("download_flex", "下载流量")
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
