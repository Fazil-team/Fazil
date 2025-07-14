package cn.mrcsh.fazil.factory;

import cn.mrcsh.fazil.enums.StorageType;
import cn.mrcsh.fazil.service.StorageService;
import cn.mrcsh.fazil.service.storage.impl.AliyunDriveService;
import cn.mrcsh.fazil.service.storage.impl.FTPStorageService;
import cn.mrcsh.fazil.service.storage.impl.WebDAVStorageService;

import java.util.List;
import java.util.Map;

public class StorageServiceFactory {
    public static StorageService getService(String type, Map<String, String> config, String id) {
        StorageType storageType = StorageType.getStorageType(type);
        return switch (storageType) {
            case WEBDAV -> new WebDAVStorageService(
                    config.get("baseUrl"), config.get("folder"), config.get("username"), config.get("password"), id
            );
            case FTP ->
                    new FTPStorageService(config.get("host"), Integer.parseInt(config.get("port")), config.get("username"), config.get("password"), id);
            case ALIDRIVE -> new AliyunDriveService(id, config.get("app_id"), config.get("app_secret"), List.of("user:base","file:all:read","file:all:write"));
            default -> throw new IllegalArgumentException("不支持的存储类型：" + type);
        };
    }
}
