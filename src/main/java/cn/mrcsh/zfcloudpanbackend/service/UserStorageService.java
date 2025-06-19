package cn.mrcsh.zfcloudpanbackend.service;

import cn.mrcsh.zfcloudpanbackend.entity.dto.StorageConfigDTO;
import cn.mrcsh.zfcloudpanbackend.entity.po.FileInfo;
import cn.mrcsh.zfcloudpanbackend.entity.po.UserStorage;
import cn.mrcsh.zfcloudpanbackend.entity.structure.PageStructure;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.File;
import java.util.List;

public interface UserStorageService {
    void newStorage(UserStorage userStorage);

    PageStructure<FileInfo> getFileList(FileInfo fileInfo, String storageId, String path, Integer page_size, Integer current_page);

    void reNameFile(UserStorage userStorage, FileInfo fileInfo);

    void deleteFile(UserStorage userStorage, FileInfo source);

    void upload(FileInfo uploadFile,FileInfo ex, File source);

    void download(UserStorage userStorage, String filePath, HttpServletResponse response);

    boolean checkConnect(UserStorage storage);

    PageStructure<UserStorage> getAll(Integer pageSize, Integer currentPage);

    void removeExpansion(String id);

    void changeExpansion(UserStorage storage);
}
