package cn.mrcsh.zfcloudpanbackend.service.impl;

import cn.dev33.satoken.stp.StpUtil;
import cn.hutool.core.io.FileUtil;
import cn.hutool.core.util.IdUtil;
import cn.mrcsh.zfcloudpanbackend.config.APPConfig;
import cn.mrcsh.zfcloudpanbackend.config.Temp;
import cn.mrcsh.zfcloudpanbackend.entity.dto.FolderDto;
import cn.mrcsh.zfcloudpanbackend.entity.po.FileInfo;
import cn.mrcsh.zfcloudpanbackend.entity.po.User;
import cn.mrcsh.zfcloudpanbackend.entity.structure.PageStructure;
import cn.mrcsh.zfcloudpanbackend.enums.ENV;
import cn.mrcsh.zfcloudpanbackend.mapper.FileInfoMapper;
import cn.mrcsh.zfcloudpanbackend.mapper.UserMapper;
import cn.mrcsh.zfcloudpanbackend.service.FileService;
import cn.mrcsh.zfcloudpanbackend.service.UserService;
import cn.mrcsh.zfcloudpanbackend.utils.RedisUtil;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.*;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@Service
public class FileServiceImpl implements FileService {

    @Value("${sa-token.token-name}")
    private String tokenKey;

    @Autowired
    private RedisUtil redisUtil;

    @Autowired
    private FileInfoMapper mapper;

    @Autowired
    private UserMapper userMapper;

    @Autowired
    private UserService userService;

    @Autowired
    private APPConfig config;

    @Override
    public synchronized void save(FileInfo fileInfo) throws IOException {
        FileInfo source = mapper.selectById(fileInfo.getFileId());
        if (source == null) {
            fileInfo.setCreateTime(new Date());
            mapper.insert(fileInfo);
        } else {
            fileInfo.setUpdateTime(new Date());
            mapper.updateById(fileInfo);
        }
        if (fileInfo.getChunkNum().equals(fileInfo.getChunkIndex() + 1)) {
            Temp.num++;
            String loginId = (String) StpUtil.getLoginId();
            User user = userMapper.selectById(loginId);
            user.setUsedStorage(user.getUsedStorage() + fileInfo.getFileSize());
            userMapper.updateById(user);
            System.out.println("完事儿" + Temp.num + "|" + user.getUsedStorage() + "|" + fileInfo.getFileSize() + "|" + (user.getUsedStorage() + fileInfo.getFileSize()));
        }
        saveFile(fileInfo);
    }

    public void saveFile(FileInfo fileInfo) throws IOException {
        File folder = new File(config.getDataSavePath() + File.separator + fileInfo.getFileAbsPath() + "temp");
        if (!folder.exists()) {
            folder.mkdirs();
        }
        File temp = new File(folder, String.valueOf(fileInfo.getChunkIndex()));
        if (!temp.exists()) {
            temp.createNewFile();
        }
        fileInfo.getFile().transferTo(temp);
        if (fileInfo.getChunkIndex() + 1 == fileInfo.getChunkNum()) {
            transform(fileInfo);
        }
    }

    @Override
    public void transform(FileInfo source) throws IOException {
        FileInfo fileInfo = mapper.selectById(source.getFileId());
        File sourceFile = new File(config.getDataSavePath() + File.separator + fileInfo.getFileAbsPath());
        if (!sourceFile.exists() || !sourceFile.isFile()) {
            sourceFile.createNewFile();
        }
        BufferedOutputStream outputStream = new BufferedOutputStream(new FileOutputStream(sourceFile));
//        BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(new FileOutputStream(sourceFile),StandardCharsets.UTF_8));
        File tempFolder = new File(config.getDataSavePath() + File.separator + fileInfo.getFileAbsPath() + "temp");
        for (Integer i = 0; i < fileInfo.getChunkNum(); i++) {
            File temp = new File(tempFolder, String.valueOf(i));
            BufferedInputStream inputStream = new BufferedInputStream(new FileInputStream(temp));
//            BufferedReader reader = new BufferedReader(new InputStreamReader(new FileInputStream(temp), StandardCharsets.UTF_8));
            byte[] buffer = new byte[1024];
            int bytesRead;
            while ((bytesRead = inputStream.read(buffer)) != -1) {
                outputStream.write(buffer, 0, bytesRead);
            }
            inputStream.close();
        }
        outputStream.close();
        FileUtil.del(tempFolder);
    }

    @Override
    public PageStructure<FileInfo> getFileList(HttpServletRequest request, String path, Integer page_size, Integer current_page) {
        String userId = (String) StpUtil.getLoginId();
        QueryWrapper<FileInfo> queryWrapper = new QueryWrapper<>();
        queryWrapper
                .eq("file_path", path)
                .eq("file_owner", userId)
                .eq("status", "completed")
        ;
        Page<FileInfo> page = new Page<>(current_page, page_size);
        mapper.selectPage(page, queryWrapper);
        PageStructure<FileInfo> pageStructure = new PageStructure<>();
        pageStructure.setTotal(page.getTotal());
        pageStructure.setData(page.getRecords());
        return pageStructure;
    }

    @Override
    public void download(HttpServletRequest request, HttpServletResponse response, String fileId) {
        try {
            FileInfo fileInfo = mapper.selectById(fileId);
            // 下载
            File file = new File(config.getDataSavePath() + File.separator + fileInfo.getFileAbsPath());
            response.setContentLengthLong(file.length());
            FileInputStream fis = new FileInputStream(file);
            byte[] buffer = new byte[config.getBufferSize()];
            int bytesRead;
            while ((bytesRead = fis.read(buffer)) != -1) {
                response.getOutputStream().write(buffer, 0, bytesRead);
            }
            response.getOutputStream().flush();
            response.getOutputStream().close();
            fis.close();
        } catch (Exception e) {
            e.printStackTrace();
            throw new NullPointerException("文件不存在");
        }
    }

    @Override
    public boolean can_upload(long file_size) {
        User user = userService.getUserById(StpUtil.getLoginId());
        return user.getUsedStorage() + file_size <= user.getStorage();
    }

    @Override
    public void removeFile(String fileId) {
        User user = userService.getUserById(StpUtil.getLoginId());
        QueryWrapper<FileInfo> queryWrapper = new QueryWrapper<>();
        queryWrapper
                .eq("file_owner", user.getId())
                .eq("file_id", fileId);
        FileInfo fileInfo = mapper.selectOne(queryWrapper);
        if (fileInfo == null) {
            throw new NullPointerException("无效文件");
        }
        mapper.deleteById(fileId);
        File deleteFile = new File(config.getDataSavePath() + File.separator + fileInfo.getFileAbsPath());
        deleteFile.delete();
        user.setUsedStorage(user.getUsedStorage() - fileInfo.getFileSize());
        userService.updateUser(user);
    }

    @Override
    public void createFolder(FolderDto dto) {
        QueryWrapper<FileInfo> fileInfoQueryWrapper = new QueryWrapper<>();
        fileInfoQueryWrapper.eq("file_owner", StpUtil.getLoginId()).eq("file_type", "folder");
        List<FileInfo> fileInfos = mapper.selectList(fileInfoQueryWrapper);
        List<FileInfo> list = fileInfos.stream().filter(fileInfo -> fileInfo.getFileName().equals(dto.getFolderName())).toList();
        if (!list.isEmpty()) {
            dto.setFolderName(dto.getFolderName() + UUID.randomUUID().toString().replaceAll("-", ""));
        }
        FileInfo fileInfo = new FileInfo();
        fileInfo.setFileId(IdUtil.getSnowflakeNextIdStr());
        fileInfo.setFileName(dto.getFolderName());
        fileInfo.setFilePath(dto.getFilePath());
        fileInfo.setFileType("folder");
        fileInfo.setFileOwner((String) StpUtil.getLoginId());
        fileInfo.setStatus("completed");
        fileInfo.setFileSize(0L);
        mapper.insert(fileInfo);
    }

    @Override
    public void previewFile(String accessKey, HttpServletResponse response) {
        try {
            Object o = redisUtil.get(ENV.REDIS_KEY_OF_PREVIEW_KEY + accessKey);
            if (o == null) {
                response.getWriter().write("404");
                return;
            }
            String fileId = (String) o;
            FileInfo fileInfo = mapper.selectById(fileId);
            // 下载
            File file = new File(config.getDataSavePath() + File.separator + fileInfo.getFileAbsPath());
            response.setContentLengthLong(file.length());
            FileInputStream fis = new FileInputStream(file);
            byte[] buffer = new byte[config.getBufferSize()];
            int bytesRead;
            while ((bytesRead = fis.read(buffer)) != -1) {
                response.getOutputStream().write(buffer, 0, bytesRead);
            }
            response.getOutputStream().flush();
            response.getOutputStream().close();
            fis.close();
        } catch (Exception e) {
        }

    }

    @Override
    public String genAccessKey(String fileId) {
        String snowflakeNextIdStr = IdUtil.getSnowflakeNextIdStr();
        redisUtil.set(ENV.REDIS_KEY_OF_PREVIEW_KEY+snowflakeNextIdStr, fileId);
        return snowflakeNextIdStr;
    }
}
