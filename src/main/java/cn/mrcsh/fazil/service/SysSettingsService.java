package cn.mrcsh.fazil.service;

import cn.mrcsh.fazil.entity.po.SysSettings;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface SysSettingsService {
    void update(SysSettings sysSettings);

    SysSettings getSysSettings();

    void getSysImg(HttpServletResponse response, String type);

    void importUI(MultipartFile file) throws IOException;

}
