package cn.mrcsh.zfcloudpanbackend.service;

import cn.mrcsh.zfcloudpanbackend.entity.dto.FolderDto;
import cn.mrcsh.zfcloudpanbackend.entity.po.FileInfo;
import cn.mrcsh.zfcloudpanbackend.entity.po.Share;
import cn.mrcsh.zfcloudpanbackend.entity.structure.PageStructure;
import cn.mrcsh.zfcloudpanbackend.entity.vo.ShareCVo;
import cn.mrcsh.zfcloudpanbackend.entity.vo.ShareVo;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.util.List;

public interface FileService {

    void save(FileInfo fileInfo) throws IOException;

    void transform(FileInfo fileInfo) throws IOException;

    PageStructure<FileInfo> getFileList(HttpServletRequest request, String path, Integer page_size, Integer current_page, String sort, String fileName);

    void download(HttpServletRequest request, HttpServletResponse response, String fileId);

    boolean can_upload(long file_size);

    void removeFile(String fileId);

    void createFolder(FolderDto dto);

    void previewFile(String accessKey, HttpServletResponse response);

    String genAccessKey(String fileId);

    Share shareFile(Share share);

    FileInfo checkShareCodes(String shareCode, String fileId);

    ShareVo getShareUserInfo(String shareId);

    PageStructure<ShareCVo> shares(Integer page_size, Integer current_page, String sort);

    void removeShare(String shareId);

    void previewVideo(HttpServletResponse response, String id, String tsName);

    void previewVideoAvatar(HttpServletResponse response, String id);

    List<FileInfo> getLastFile();

    void reNameFile(FileInfo fileInfo);

    void moveToRrecovery(String fileId);

    PageStructure<FileInfo> getDeletedFile(Integer pageSize, Integer currentPage, String sort);

    void unMoveToRecovery(String fileId);
}
