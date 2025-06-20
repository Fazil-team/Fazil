package cn.mrcsh.fazil.mapper;

import cn.mrcsh.fazil.entity.po.FileInfo;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Component;

@Component
@Mapper
public interface FileInfoMapper extends BaseMapper<FileInfo> {
}
