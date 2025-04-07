package cn.mrcsh.zfcloudpanbackend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController("/notify")
public class NotifyController extends BaseController {

    @GetMapping("/all")
    public response getAllNotify() {
        return success();
    }

}
