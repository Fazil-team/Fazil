package cn.mrcsh.zfcloudpanbackend.entity.dto;

import lombok.Data;

@Data
public class UserRegisterDto {
    // BASE64
    private String userName;
    // BASE64
    private String password;
    private String email;
    private Integer role;
    private String checkCode;
    private String seqId;
}
