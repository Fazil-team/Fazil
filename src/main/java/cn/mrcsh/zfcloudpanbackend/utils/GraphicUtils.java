package cn.mrcsh.zfcloudpanbackend.utils;

import cn.hutool.core.util.IdUtil;
import cn.mrcsh.zfcloudpanbackend.entity.po.FileInfo;
import cn.mrcsh.zfcloudpanbackend.mapper.FileInfoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.stereotype.Component;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.Executor;
import java.util.concurrent.Executors;

@Component
@ConditionalOnProperty(name = "app.installed", havingValue = "true")
public class GraphicUtils {
    @Value("${app.ffmpeg.dir}")
    private String ffmpegWorkDir;
    @Value("${app.data-save-path}")
    private String ffmpegOutputDir;

    @Autowired
    private FileInfoMapper fileInfoMapper;

    private Executor executor = Executors.newFixedThreadPool(8);

//    private final String TRANSFER_CMD = "./ffmpeg -i ${sourceFile} -b:v 1M -b:a 128k ${outputFile}";
    private final String TRANSFER_CMD = "./ffmpeg -i ${sourceFile} -c:v h264 -flags +cgop -g 30 -hls_time 10 -hls_list_size 0 -hls_segment_filename ${outputFile}/index%3d.ts ${outputFile}/index.m3u8";
    private final String GET_AVATAR_CMD = "./ffmpeg -i ${sourceFile} -frames:v 1 ${outputFile}/avatar.jpg";

    public void zipVideo(FileInfo fileInfo) throws IOException {
        executor.execute(() -> {
            File outPath = new File(ffmpegOutputDir+File.separator+ "video" + File.separator + fileInfo.getFileId());
            if(!outPath.exists()){
                outPath.mkdirs();
            }
            ProcessUtils.exec(ffmpegWorkDir, TRANSFER_CMD.replace("${sourceFile}", ffmpegOutputDir + File.separator + fileInfo.getFileAbsPath()).replace("${outputFile}", ffmpegOutputDir+File.separator+ "video" + File.separator + fileInfo.getFileId()));
            ProcessUtils.exec(ffmpegWorkDir, GET_AVATAR_CMD.replace("${sourceFile}", ffmpegOutputDir + File.separator + fileInfo.getFileAbsPath()).replace("${outputFile}", ffmpegOutputDir+File.separator+ "video" + File.separator + fileInfo.getFileId()));
            fileInfo.setFileAvatar("video" + File.separator + fileInfo.getFileId()+ "/avatar.jpg");
            fileInfoMapper.updateById(fileInfo);
        });
    }
}
