package cn.mrcsh.zfcloudpanbackend.service.impl;

import cn.mrcsh.zfcloudpanbackend.entity.po.SysSettings;
import cn.mrcsh.zfcloudpanbackend.mapper.SysSettingsMapper;
import cn.mrcsh.zfcloudpanbackend.service.SysSettingsService;
import cn.mrcsh.zfcloudpanbackend.utils.FileUtils;
import cn.mrcsh.zfcloudpanbackend.utils.RedisUtil;
import com.alibaba.fastjson2.JSON;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.File;

@Service
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
        switch (type){
            case "1" ->{
                fileUtils.downloadFile(new File(sysSettings.getLoginBgImg()), response);
            }
            case "2" ->{
                fileUtils.downloadFile(new File(sysSettings.getLogo()), response);
            }
            case "3" ->{
                fileUtils.downloadFile(new File(sysSettings.getLogoSmall()), response);
            }
            case "4" ->{
                fileUtils.downloadFile(new File(sysSettings.getLogoTextBlack()), response);
            }
            case "5" ->{
                fileUtils.downloadFile(new File(sysSettings.getLogoTextWhite()      ), response);
            }
        }
    }
}
