package cn.mrcsh.zfcloudpanbackend.controller;

import cn.dev33.satoken.annotation.SaCheckLogin;
import cn.mrcsh.zfcloudpanbackend.entity.dto.StorageConfigDTO;
import cn.mrcsh.zfcloudpanbackend.entity.po.FileInfo;
import cn.mrcsh.zfcloudpanbackend.entity.po.UserStorage;
import cn.mrcsh.zfcloudpanbackend.entity.structure.PageStructure;
import cn.mrcsh.zfcloudpanbackend.mapper.FileInfoMapper;
import cn.mrcsh.zfcloudpanbackend.mapper.UserStorageMapper;
import cn.mrcsh.zfcloudpanbackend.service.UserStorageService;
import com.alibaba.fastjson2.JSON;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

/**
 * 第三方对接接口
 */
@RestController
@RequestMapping("/expansion")
@CrossOrigin
@ConditionalOnProperty(name = "app.installed", havingValue = "true")
public class UserStorageController extends BaseController {

    @Autowired
    private UserStorageService userStorageService;

    @GetMapping
    @SaCheckLogin
    public response getAllExpansion(Integer page_size, Integer current_page) {
        PageStructure<UserStorage> userStorages = userStorageService.getAll(page_size, current_page);
        return success(userStorages);
    }

    @PostMapping
    public response newExpansion(@RequestBody StorageConfigDTO storage) {
        UserStorage userStorage = new UserStorage();
        userStorage.setConfigJson(JSON.toJSONString(storage.getConfig()));
        userStorage.setType(storage.getType());
        userStorage.setName(storage.getName());
        userStorageService.newStorage(userStorage);
        return success();
    }

    @PostMapping("/check_connect")
    @SaCheckLogin
    public response checkConnect(@RequestBody StorageConfigDTO storage) {
       boolean isSuccess = userStorageService.checkConnect(storage);
       return success(isSuccess);
    }
    @PutMapping
    @SaCheckLogin
    public response updateExpansion(@RequestBody UserStorage storage) {
        userStorageService.changeExpansion(storage);
        return success();
    }

    @DeleteMapping("/{id}")
    @SaCheckLogin
    public response deleteExpansion(@PathVariable String id) {
        userStorageService.removeExpansion(id);
        return success();
    }
}
