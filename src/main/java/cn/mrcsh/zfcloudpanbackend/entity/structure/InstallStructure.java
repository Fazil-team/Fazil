package cn.mrcsh.zfcloudpanbackend.entity.structure;

import lombok.Data;

@Data
public class InstallStructure {
    private String mysqlIp;
    private String mysqlPort;
    private String mysqlUsername;
    private String mysqlPassword;
    private String redisIp;
    private String redisPort;
    private String redisUsername;
    private String redisPassword;
    private String adminUsername;
    private String adminPassword;
}
