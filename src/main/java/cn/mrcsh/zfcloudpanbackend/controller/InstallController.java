package cn.mrcsh.zfcloudpanbackend.controller;

import cn.mrcsh.zfcloudpanbackend.entity.structure.InstallStructure;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class InstallController extends BaseController {
    @PostMapping("/install")
    @Operation(tags = "安装")
    public response install(InstallStructure installStructure) {
        return success(installStructure);
    }
}
