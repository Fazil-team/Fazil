package cn.mrcsh.zfcloudpanbackend.controller;

import cn.dev33.satoken.annotation.SaCheckLogin;
import cn.dev33.satoken.annotation.SaCheckPermission;
import cn.mrcsh.zfcloudpanbackend.annotation.Monitor;
import cn.mrcsh.zfcloudpanbackend.entity.po.AccessLog;
import cn.mrcsh.zfcloudpanbackend.entity.structure.PageStructure;
import cn.mrcsh.zfcloudpanbackend.enums.MONITOR_TYPE;
import cn.mrcsh.zfcloudpanbackend.service.AccessLogService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/log")
@CrossOrigin
@Slf4j
@Tag(name = "日志模块")
public class LogController extends BaseController {

    @Autowired
    private AccessLogService accessLogService;

    @GetMapping
    @SaCheckLogin
    @SaCheckPermission("sys:log:select")
    @Monitor(MONITOR_TYPE.API)
    public response logs(Integer page_size, Integer current_page) {
        PageStructure<AccessLog> result = accessLogService.selectPage(page_size, current_page);
        return success(result);
    }
}
