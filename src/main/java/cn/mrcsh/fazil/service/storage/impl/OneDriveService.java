package cn.mrcsh.fazil.service.storage.impl;

import cn.mrcsh.fazil.entity.dto.FolderDto;
import cn.mrcsh.fazil.entity.po.FileInfo;
import cn.mrcsh.fazil.entity.po.UserStorage;
import cn.mrcsh.fazil.service.StorageService;
import jakarta.servlet.http.HttpServletResponse;

import java.io.File;
import java.util.List;

public class OneDriveService implements StorageService {
    @Override
    public List<FileInfo> listFiles(String path) {
        return List.of();
    }

    @Override
    public void upload(FileInfo uploadFile, FileInfo fileInfo, File source) {

    }

    @Override
    public void download(String path, HttpServletResponse response) {

    }

    @Override
    public void delete(FileInfo path) {

    }

    @Override
    public String getDownloadUrl(String path) {
        return "";
    }

    @Override
    public void reNameFile(FileInfo fileInfo) {

    }

    @Override
    public void checkConnect() {

    }

    @Override
    public void createFolder(UserStorage userStorage, FolderDto folder) {

    }
}
