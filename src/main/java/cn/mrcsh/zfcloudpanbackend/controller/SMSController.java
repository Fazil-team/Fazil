package cn.mrcsh.zfcloudpanbackend.controller;

import cn.hutool.core.util.IdUtil;
import cn.hutool.core.util.RandomUtil;
import cn.hutool.extra.mail.GlobalMailAccount;
import cn.hutool.extra.mail.MailAccount;
import cn.hutool.extra.mail.MailUtil;
import cn.mrcsh.zfcloudpanbackend.config.APPConfig;
import cn.mrcsh.zfcloudpanbackend.config.RedisConfig;
import cn.mrcsh.zfcloudpanbackend.entity.po.SysSettings;
import cn.mrcsh.zfcloudpanbackend.service.SysSettingsService;
import cn.mrcsh.zfcloudpanbackend.utils.RedisUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/sms")
@CrossOrigin
@Slf4j
@ConditionalOnProperty(name = "app.installed", havingValue = "true")
public class SMSController extends BaseController {

    @Autowired
    private RedisUtil redisUtil;

    @Autowired
    private SysSettingsService sysSettingsService;

    @GetMapping("/send_email_code")
    public response test(String email) {
        SysSettings sysSettings = sysSettingsService.getSysSettings();
        Object code = redisUtil.get(RedisConfig.KEY_OF_REG_EMAIL_LOCK + email);
        if(code != null) {
            return error("请勿重复频繁操作");
        }
        // 生成验证码
        String s = RandomUtil.randomNumbers(6);
        String seqId = IdUtil.getSnowflakeNextIdStr();
        // 验证码有效期15分钟
        MailAccount mailAccount = new MailAccount();
        mailAccount.setFrom(sysSettings.getSmtpEmail());
        mailAccount.setPass(sysSettings.getSmtpPassword());
        mailAccount.setHost(sysSettings.getSmtpHost());
        mailAccount.setPort(sysSettings.getSmtpPort());
        redisUtil.set(RedisConfig.KEY_OF_REG_EMAIL_CODE+seqId, s, 60*15);
        redisUtil.set(RedisConfig.KEY_OF_REG_EMAIL_LOCK+email, s, 60);
        String HTML = sysSettings.getSmtpPattern().replace("#email_code", s).replace("#title", sysSettings.getTitle());
        MailUtil.send(mailAccount, email.replaceAll("\"",""), sysSettings.getTitle(), HTML, null, true, null);
        return success(seqId);
    }
}
