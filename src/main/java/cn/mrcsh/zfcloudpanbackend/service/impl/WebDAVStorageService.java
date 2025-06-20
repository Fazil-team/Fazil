package cn.mrcsh.zfcloudpanbackend.service.impl;

import cn.hutool.core.io.FileUtil;
import cn.hutool.core.util.URLUtil;
import cn.mrcsh.zfcloudpanbackend.entity.po.FileInfo;
import cn.mrcsh.zfcloudpanbackend.enums.FileTypes;
import cn.mrcsh.zfcloudpanbackend.enums.StorageType;
import cn.mrcsh.zfcloudpanbackend.service.StorageService;
import com.github.sardine.Sardine;
import com.github.sardine.SardineFactory;
import jakarta.servlet.http.HttpServletResponse;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;


import java.io.File;
import java.io.InputStream;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@Data
public class WebDAVStorageService implements StorageService {
    private final String baseUrl;
    private final String folder;
    private final String username;
    private final String password;
    private final String id;

    @Override
    public List<FileInfo> listFiles(String path) {
        try {
            Sardine sardine = SardineFactory.begin(username, password);

            var resources = sardine.list(baseUrl + folder + path);
            List<FileInfo> fileInfos = new ArrayList<>();
            for (var res : resources) {
                if (res.getPath().equals(folder + path + "/") || res.getPath().equals(folder + "/") || res.getPath().equals(folder) || res.getPath().equals(path + "/")) {
                    continue;
                }
                FileInfo fileInfo = new FileInfo();
                fileInfo.setFileType(res.isDirectory() ? FileTypes.FOLDER.getType() : FileTypes.getFileType("." + FileUtil.getSuffix(res.getName())).getType());
                fileInfo.setFileName(res.getName());
                fileInfo.setFileId("-1");
                fileInfo.setFilePath(res.getPath());
                fileInfo.setFileSize(res.getContentLength());
                fileInfo.setFileAvatar(baseUrl + "/" + path + "/" + res.getName());
                fileInfo.setFileAbsPath(StorageType.WEBDAV.getType() + ":" + id + ":" + res.getPath());
                fileInfo.setCreateTime(res.getCreation());
                fileInfo.setUpdateTime(res.getModified());
                fileInfos.add(fileInfo);
            }
            return fileInfos;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return List.of();
    }

    @Override
    public void upload(FileInfo uploadFile, FileInfo fileInfo, File source) {
        try {
            Sardine sardine = SardineFactory.begin(username, password);
            String url = uploadFile.getFilePath().replaceAll("/" + fileInfo.getFileName(), baseUrl + "/") + uploadFile.getFileName();
            System.out.println(url);
            sardine.put(url, source, FileUtil.getSuffix(fileInfo.getFileName()));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    public void download(String path, HttpServletResponse response) {
        try {
            Sardine sardine = SardineFactory.begin(username, password);
            InputStream inputStream = sardine.get(URLUtil.encode(baseUrl + path));
            response.setHeader("Content-Disposition", "inline;fileName=" + URLEncoder.encode(Paths.get(path).getFileName().toString(), StandardCharsets.UTF_8));
            byte[] buffer = new byte[8192];
            int bytesRead;

            while ((bytesRead = inputStream.read(buffer)) != -1) {
                response.getOutputStream().write(buffer, 0, bytesRead);
            }

            response.getOutputStream().flush();
            response.getOutputStream().close();
            inputStream.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    public void delete(FileInfo fileInfo) {
        try {
            Sardine sardine = SardineFactory.begin(username, password);
            String url = baseUrl + fileInfo.getFilePath();
            sardine.delete(URLUtil.encode(url));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    public String getDownloadUrl(String path) {
        return "";
    }

    @Override
    public void reNameFile(FileInfo fileInfo) {
        try {
            Sardine sardine = SardineFactory.begin(username, password);
            String oldPath = baseUrl + fileInfo.getFilePath();
            String newPath = baseUrl + Paths.get(fileInfo.getFilePath()).getParent().resolve(fileInfo.getFileName()).toString();
            sardine.move(URLUtil.encode(oldPath), URLUtil.encode(newPath));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    public void checkConnect() {
        try {
            Sardine sardine = SardineFactory.begin(username, password);
            sardine.list(baseUrl);
        } catch (Exception e) {
            e.printStackTrace();
            throw new NullPointerException("连接失败");
        }

    }
}
