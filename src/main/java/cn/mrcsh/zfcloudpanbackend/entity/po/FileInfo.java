package cn.mrcsh.zfcloudpanbackend.entity.po;

import cn.mrcsh.zfcloudpanbackend.entity.structure.BaseEntity;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.web.multipart.MultipartFile;

@EqualsAndHashCode(callSuper = true)
@Data
@TableName("t_file_info")
public class FileInfo extends BaseEntity {
    // 文件ID
    @TableId
    private String fileId;
    // 文件名称
    private String fileName;
    // 文件大小 单位 byte
    private Long fileSize;
    // 文件磁盘位置
    private String fileAbsPath;
    // 文件位置
    private String filePath;
    // 文件类型
    private String fileType;
    // 文件MD5值
    private String fileMd5;
    // 文件所属
    private String fileOwner;
    // 文件父ID
    private String filePid;
    // 视频文件缩略图
    private String fileAvatar;
    // 上传状态
    private String status;
    // 分片数
    private Integer chunkNum;
    // 断点续传分片id
    private Integer chunkIndex;
    // 文件
    @TableField(exist = false)
    MultipartFile file;
}
