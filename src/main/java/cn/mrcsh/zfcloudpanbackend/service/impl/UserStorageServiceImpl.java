package cn.mrcsh.zfcloudpanbackend.service.impl;

import cn.dev33.satoken.stp.StpUtil;
import cn.hutool.core.util.IdUtil;
import cn.mrcsh.zfcloudpanbackend.entity.dto.FolderDto;
import cn.mrcsh.zfcloudpanbackend.entity.po.FileInfo;
import cn.mrcsh.zfcloudpanbackend.entity.po.UserStorage;
import cn.mrcsh.zfcloudpanbackend.enums.StorageType;
import cn.mrcsh.zfcloudpanbackend.factory.StorageServiceFactory;
import cn.mrcsh.zfcloudpanbackend.mapper.UserStorageMapper;
import cn.mrcsh.zfcloudpanbackend.service.FileService;
import cn.mrcsh.zfcloudpanbackend.service.StorageService;
import cn.mrcsh.zfcloudpanbackend.service.UserStorageService;
import com.alibaba.fastjson2.JSON;
import com.alibaba.fastjson2.TypeReference;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

@Service
public class UserStorageServiceImpl implements UserStorageService {

    @Autowired
    private UserStorageMapper userStorageMapper;

    @Autowired
    private FileService fileService;

    @Override
    public void newStorage(UserStorage userStorage) {
        userStorage.setId(IdUtil.getSnowflakeNextIdStr());
        userStorage.setUserId((String) StpUtil.getLoginId());
        userStorageMapper.insert(userStorage);
        FolderDto folderDto = new FolderDto();
        folderDto.setFolderName(userStorage.getName());
        folderDto.setFilePath("/");
        fileService.createFolder(folderDto);
    }

    @Override
    public List<FileInfo> getFileList(FileInfo fileInfo,String storageId, String path) {
        if(fileInfo.getFileAbsPath() == null){
            return null;
        }
        String[] split = fileInfo.getFileAbsPath().substring(0, fileInfo.getFileAbsPath().length() - 1).split(":");
        String[] path_split = path.split("/");
        UserStorage userStorage = userStorageMapper.selectById(split[1]);
        StorageType storageType = StorageType.getStorageType(split[0]);
        switch (storageType) {
            case WEBDAV -> {
                String realPath = "";
                if (path_split.length > 2) {
                    for (int i = 0; i < path_split.length; i++) {
                        if (i > 1) {
                            realPath += "/" + path_split[i];
                        }
                    }
                } else {
                    realPath = "/";
                }
                StorageService service = StorageServiceFactory.getService(storageType.getType(), JSON.parseObject(userStorage.getConfigJson(), new TypeReference<HashMap<String, String>>() {
                }),split[1]);
                return service.listFiles(realPath);
            }
            default -> {
                return null;
            }
        }
    }
}
