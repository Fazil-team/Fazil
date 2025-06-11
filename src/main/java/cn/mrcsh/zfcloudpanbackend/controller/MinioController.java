package cn.mrcsh.zfcloudpanbackend.controller;

import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.web.bind.annotation.RestController;

@RestController("/minio")
@ConditionalOnProperty(name = "app.installed", havingValue = "true")
public class MinioController {

}
