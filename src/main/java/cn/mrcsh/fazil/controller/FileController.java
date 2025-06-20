package cn.mrcsh.fazil.controller;

import cn.dev33.satoken.annotation.SaCheckLogin;

import cn.mrcsh.fazil.entity.dto.FolderDto;
import cn.mrcsh.fazil.entity.dto.UploadFileDto;
import cn.mrcsh.fazil.entity.po.FileInfo;
import cn.mrcsh.fazil.entity.po.Share;
import cn.mrcsh.fazil.entity.structure.PageStructure;
import cn.mrcsh.fazil.entity.vo.ShareCVo;
import cn.mrcsh.fazil.entity.vo.ShareVo;
import cn.mrcsh.fazil.handler.FileUploaderHandler;
import cn.mrcsh.fazil.service.FileService;
import cn.mrcsh.fazil.service.UserService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/stream")
@CrossOrigin
@Slf4j
@Tag(name = "文件模块")
@ConditionalOnProperty(name = "app.installed", havingValue = "true")
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
    public response getFiles(HttpServletRequest request, String path,String fileAbsPath, Integer page_size, Integer current_page, String sort, String fileName) {
        PageStructure<FileInfo> page = fileService.getFileList(request, path,fileAbsPath, page_size,current_page,sort, fileName);
        Collections.sort(page.getData());
        return success(page);
    }

    @DeleteMapping("/real_del")
    @SaCheckLogin
    public response realDeleteFile(String file_id){
        fileService.removeFile(file_id);
        return success();
    }

    @PostMapping("/del")
    @SaCheckLogin
    public response deleteFile(@RequestBody FileInfo fileInfo){
        fileService.moveToRrecovery(fileInfo);
        return success();
    }

    @GetMapping("/download_file")
    public void download_file(HttpServletRequest request, HttpServletResponse response, String file_id) throws IOException {
        fileService.download(request, response, file_id);
    }

    @GetMapping("/ex/download")
    public void download_ex(String fileAbsPath,String filePath, HttpServletResponse response) throws IOException {
        fileService.downloadEx(fileAbsPath,filePath, response);
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
    public response getAllShares(Integer page_size, Integer current_page, String sort){
        PageStructure<ShareCVo> structure = fileService.shares(page_size, current_page, sort);
        return success(structure);
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

    @GetMapping("/rec")
    @SaCheckLogin
    public response getRecFile(Integer page_size, Integer current_page, String sort){
       PageStructure<FileInfo> fileInfoPageStructure = fileService.getDeletedFile(page_size, current_page, sort);
       return success(fileInfoPageStructure);
    }

    @PutMapping("/unmove_to_storage")
    @SaCheckLogin
    public response unMoveToRecovery(String file_id){
        fileService.unMoveToRecovery(file_id);
        return success();
    }
}
