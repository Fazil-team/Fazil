package cn.mrcsh.fazil.service.impl;

import cn.dev33.satoken.stp.StpUtil;
import cn.hutool.core.io.FileUtil;
import cn.hutool.core.util.IdUtil;
import cn.mrcsh.fazil.entity.dto.FolderDto;
import cn.mrcsh.fazil.entity.po.FileInfo;
import cn.mrcsh.fazil.entity.po.UserStorage;
import cn.mrcsh.fazil.entity.structure.PageStructure;
import cn.mrcsh.fazil.enums.StorageType;
import cn.mrcsh.fazil.factory.StorageServiceFactory;
import cn.mrcsh.fazil.mapper.FileInfoMapper;
import cn.mrcsh.fazil.mapper.UserStorageMapper;
import cn.mrcsh.fazil.service.FileService;
import cn.mrcsh.fazil.service.StorageService;
import cn.mrcsh.fazil.service.UserStorageService;
import com.alibaba.fastjson2.JSON;
import com.alibaba.fastjson2.TypeReference;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import jakarta.servlet.http.HttpServletResponse;
import org.apache.commons.net.ftp.FTPFile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.stereotype.Service;

import java.io.File;
import java.util.*;

@Service
@ConditionalOnProperty(name = "app.installed", havingValue = "true")
public class UserStorageServiceImpl implements UserStorageService {

    @Autowired
    private UserStorageMapper userStorageMapper;

    @Autowired
    private FileService fileService;
    @Autowired
    private FileInfoMapper fileInfoMapper;

    @Override
    public void newStorage(UserStorage userStorage) {
        userStorage.setId(IdUtil.getSnowflakeNextIdStr());
        userStorage.setUserId((String) StpUtil.getLoginId());
        userStorageMapper.insert(userStorage);
        FolderDto folderDto = new FolderDto();
        folderDto.setFolderName(userStorage.getName());
        folderDto.setFilePath("/");
        folderDto.setAbsPath(userStorage.getType() + ":" + userStorage.getId() + "/");
        fileService.createFolder(folderDto);
    }

    @Override
    public PageStructure<FileInfo> getFileList(FileInfo fileInfo, String storageId, String path, Integer page_size, Integer current_page) {
        if (fileInfo.getFileAbsPath() == null) {
            return null;
        }
        String[] split = fileInfo.getFileAbsPath().substring(0, fileInfo.getFileAbsPath().length() - 1).split(":");
        String[] path_split = path.split("/");
        UserStorage userStorage = userStorageMapper.selectById(split[1]);
        StorageType storageType = StorageType.getStorageType(split[0]);
        String realPath = "";
        if (path_split.length > 2) {
            for (int i = 0; i < path_split.length; i++) {
                if (i > 1) {
                    realPath += "/" + path_split[i];
                }
            }
        } else {
            realPath = "/";
        }
        int total;
        int from = Math.max(0, (current_page - 1) * page_size);
        int to;
        StorageService service = StorageServiceFactory.getService(storageType.getType(), JSON.parseObject(userStorage.getConfigJson(), new TypeReference<HashMap<String, String>>() {
        }), split[1]);
        List<FileInfo> fileInfos = service.listFiles(realPath);
        Collections.sort(fileInfos);
        total = fileInfos.size();
        to = Math.min(total, from + page_size);
        PageStructure<FileInfo> pageStructure = new PageStructure<>();
        pageStructure.setCurrent_page(current_page);
        pageStructure.setPage_size(page_size);
        pageStructure.setTotal((long) total);
        List<FileInfo> pagedFileList = fileInfos.subList(from, to);
        pageStructure.setData(pagedFileList);
        return pageStructure;
    }

    @Override
    public void reNameFile(UserStorage userStorage, FileInfo fileInfo) {
        StorageType storageType = StorageType.getStorageType(userStorage.getType());
        StorageService service = StorageServiceFactory.getService(storageType.getType(), JSON.parseObject(userStorage.getConfigJson(), new TypeReference<HashMap<String, String>>() {
        }), userStorage.getId());
        service.reNameFile(fileInfo);
    }

    @Override
    public void deleteFile(UserStorage userStorage, FileInfo source) {
        StorageType storageType = StorageType.getStorageType(userStorage.getType());
        StorageService service = StorageServiceFactory.getService(storageType.getType(), JSON.parseObject(userStorage.getConfigJson(), new TypeReference<HashMap<String, String>>() {
        }), userStorage.getId());
        service.delete(source);
    }

    @Override
    public void upload(FileInfo uploadFile, FileInfo ex, File source) {
        String fileAbsPath = ex.getFileAbsPath();
        String[] split = fileAbsPath.split(":");
        String storageId = split[1].substring(0, split[1].length() - 1);
        UserStorage userStorage = userStorageMapper.selectById(storageId);
        StorageType storageType = StorageType.getStorageType(userStorage.getType());
        StorageService service = StorageServiceFactory.getService(storageType.getType(), JSON.parseObject(userStorage.getConfigJson(), new TypeReference<HashMap<String, String>>() {
        }), userStorage.getId());
        service.upload(uploadFile, ex, source);
        FileUtil.del(source);
    }

    @Override
    public void download(UserStorage userStorage, String filePath, HttpServletResponse response) {
        StorageType storageType = StorageType.getStorageType(userStorage.getType());
        StorageService service = StorageServiceFactory.getService(storageType.getType(), JSON.parseObject(userStorage.getConfigJson(), new TypeReference<HashMap<String, String>>() {
        }), userStorage.getId());
        service.download(filePath, response);
    }

    @Override
    public boolean checkConnect(UserStorage storage) {
        StorageType storageType = StorageType.getStorageType(storage.getType());
        StorageService service = StorageServiceFactory.getService(storageType.getType(), JSON.parseObject(storage.getConfigJson(), new TypeReference<Map<String, String>>() {
        }), "0");
        service.checkConnect();
        return true;
    }

    @Override
    public PageStructure<UserStorage> getAll(Integer pageSize, Integer currentPage) {
        PageStructure<UserStorage> pageStructure = new PageStructure<>();
        QueryWrapper<UserStorage> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("user_id", StpUtil.getLoginIdAsLong());
        Page<UserStorage> page = new Page<>(pageSize, currentPage);
        userStorageMapper.selectPage(page, queryWrapper);
        pageStructure.setData(page.getRecords());
        pageStructure.setTotal(page.getTotal());
        pageStructure.setCurrent_page(currentPage);
        pageStructure.setPage_size(pageSize);
        return pageStructure;
    }

    @Override
    public void removeExpansion(String id) {
        UserStorage userStorage = userStorageMapper.selectById(id);
        QueryWrapper<FileInfo> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("file_owner", StpUtil.getLoginIdAsLong())
                .eq("file_abs_path", userStorage.getType() + ":" + userStorage.getId() + "/");
        fileInfoMapper.delete(queryWrapper);
        userStorageMapper.deleteById(id);
    }

    @Override
    public void changeExpansion(UserStorage storage) {
        UserStorage userStorage = userStorageMapper.selectById(storage.getId());
        QueryWrapper<FileInfo> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("file_owner", StpUtil.getLoginIdAsLong())
                .eq("file_abs_path", userStorage.getType() + ":" + userStorage.getId() + "/");
        FileInfo fileInfo = fileInfoMapper.selectOne(queryWrapper);
        fileInfo.setFileName(storage.getName());
        fileInfoMapper.updateById(fileInfo);
        userStorageMapper.updateById(storage);
    }

    @Override
    public void createFolder(FileInfo ex, FolderDto folder) {
        String fileAbsPath = ex.getFileAbsPath();
        String[] split = fileAbsPath.split(":");
        String storageId = split[1].substring(0, split[1].length() - 1);
        UserStorage userStorage = userStorageMapper.selectById(storageId);
        StorageType storageType = StorageType.getStorageType(userStorage.getType());
        StorageService service = StorageServiceFactory.getService(storageType.getType(), JSON.parseObject(userStorage.getConfigJson(), new TypeReference<HashMap<String, String>>() {
        }), userStorage.getId());
        service.createFolder(userStorage ,folder);
    }
}
