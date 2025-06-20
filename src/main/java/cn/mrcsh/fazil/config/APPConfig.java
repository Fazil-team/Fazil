package cn.mrcsh.fazil.config;

import lombok.Data;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
@Data
public class APPConfig {
    @Value("${app.default-role-id}")
    private Integer defaultRoleId;
    @Value("${app.data-save-path}")
    private String dataSavePath;
    @Value("${app.buffer-size}")
    private Integer bufferSize;
    @Value("${app.client-baseurl}")
    private String clientBaseURL;
    @Value("${app.init-user-size}")
    private Long initUserSize;
    @Value("${app.ffmpeg.enable}")
    private boolean enableFfmpeg;
    @Value("${app.installed}")
    private boolean isInstalled = false;
}
