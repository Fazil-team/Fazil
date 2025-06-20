package cn.mrcsh.fazil.utils;

import cn.hutool.core.io.FileUtil;
import cn.mrcsh.fazil.config.MinioConfig;
import io.minio.*;
import io.minio.messages.Bucket;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.InputStream;
import java.io.Serializable;
import java.sql.Timestamp;
import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@Component
@Slf4j
public class MinioUtils {

    @Autowired
    private MinioClient minioClient;

    @Autowired
    private MinioConfig config;

    /**
     * 上传文件
     * @param file 文件
     * @return 访问地址
     */
    public String upload(MultipartFile file) {
        try {

            String fileName = UUID.randomUUID().toString().replaceAll("-", "")+"."+FileUtil.getSuffix(file.getOriginalFilename());
            InputStream inputStream = file.getInputStream();
            minioClient.putObject(
                    PutObjectArgs.builder()
                            .bucket(config.getBucketName())
                            .object(fileName)
                            .stream(inputStream, file.getSize(), -1)
                            .contentType(file.getContentType())
                            .build()
            );
            // 一定要关闭流，不关闭SpringMVC无法删除临时文件
            inputStream.close();
            return config.getEndpoint() + "/" + config.getBucketName() + "/" + fileName;
        } catch (Exception e) {
            log.error("[Minio]-执行上传失败", e);
            return null;
        }
    }

    /**
     * 删除文件
     * @param fileName 文件名
     * @return 是否删除成功
     */
    public boolean removeFile(String fileName) {
        try {
            minioClient.removeObject(
                    RemoveObjectArgs.builder()
                            .bucket(config.getBucketName())
                            .object(fileName)
                            .build()
            );
            return true;
        } catch (Exception e) {
            log.error("[Minio-执行删除失败]", e);
            return false;
        }
    }

    /**
     * 检查存储桶是否存在
     * @param bucketName 存储桶名称
     * @return 是否存在
     */
    public boolean checkBucketExists(String bucketName) {
        try {
            return minioClient.bucketExists(
                    BucketExistsArgs.builder().bucket(bucketName).build()
            );
        } catch (Exception e) {
            log.error("[Minio]-执行检查失败", e);
        }
        return false;
    }

    /**
     * 创建存储桶
     * @param bucketName 桶名称
     * @return 是否成功
     */
    public boolean makeNewBucket(String bucketName){
        try {
            minioClient.makeBucket(
                    MakeBucketArgs.builder()
                            .bucket(bucketName)
                            .build()
            );
            return true;
        }catch (Exception e){
            log.error("[Minio]-执行创建存储桶失败",e);
            return false;
        }
    }

    /**
     * 查询所欲存储桶信息
     * @return 存储桶信息
     */
    public List<BucketInfo> getBucketList(){
        try {
            List<BucketInfo> bucketInfos = new ArrayList<>();
            List<Bucket> buckets = minioClient.listBuckets();
            for (Bucket bucket : buckets) {
                ZonedDateTime zonedDateTime = bucket.creationDate();
                String name = bucket.name();
                Timestamp timestamp = Timestamp.from(zonedDateTime.toInstant());
                long time = timestamp.getTime();
                Date now = new Date(time);
                BucketInfo bucketInfo = new BucketInfo();
                bucketInfo.setCreateDate(now);
                bucketInfo.setBucketName(name);
                bucketInfos.add(bucketInfo);
            }
            return bucketInfos;
        }catch (Exception e){
            log.error("[Minio]-获取存储桶信息失败",e);
        }
        return null;
    }

    /**
     * 删除存储桶
     * @param bucketName 存储桶名称
     * @return 是否删除成功
     */
    public boolean removeEmptyBucket(String bucketName){
        try {
            if (!checkBucketExists(bucketName)) {
                log.warn("[Minio]-存储桶{}不存在",bucketName);
                return false;
            }
            minioClient.removeBucket(
                    RemoveBucketArgs.builder()
                            .bucket(bucketName)
                            .build()
            );
            return true;
        }catch (Exception e){
            log.error("[Minio]-删除桶失败",e);
        }
        return false;
    }


    @Data
    public
    static
    class BucketInfo implements Serializable {
        private String bucketName;
        private Date createDate;
    }
}