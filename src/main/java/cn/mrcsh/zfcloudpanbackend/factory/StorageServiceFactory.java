package cn.mrcsh.zfcloudpanbackend.factory;

import cn.mrcsh.zfcloudpanbackend.service.StorageService;
import cn.mrcsh.zfcloudpanbackend.service.impl.WebDAVStorageService;

import java.util.Map;

public class StorageServiceFactory {
    public static StorageService getService(String type, Map<String, String> config, String id) {
        return switch (type.toLowerCase()) {
            case "webdav" -> new WebDAVStorageService(
                    config.get("baseUrl"), config.get("username"), config.get("password"),id
            );
            default -> throw new IllegalArgumentException("不支持的存储类型：" + type);
        };
    }
}
