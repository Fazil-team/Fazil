package cn.mrcsh.zfcloudpanbackend.entity.dto;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class UploadFileDto {
    private String file_name;
    private Integer chunk_num;
    private Integer chunk_index;
    private MultipartFile file;
    private Long file_size;
    private String file_id;
    private String file_pid;
    private String filePath;
}
