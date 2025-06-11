package cn.mrcsh.zfcloudpanbackend.controller;

import cn.hutool.core.util.IdUtil;
import cn.hutool.core.util.RandomUtil;
import cn.hutool.extra.mail.GlobalMailAccount;
import cn.hutool.extra.mail.MailAccount;
import cn.hutool.extra.mail.MailUtil;
import cn.mrcsh.zfcloudpanbackend.config.APPConfig;
import cn.mrcsh.zfcloudpanbackend.config.RedisConfig;
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
    private APPConfig appConfig;

    private String HTML_PATTERN = """
               <h1>${title}</h1>
               <p>${content}</p>
               <span>验证码有效期15分钟，请勿传播</span>
            """;

    @GetMapping("/send_email_code")
    public response test(String email) {
        log.info("1");
        Object code = redisUtil.get(RedisConfig.KEY_OF_REG_EMAIL_LOCK + email);
        log.info("2");
        if(code != null) {
            return error("请勿重复频繁操作");
        }
        // 生成验证码
        log.info("3");
        String s = RandomUtil.randomNumbers(6);
        log.info("4");
        String seqId = IdUtil.getSnowflakeNextIdStr();
        // 验证码有效期15分钟
        log.info("Mail{}", appConfig.getMailAccount());
        log.info("Mail PWD{}", appConfig.getMailPassword());
        MailAccount mailAccount = new MailAccount();
        mailAccount.setFrom(appConfig.getMailAccount());
        mailAccount.setPass(appConfig.getMailPassword());
        redisUtil.set(RedisConfig.KEY_OF_REG_EMAIL_CODE+seqId, s, 60*15);
        redisUtil.set(RedisConfig.KEY_OF_REG_EMAIL_LOCK+email, s, 60);
        String HTML = HTML_PATTERN.replace("${title}", "致飞网盘-欢迎您注册").replace("${content}", "您的验证码是："+s);
        MailUtil.send(mailAccount, email.replaceAll("\"",""), "致飞网盘", HTML, null, true, null);
        return success(seqId);
    }
}
