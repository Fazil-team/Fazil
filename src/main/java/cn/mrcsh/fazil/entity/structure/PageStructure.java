package cn.mrcsh.fazil.entity.structure;

import lombok.Data;

import java.util.List;

@Data
public class PageStructure<E> {
    private Integer page_size;
    private Integer current_page;
    private Long total;
    private List<E> data;
}
