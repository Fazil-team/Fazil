package cn.mrcsh.fazil.service.storage.impl;

import cn.hutool.core.io.FileUtil;
import cn.hutool.core.util.URLUtil;
import cn.mrcsh.fazil.config.Temp;
import cn.mrcsh.fazil.entity.dto.FolderDto;
import cn.mrcsh.fazil.entity.po.FileInfo;
import cn.mrcsh.fazil.entity.po.UserStorage;
import cn.mrcsh.fazil.enums.FileTypes;
import cn.mrcsh.fazil.enums.MONITOR_TYPE;
import cn.mrcsh.fazil.enums.StorageType;
import cn.mrcsh.fazil.service.StorageService;
import com.github.sardine.Sardine;
import com.github.sardine.SardineFactory;
import jakarta.servlet.http.HttpServletResponse;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;


import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.InputStream;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
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

            var resources = sardine.list(URLUtil.encode(baseUrl + folder + path));
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
            byte[] content = Files.readAllBytes(source.toPath());
            InputStream input = new ByteArrayInputStream(content);
            Sardine sardine = SardineFactory.begin(username, password);
            String url = uploadFile.getFilePath().replaceAll("/" + fileInfo.getFileName(), baseUrl) + uploadFile.getFileName();
            sardine.put(URLUtil.encode(url), input);
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
                Temp.MonitorCache.put(MONITOR_TYPE.DOWNLOAD_FLEX.getType(), Temp.MonitorCache.getOrDefault(MONITOR_TYPE.DOWNLOAD_FLEX.getType(), 0L) + bytesRead);
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

    @Override
    public void createFolder(UserStorage userStorage,  FolderDto folder) {
        try {
            Sardine sardine = SardineFactory.begin(username, password);
            String url = baseUrl + folder.getFilePath().replaceAll("/" + userStorage.getName(), "") + folder.getFolderName();
            sardine.createDirectory(url);
        }catch (Exception e){
            throw new NullPointerException("创建失败");
        }

    }
}
