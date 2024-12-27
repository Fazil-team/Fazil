package cn.mrcsh.zfcloudpanbackend.service;

import cn.mrcsh.zfcloudpanbackend.entity.po.SysSettings;
import jakarta.servlet.http.HttpServletResponse;

public interface SysSettingsService {
    void update(SysSettings sysSettings);

    SysSettings getSysSettings();

    void getSysImg(HttpServletResponse response, String type);
}
