package cn.mrcsh.zfcloudpanbackend.enums;

public enum FileTypes {
    IMG("img", new String[]{".jpg", ".jpeg", ".png", ".gif", ".bmp", ".tiff", ".svg", ".webp", ".ico", ".heic"}),
    EXE("exe", new String[]{".exe"}),
    DOC("doc", new String[]{".doc", ".docx", ".txt", ".rtf", ".odt", ".md", ".tex"}),
    PDF("pdf", new String[]{".pdf"}),
    PSD("psd", new String[]{".psd"}),
    EXCEL("excel", new String[]{".xls", ".xlsx", ".csv", ".ods", ".tsv"}),
    MEDIA("media", new String[]{".mp4", ".avi", ".mkv", ".mov", ".wmv", ".flv", ".webm"}),
    ZIP("zip", new String[]{".zip",".rar",".gz",".tar",".xz",".7z"}),
    CODE("code", new String[]{".code", ".c",".h",".java",".js",".cpp",".ts",".vue",".jsx",".tsx"}),
    TXT("txt", new String[]{".txt"}),
    AUDIO("audio", new String[]{".mp3", ".wav", ".aac", ".flac", ".ogg", ".wma", ".m4a"}),
    DB("db", new String[]{".db", ".sqlite", ".mdb", ".accdb"}),
    _3D("3d", new String[]{".stl", ".obj", ".fbx", ".step", ".iges", ".dwg", ".dxf", ".3mf"}),
    FOLDER("folder", new String[]{""}),
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
                if(value.suffixes[i].equals(suffix.toLowerCase())) {
                    return value;
                }
            }
        }
        return FileTypes.UNKNOWN;
    }
}
