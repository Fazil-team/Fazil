package cn.mrcsh.fazil.service.storage.impl;

import cn.hutool.core.io.FileUtil;
import cn.mrcsh.fazil.config.Temp;
import cn.mrcsh.fazil.entity.dto.FolderDto;
import cn.mrcsh.fazil.entity.po.FileInfo;
import cn.mrcsh.fazil.entity.po.UserStorage;
import cn.mrcsh.fazil.enums.FileTypes;
import cn.mrcsh.fazil.enums.MONITOR_TYPE;
import cn.mrcsh.fazil.enums.StorageType;
import cn.mrcsh.fazil.service.StorageService;
import cn.mrcsh.fazil.service.storage.AllSPools;
import jakarta.servlet.http.HttpServletResponse;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.net.PrintCommandListener;
import org.apache.commons.net.ftp.FTP;
import org.apache.commons.net.ftp.FTPClient;
import org.apache.commons.net.ftp.FTPFile;

import java.io.*;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

@Data
@Slf4j
public class FTPStorageService implements StorageService {
    private final String host;
    private final int port;
    private final String username;
    private final String password;
    private final String id;


    @Override
    public List<FileInfo> listFiles(String path) {
        List<FileInfo> fileInfos = new ArrayList<>();
        try {
            log.info("listFiles path:{}", path);
            FTPClient ftpClient = getFtpClient();
            FTPFile[] files = ftpClient.listFiles(path);
            for (FTPFile file : files) {
                FileInfo fileInfo = new FileInfo();
                fileInfo.setFileType(file.isDirectory() ? FileTypes.FOLDER.getType() : FileTypes.getFileType("." + FileUtil.getSuffix(file.getName())).getType());
                fileInfo.setFileName(file.getName());
                fileInfo.setFileId("-1");
                fileInfo.setFilePath(path + "/" + file.getName());
                fileInfo.setFileSize(file.getSize());
                fileInfo.setFileAvatar("/ex/download?fileAbsPath=" + StorageType.FTP.getType() + ":" + id + ":" + path + "/" + file.getName());
                fileInfo.setFileAbsPath(StorageType.FTP.getType() + ":" + id + ":" + path + "/" + file.getName());
                fileInfo.setCreateTime(file.getTimestamp().getTime());
                fileInfo.setUpdateTime(file.getTimestamp().getTime());
                fileInfos.add(fileInfo);
            }
        } catch (Exception e) {
            e.printStackTrace();
            throw new NullPointerException("获取文件列表失败");
        }
        return fileInfos;
    }

    @Override
    public void upload(FileInfo uploadFile, FileInfo fileInfo, File source) {
        try {
            FTPClient ftpClient = getFtpClient();
            String dir = uploadFile.getFilePath().replaceAll("/" + fileInfo.getFileName(), "");

            // 1. 切换目录
            if (!ftpClient.changeWorkingDirectory(dir)) {
                System.out.println("目录不存在，创建目录：" + dir);
                ftpClient.makeDirectory(dir); // 如果支持，可以递归创建
                ftpClient.changeWorkingDirectory(dir);
            }
            // 2. 设置传输参数
            ftpClient.setControlEncoding("UTF-8");
            ftpClient.setFileType(FTP.BINARY_FILE_TYPE);
            ftpClient.enterLocalPassiveMode();
            try (FileInputStream fileInputStream = new FileInputStream(source)) {
                boolean result = ftpClient.storeFile(uploadFile.getFileName(), fileInputStream);
                System.out.println("上传结果：" + result);
                if (!result) {
                    System.out.println("上传失败了兄弟，看日志吧！");
                }
            }
            System.out.println(dir);
            System.out.println(uploadFile.getFileName());
//            String remoteFilePath = uploadFile.getFilePath().replaceAll("/" + fileInfo.getFileName(), "") + uploadFile.getFileName();
//            FileInputStream fileInputStream = new FileInputStream(source);
//            boolean b = ftpClient.storeFile(remoteFilePath, fileInputStream);
//            System.out.println(b);
        } catch (Exception e) {
            e.printStackTrace();
            throw new NullPointerException("上传文件失败，请联系管理员");
        }

    }

    @Override
    public void download(String path, HttpServletResponse response) {
        try {
            response.setHeader("Content-Disposition", "inline;fileName=" + URLEncoder.encode(Paths.get(path).getFileName().toString(), StandardCharsets.UTF_8));
            FTPClient ftpClient = getFtpClient();
            InputStream in = ftpClient.retrieveFileStream(path);
            OutputStream out = response.getOutputStream();
            byte[] buffer = new byte[8192];
            int len;
            while ((len = in.read(buffer)) != -1) {
                out.write(buffer, 0, len);
                Temp.MonitorCache.put(MONITOR_TYPE.DOWNLOAD_FLEX.getType(), Temp.MonitorCache.getOrDefault(MONITOR_TYPE.DOWNLOAD_FLEX.getType(), 0L) + len);
            }
            out.flush();
            // 关闭数据连接（重要）
            boolean completed = ftpClient.completePendingCommand();
            if (!completed) {
                System.err.println("FTP 数据未完整读取完");
            }
        } catch (Exception e) {
            e.printStackTrace();
            throw new NullPointerException("读取文件错误");
        }
    }

    @Override
    public void delete(FileInfo path) {
        try {
            FTPClient ftpClient = getFtpClient();
            ftpClient.deleteFile(path.getFilePath());
        } catch (Exception e) {
            throw new NullPointerException("删除失败, " + e.getMessage());
        }

    }

    @Override
    public String getDownloadUrl(String path) {
        try {
            FTPClient ftpClient = AllSPools.ftpClientMap.get(id);
            InputStream in = ftpClient.retrieveFileStream("/path/to/file.docx");
        } catch (Exception e) {
            throw new NullPointerException("读取文件错误");
        }

        return "";
    }

    @Override
    public void reNameFile(FileInfo fileInfo) {
        try {
            FTPClient ftpClient = getFtpClient();
            ftpClient.rename(fileInfo.getFilePath(), fileInfo.getFilePath().substring(0, fileInfo.getFilePath().lastIndexOf("/")) + fileInfo.getFileName());
        } catch (Exception e) {
            throw new NullPointerException("修改文件名称失败");
        }
    }

    @Override
    public Object checkConnect() {
        try {
            FTPClient ftpClient = new FTPClient();
            ftpClient.connect(host, port);
            boolean login = ftpClient.login(username, password);
            if (!login) {
                throw new NullPointerException("连接失败，密码错误");
            }
        } catch (Exception e) {
            throw new NullPointerException("连接失败: " + e.getMessage());
        }
        return null;
    }

    @Override
    public void createFolder(UserStorage userStorage, FolderDto folder) {
        try {
            String path = folder.getFilePath().replaceAll("/" + userStorage.getName(), "") + folder.getFolderName();
            getFtpClient().makeDirectory(path);
        } catch (Exception e) {
            throw new NullPointerException("创建文件夹失败");
        }
    }

    public FTPClient getFtpClient() {
        try {
            FTPClient ftpClient = AllSPools.ftpClientMap.get(id);
            if (ftpClient == null) {
                FTPClient ftp = new FTPClient();
                ftp.connect(host, port);
                ftp.login(username, password);
                ftp.enterLocalPassiveMode(); // 必须要被动模式
                ftp.setFileType(FTP.BINARY_FILE_TYPE);
                ftpClient = ftp;
            }
            ftpClient.addProtocolCommandListener(new PrintCommandListener(new PrintWriter(System.out)));
            return ftpClient;
        } catch (Exception e) {
            throw new NullPointerException("创建FTP连接失败");
        }
    }
}
