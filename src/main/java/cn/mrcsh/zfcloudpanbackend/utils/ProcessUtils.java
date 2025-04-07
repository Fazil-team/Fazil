package cn.mrcsh.zfcloudpanbackend.utils;

import lombok.extern.slf4j.Slf4j;

import java.io.BufferedReader;
import java.io.File;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.Buffer;

@Slf4j
public class ProcessUtils {

    public static void exec(String dir, String command) {
        try {
            log.info("[ffmpeg] {}",command);
            Runtime runtime = Runtime.getRuntime();
            InputStream in = null;
            if(dir == null){
                Process exec = runtime.exec(command);
                in = exec.getInputStream();
            }else {
                Process exec = runtime.exec(command, null, new File(dir));
                in = exec.getInputStream();
            }
        }catch (Exception e){
            log.info("命令执行失败: {}", command);
        }

    }
}
