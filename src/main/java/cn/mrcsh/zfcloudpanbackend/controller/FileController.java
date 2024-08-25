package cn.mrcsh.zfcloudpanbackend.controller;

import cn.hutool.core.util.IdUtil;
import cn.mrcsh.zfcloudpanbackend.annotation.AccessLog;
import cn.mrcsh.zfcloudpanbackend.annotation.Lock;
import cn.mrcsh.zfcloudpanbackend.entity.dto.FolderDto;
import cn.mrcsh.zfcloudpanbackend.entity.dto.UploadFileDto;
import cn.mrcsh.zfcloudpanbackend.entity.po.FileInfo;
import cn.mrcsh.zfcloudpanbackend.entity.structure.PageStructure;
import cn.mrcsh.zfcloudpanbackend.handler.FileUploaderHandler;
import cn.mrcsh.zfcloudpanbackend.service.FileService;
import cn.mrcsh.zfcloudpanbackend.service.UserService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

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
    @AccessLog()
    public response upload_file(UploadFileDto uploadFileDto) throws InterruptedException, IOException {
        // 检查空间是否足够
        if (fileService.can_upload(uploadFileDto.getFile_size())) {
            String s = handler.chunk_upload(uploadFileDto);
            System.out.println(s);
            return success(s);
        }
        return error("空间不足");
    }

    @PostMapping("/folder")
    public response newFolder(@RequestBody FolderDto folderDto){
        fileService.createFolder(folderDto);
        return success();
    }

    @GetMapping
    public response getFiles(HttpServletRequest request, String path, Integer page_size, Integer current_page) {
        PageStructure<FileInfo> page = fileService.getFileList(request, path,page_size,current_page);
        return success(page);
    }

    @DeleteMapping
    public response deleteFile(String file_id){
        fileService.removeFile(file_id);
        return success();
    }

    @GetMapping("/download_file")
    public void download_file(HttpServletRequest request, HttpServletResponse response, String file_id, String type) throws IOException {
        fileService.download(request, response, file_id, type);
    }
}
