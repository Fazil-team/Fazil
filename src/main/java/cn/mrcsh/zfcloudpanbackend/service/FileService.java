package cn.mrcsh.zfcloudpanbackend.service;

import cn.mrcsh.zfcloudpanbackend.entity.dto.FolderDto;
import cn.mrcsh.zfcloudpanbackend.entity.po.FileInfo;
import cn.mrcsh.zfcloudpanbackend.entity.structure.PageStructure;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

public interface FileService {

    void save(FileInfo fileInfo) throws IOException;

    void transform(FileInfo fileInfo) throws IOException;

    PageStructure<FileInfo> getFileList(HttpServletRequest request, String path, Integer page_size, Integer current_page);

    void download(HttpServletRequest request, HttpServletResponse response, String fileId);

    boolean can_upload(long file_size);

    void removeFile(String fileId);

    void createFolder(FolderDto dto);

    void previewFile(String accessKey, HttpServletResponse response);

    String genAccessKey(String fileId);
}
