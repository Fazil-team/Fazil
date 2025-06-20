package cn.mrcsh.fazil.service.impl;

import cn.hutool.core.io.FileUtil;
import cn.hutool.core.util.ZipUtil;
import cn.mrcsh.fazil.config.Temp;
import cn.mrcsh.fazil.entity.po.SysSettings;
import cn.mrcsh.fazil.mapper.SysSettingsMapper;
import cn.mrcsh.fazil.service.SysSettingsService;
import cn.mrcsh.fazil.utils.FileUtils;
import cn.mrcsh.fazil.utils.RedisUtil;
import com.alibaba.fastjson2.JSON;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.zip.ZipFile;

@Slf4j
@Service
@ConditionalOnProperty(name = "app.installed", havingValue = "true")
public class SysSettingsServiceImpl implements SysSettingsService {

    @Autowired
    private SysSettingsMapper sysSettingsMapper;

    @Autowired
    private RedisUtil redisUtil;

    @Autowired
    private FileUtils fileUtils;

    @Override
    public void update(SysSettings sysSettings) {
        sysSettings.setId(0);
        sysSettingsMapper.updateById(sysSettings);
        redisUtil.set("pan:settings", JSON.toJSONString(sysSettings));
    }

    @Override
    public SysSettings getSysSettings() {
        return sysSettingsMapper.selectById(0);
    }

    @Override
    public void getSysImg(HttpServletResponse response, String type) {
        SysSettings sysSettings = getSysSettings();
        switch (type) {
            case "1" -> {
                fileUtils.downloadFile(new File(sysSettings.getLoginBgImg()), response);
            }
            case "2" -> {
                fileUtils.downloadFile(new File(sysSettings.getLogo()), response);
            }
            case "3" -> {
                fileUtils.downloadFile(new File(sysSettings.getLogoSmall()), response);
            }
        }
    }

    @Override
    public void importUI(MultipartFile file) throws IOException {
            AtomicBoolean isHasAllFile = new AtomicBoolean(false);
            File resourceFolder = new File(Temp.WorkDir + File.separator + "static/home");
            File tempFolder = new File(Temp.WorkDir + File.separator + "static/temp");
            File tempFile = new File(tempFolder,"dist.zip");
            File indexFile = new File(resourceFolder, "dist.zip");
            if(!tempFolder.exists()){
                tempFolder.mkdirs();
            }
            file.transferTo(tempFile);
            ZipFile zipFile = new ZipFile(tempFile);
            ZipUtil.listFileNames(zipFile, null).forEach(fileName -> {
                log.info(fileName);
                if(fileName.equals("index.html")){
                    isHasAllFile.set(true);
                }
            });
            if(!isHasAllFile.get()){
                FileUtil.del(tempFolder);
                throw new NullPointerException("请检查压缩包内是否包含 [index.html] 并且在第一层");
            }
            FileUtil.del(resourceFolder);
            resourceFolder.mkdirs();
            FileUtil.copyFile(tempFile, indexFile);
            FileUtil.del(tempFolder);
            ZipUtil.unzip(indexFile, resourceFolder);

    }
}
