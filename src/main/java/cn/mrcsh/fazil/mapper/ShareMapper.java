package cn.mrcsh.fazil.mapper;

import cn.mrcsh.fazil.entity.po.Share;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Component;

@Mapper
@Component
public interface ShareMapper extends BaseMapper<Share> {
}
