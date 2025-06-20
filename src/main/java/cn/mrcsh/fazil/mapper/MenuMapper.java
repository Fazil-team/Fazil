package cn.mrcsh.fazil.mapper;

import cn.mrcsh.fazil.entity.po.Menu;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Component;

@Mapper
@Component
public interface MenuMapper extends BaseMapper<Menu> {
}
