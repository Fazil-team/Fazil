package cn.mrcsh.zfcloudpanbackend.enums;

public enum FileTypes {
    IMG("img", new String[]{".png", ".jpg", ".gif"}),
    EXE("exe", new String[]{".exe"}),
    DOC("doc", new String[]{".doc"}),
    PDF("pdf", new String[]{".pdf"}),
    PSD("psd", new String[]{".psd"}),
    EXCEL("excel", new String[]{".xls", ".xlsx"}),
    MEDIA("media", new String[]{".mkv",".mp4"}),
    ZIP("zip", new String[]{".zip",".rar",".gz",".tar",".xz",".7z"}),
    CODE("code", new String[]{".code", ".c",".h",".java",".js",".cpp",".ts",".vue",".jsx",".tsx"}),
    UNKNOWN("unknown", new String[]{""}),
    ;

    FileTypes(String type, String[] suffixes) {
        this.type = type;
        this.suffixes = suffixes;
    }

    public String getType() {
        return type;
    }

    public String[] getSuffixes() {
        return suffixes;
    }

    private String type;
    private String[] suffixes;

    public static FileTypes getFileType(String suffix) {
        for (FileTypes value : FileTypes.values()) {
            for (int i = 0; i < value.suffixes.length; i++) {
                if(value.suffixes[i].equals(suffix)) {
                    return value;
                }
            }
        }
        return FileTypes.UNKNOWN;
    }
}
