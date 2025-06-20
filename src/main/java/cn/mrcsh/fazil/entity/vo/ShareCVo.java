package cn.mrcsh.fazil.entity.vo;

import cn.mrcsh.fazil.entity.po.FileInfo;
import cn.mrcsh.fazil.entity.po.Share;
import lombok.Data;

@Data
public class ShareCVo {
    private FileInfo fileInfo;
    private Share share;
}
