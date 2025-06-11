package cn.mrcsh.zfcloudpanbackend.entity.structure;

import lombok.Data;

@Data
public class InstallStructure {
    private String mysql_host;
    private int mysql_port;
    private String mysql_db_name;
    private String mysql_username;
    private String mysql_password;
    private String redis_host;
    private int redis_port;
    private String redis_username;
    private String redis_password;
    private String admin_username;
    private String admin_password;
    private int app_port;
    private String data_dir;
    private boolean ffmpeg;
    private String ffmpeg_bin_dir;
}
