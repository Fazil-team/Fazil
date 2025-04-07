package cn.mrcsh.zfcloudpanbackend.controller;

import cn.dev33.satoken.annotation.SaCheckLogin;
import cn.dev33.satoken.annotation.SaCheckPermission;
import cn.hutool.core.date.DateUtil;
import cn.mrcsh.zfcloudpanbackend.config.Temp;
import cn.mrcsh.zfcloudpanbackend.entity.po.Monitor;
import cn.mrcsh.zfcloudpanbackend.entity.vo.MonitorVo;
import cn.mrcsh.zfcloudpanbackend.enums.MONITOR_TYPE;
import cn.mrcsh.zfcloudpanbackend.service.MonitorService;
import cn.mrcsh.zfcloudpanbackend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/monitor")
@CrossOrigin
public class MonitorController extends BaseController {

    @Autowired
    private MonitorService monitorService;

    @Autowired
    private UserService userService;

    @GetMapping("/user")
    @SaCheckLogin
    @SaCheckPermission("sys:monitor:query")
    public response users(){
        // 7天之内注册个数

        MonitorVo monitors = monitorService.selectUserRegister(DateUtil.offsetDay(new Date(), -7), new Date());
        // 获取总用户数量
        Long userCount = userService.selectCount();
        return success(Map.of(
                "user_count", userCount,
                "data", monitors
        ));
    }

    @GetMapping("/get_api_count")
    @SaCheckLogin
    @SaCheckPermission("sys:monitor:query")
    public response getApiCount(){
        MonitorVo monitorVo = monitorService.selectMonitor(MONITOR_TYPE.API,DateUtil.offsetDay(new Date(), -31), new Date());
        monitorVo.getTime().add(new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date()));
        monitorVo.getData().add(Temp.MonitorCache.get(MONITOR_TYPE.API.getType()));
        return success(monitorVo);
    }

    @GetMapping("/get_file_count")
    @SaCheckLogin
    @SaCheckPermission("sys:monitor:query")
    public response getFileCount(){
        MonitorVo monitorVo = monitorService.selectMonitor(MONITOR_TYPE.DOWNLOAD,DateUtil.offsetDay(new Date(), -31), new Date());
        return success(monitorVo);
    }

    @GetMapping("/flux")
    @SaCheckLogin
    @SaCheckPermission("sys:monitor:query")
    public response flux(){
        MonitorVo monitorVo = monitorService.selectMonitor(MONITOR_TYPE.NETWORK,DateUtil.offsetDay(new Date(), -31), new Date());
        monitorVo.getTime().add(new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date()));
        monitorVo.getData().add(Temp.MonitorCache.get(MONITOR_TYPE.NETWORK.getType()));
        return success(monitorVo);
    }
}
