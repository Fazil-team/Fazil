package cn.mrcsh.zfcloudpanbackend.service;

import cn.mrcsh.zfcloudpanbackend.entity.po.FileInfo;

import java.io.InputStream;
import java.util.List;

public interface StorageService {
    List<FileInfo> listFiles(String path);
    void upload(String path, InputStream data);
    InputStream download(String path);
    void delete(String path);
    String getDownloadUrl(String path);
}
