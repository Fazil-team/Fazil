package cn.mrcsh.fazil.mapper;

import cn.mrcsh.fazil.entity.po.SysSettings;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Component;

@Mapper
@Component
public interface SysSettingsMapper extends BaseMapper<SysSettings> {
}
