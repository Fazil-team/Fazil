package cn.mrcsh.zfcloudpanbackend.service;

import cn.mrcsh.zfcloudpanbackend.entity.po.FileInfo;
import cn.mrcsh.zfcloudpanbackend.entity.po.UserStorage;

import java.util.List;

public interface UserStorageService {
    void newStorage(UserStorage userStorage);

    List<FileInfo> getFileList(FileInfo fileInfo, String storageId, String path);
}
