package cn.mrcsh.zfcloudpanbackend.enums;

public enum StorageType {
    WEBDAV("webdav", "webdav"),
    _123Pan("123Pan", "123Pan"),
    ;
    private String type;
    private String desc;

    StorageType(String type, String desc) {
        this.type = type;
        this.desc = desc;
    }

    public String getType() {
        return type;
    }

    public String getDesc() {
        return desc;
    }

    public static StorageType getStorageType(String type) {
        for (StorageType storageType : StorageType.values()) {
            if (storageType.type.equals(type)) {
                return storageType;
            }
        }
        return null;
    }
}
