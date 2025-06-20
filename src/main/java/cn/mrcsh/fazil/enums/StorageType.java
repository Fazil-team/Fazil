package cn.mrcsh.fazil.enums;

public enum StorageType {

    WEBDAV("webdav", "webdav"),
    FTP("ftp", "ftp"),
    SFTP("sftp", "sftp"),
    NFS("nfs", "nfs"),
    S3("s3", "s3"),
    SMB("smb", "smb")
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
