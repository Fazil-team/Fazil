package cn.mrcsh.zfcloudpanbackend.service.impl;

import cn.hutool.core.io.FileUtil;
import cn.mrcsh.zfcloudpanbackend.entity.po.FileInfo;
import cn.mrcsh.zfcloudpanbackend.enums.FileTypes;
import cn.mrcsh.zfcloudpanbackend.enums.StorageType;
import cn.mrcsh.zfcloudpanbackend.service.StorageService;
import com.github.sardine.Sardine;
import com.github.sardine.SardineFactory;
import lombok.Data;


import java.io.File;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

@Data
public class WebDAVStorageService implements StorageService {
    private final String baseUrl;
    private final String username;
    private final String password;
    private final String id;

    @Override
    public List<FileInfo> listFiles(String path) {
        try {
            Sardine sardine = SardineFactory.begin(username, password);

            var resources = sardine.list(baseUrl + "/" + path);
            List<FileInfo> fileInfos = new ArrayList<>();
            for (var res : resources) {
                FileInfo fileInfo = new FileInfo();
                fileInfo.setFileType(res.isDirectory() ? FileTypes.FOLDER.getType() : FileTypes.getFileType("." + FileUtil.getSuffix(res.getName())).getType());
                fileInfo.setFileName(res.getName());
                fileInfo.setFileId("-1");
                fileInfo.setFilePath(res.getPath());
                fileInfo.setFileSize(res.getContentLength());
                fileInfo.setFileAbsPath(StorageType.WEBDAV.getType() + ":" + id + ":" + res.getPath());
                fileInfos.add(fileInfo);
            }
            return fileInfos;
        } catch (Exception e) {

        }
        return List.of();
    }

    @Override
    public void upload(String path, InputStream data) {

    }

    @Override
    public InputStream download(String path) {
        return null;
    }

    @Override
    public void delete(String path) {

    }

    @Override
    public String getDownloadUrl(String path) {
        return "";
    }
}
