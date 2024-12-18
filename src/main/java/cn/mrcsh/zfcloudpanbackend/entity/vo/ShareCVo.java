package cn.mrcsh.zfcloudpanbackend.entity.vo;

import cn.mrcsh.zfcloudpanbackend.entity.po.FileInfo;
import cn.mrcsh.zfcloudpanbackend.entity.po.Share;
import lombok.Data;

@Data
public class ShareCVo {
    private FileInfo fileInfo;
    private Share share;
}
