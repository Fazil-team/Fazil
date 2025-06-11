package cn.mrcsh.zfcloudpanbackend.controller;

import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController("/notify")
@ConditionalOnProperty(name = "app.installed", havingValue = "true")
public class NotifyController extends BaseController {

    @GetMapping("/all")
    public response getAllNotify() {
        return success();
    }

}
