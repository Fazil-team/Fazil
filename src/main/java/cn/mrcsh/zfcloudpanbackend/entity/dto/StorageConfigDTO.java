package cn.mrcsh.zfcloudpanbackend.entity.dto;

import lombok.Data;

import java.util.Map;

@Data
public class StorageConfigDTO {
    private String type; // 比如 webdav / 123pan / oss
    private String name; // 给用户看的名称（可选）
    private Map<String, String> config; // 存具体参数
}
