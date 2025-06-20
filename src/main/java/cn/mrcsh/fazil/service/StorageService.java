package cn.mrcsh.fazil.service;

import cn.mrcsh.fazil.entity.po.FileInfo;
import jakarta.servlet.http.HttpServletResponse;

import java.io.File;
import java.util.List;

public interface StorageService {
    List<FileInfo> listFiles(String path);
    void upload(FileInfo uploadFile,FileInfo fileInfo, File source);
    void download(String path, HttpServletResponse response);
    void delete(FileInfo path);
    String getDownloadUrl(String path);
    void reNameFile(FileInfo fileInfo);
    void checkConnect();
}
