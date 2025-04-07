package cn.mrcsh.zfcloudpanbackend.utils;

import cn.mrcsh.zfcloudpanbackend.config.APPConfig;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.io.File;
import java.io.FileInputStream;

@Component
@Slf4j
public class FileUtils {

    @Autowired
    private APPConfig config;

    public void downloadFile(File file, HttpServletResponse response) {
        try {
            response.setHeader("Content-Disposition", "attachment;");
            response.setContentLengthLong(file.length());
            FileInputStream fis = new FileInputStream(file);
            byte[] buffer = new byte[config.getBufferSize()];
            int bytesRead;
            while ((bytesRead = fis.read(buffer)) != -1) {
                response.getOutputStream().write(buffer, 0, bytesRead);
            }
            response.getOutputStream().flush();
            response.getOutputStream().close();
            fis.close();
        }catch (Exception e) {
            log.error("[FileDownloader] 文件: {} 下载失败", file.getName());
        }

    }

}
