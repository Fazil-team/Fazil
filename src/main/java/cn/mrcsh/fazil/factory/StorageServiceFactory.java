package cn.mrcsh.fazil.factory;

import cn.mrcsh.fazil.enums.StorageType;
import cn.mrcsh.fazil.service.StorageService;
import cn.mrcsh.fazil.service.impl.WebDAVStorageService;

import java.util.Map;

public class StorageServiceFactory {
    public static StorageService getService(String type, Map<String, String> config, String id) {
        StorageType storageType = StorageType.getStorageType(type);
        return switch (storageType) {
            case WEBDAV -> new WebDAVStorageService(
                    config.get("baseUrl"),config.get("folder"), config.get("username"), config.get("password"),id
            );
            default -> throw new IllegalArgumentException("不支持的存储类型：" + type);
        };
    }
}
