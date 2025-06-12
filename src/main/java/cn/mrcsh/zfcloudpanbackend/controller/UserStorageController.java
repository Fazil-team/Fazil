package cn.mrcsh.zfcloudpanbackend.controller;

import cn.mrcsh.zfcloudpanbackend.entity.dto.StorageConfigDTO;
import cn.mrcsh.zfcloudpanbackend.entity.po.FileInfo;
import cn.mrcsh.zfcloudpanbackend.entity.po.UserStorage;
import cn.mrcsh.zfcloudpanbackend.service.UserStorageService;
import com.alibaba.fastjson2.JSON;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

/**
 * 第三方对接接口
 */
@RestController
@RequestMapping("/expansion")
public class UserStorageController extends BaseController {

    @Autowired
    private UserStorageService userStorageService;

    @GetMapping
    public response getAllExpansion() {
        return success();
    }

    @PostMapping
    public response newExpansion(@RequestBody StorageConfigDTO storage) {
        UserStorage userStorage = new UserStorage();
        userStorage.setConfigJson(JSON.toJSONString(storage.getConfig()));
        userStorage.setType(storage.getType());
        userStorageService.newStorage(userStorage);
        return success();
    }

    @PutMapping
    public response updateExpansion() {
        return success();
    }

    @DeleteMapping
    public response deleteExpansion() {
        return success();
    }

    /// /////第三方文件抽象接口//// ///

    @GetMapping("/file")
    public response getFiles(String storageId, String path) {
//       List<FileInfo> fileInfos = userStorageService.getFileList(storageId, path);
        return success();
    }

    @PostMapping("/file")
    public response uploadFile(@RequestParam("file") MultipartFile file) {
     return success();
    }

    @PutMapping("/file")
    public response updateFile() {
        return success();
    }

    @DeleteMapping("/file")
    public response deleteFile() {
        return success();
    }
}
