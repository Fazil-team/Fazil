package cn.mrcsh.zfcloudpanbackend.controller;

import cn.dev33.satoken.annotation.SaCheckLogin;
import cn.hutool.core.util.IdUtil;

import cn.mrcsh.zfcloudpanbackend.annotation.Lock;
import cn.mrcsh.zfcloudpanbackend.entity.dto.FolderDto;
import cn.mrcsh.zfcloudpanbackend.entity.dto.UploadFileDto;
import cn.mrcsh.zfcloudpanbackend.entity.po.FileInfo;
import cn.mrcsh.zfcloudpanbackend.entity.po.Share;
import cn.mrcsh.zfcloudpanbackend.entity.po.User;
import cn.mrcsh.zfcloudpanbackend.entity.structure.PageStructure;
import cn.mrcsh.zfcloudpanbackend.entity.vo.ShareCVo;
import cn.mrcsh.zfcloudpanbackend.entity.vo.ShareVo;
import cn.mrcsh.zfcloudpanbackend.handler.FileUploaderHandler;
import cn.mrcsh.zfcloudpanbackend.service.FileService;
import cn.mrcsh.zfcloudpanbackend.service.UserService;
import cn.mrcsh.zfcloudpanbackend.utils.RedisUtil;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/stream")
@CrossOrigin
@Slf4j
@Tag(name = "文件模块")
public class FileController extends BaseController {

    @Autowired
    private FileService fileService;

    @Autowired
    private FileUploaderHandler handler;

    @Autowired
    private UserService userService;


    @PostMapping
    @SaCheckLogin
    public response upload_file(UploadFileDto uploadFileDto) throws InterruptedException, IOException {
        // 检查空间是否足够
        if (fileService.can_upload(uploadFileDto.getFile_size())) {
            String s = handler.chunk_upload(uploadFileDto);
            return success(s);
        }
        return error("空间不足");
    }

    @PostMapping("/folder")
    @SaCheckLogin
    public response newFolder(@RequestBody FolderDto folderDto){
        fileService.createFolder(folderDto);
        return success();
    }

    @GetMapping
    @SaCheckLogin
    public response getFiles(HttpServletRequest request, String path, Integer page_size, Integer current_page) {
        PageStructure<FileInfo> page = fileService.getFileList(request, path,page_size,current_page);
        return success(page);
    }

    @DeleteMapping
    @SaCheckLogin
    public response deleteFile(String file_id){
        fileService.removeFile(file_id);
        return success();
    }

    @GetMapping("/download_file")
    public void download_file(HttpServletRequest request, HttpServletResponse response, String file_id) throws IOException {
        fileService.download(request, response, file_id);
    }

//    @GetMapping("/perview/{accessKey}")
//    @SaCheckLogin
    public void preview(HttpServletResponse response,@PathVariable String accessKey){
        fileService.previewFile(accessKey, response);
    }

    @GetMapping("/video/preview/{id}/{tsName}")
    public void previewVideo(HttpServletResponse response, @PathVariable String id, @PathVariable String tsName){
        fileService.previewVideo(response, id, tsName);
    }

    @GetMapping("/video/avatar/{id}")
    public void previewVideoAvatar(HttpServletResponse response, @PathVariable String id){
        fileService.previewVideoAvatar(response, id);
    }

    @GetMapping("/gen_key")
    @SaCheckLogin
    public response gen_key(String file_id){
        String key = fileService.genAccessKey(file_id);
        return success(key);
    }

    @PostMapping("/share")
    @SaCheckLogin
    public response share(@RequestBody Share share, Integer page_size, Integer current_page){
       Share res = fileService.shareFile(share);
       return success(res);
    }

    @GetMapping("/check_share_code")
    public response checkShareCode(String share_code, String share_id){
        FileInfo fileInfo = fileService.checkShareCodes(share_code, share_id);
        return success(fileInfo);
    }

    @GetMapping("/get_share_user_info")
    public response getShareUserInfo(String share_id){
        ShareVo shareVo = fileService.getShareUserInfo(share_id);
        return success(shareVo);
    }

    @GetMapping("/shares")
    @SaCheckLogin
    public response getAllShares(){
        List<ShareCVo> shares = fileService.shares();
        return success(shares);
    }
    @DeleteMapping("/shares/{share_id}")
    @SaCheckLogin
    public response deleteShare(@PathVariable String share_id){
        fileService.removeShare(share_id);
        return success();
    }

    @GetMapping("/last_file")
    @SaCheckLogin
    public response getLastFile(){
        List<FileInfo> files = fileService.getLastFile();
        return success(files);
    }

    @PostMapping("/rename_file")
    @SaCheckLogin
    public response remaneFile(@RequestBody FileInfo fileInfo){
        fileService.reNameFile(fileInfo);
        return success();
    }
}
