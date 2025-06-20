package cn.mrcsh.fazil.entity.dto;

import lombok.Data;

@Data
public class PageDto<T> {
    private Integer page;
    private Integer pageSize;
    private T params;
}
