package cn.mrcsh.fazil.service;

import cn.mrcsh.fazil.entity.dto.UserRegisterDto;
import cn.mrcsh.fazil.entity.po.User;
import cn.mrcsh.fazil.entity.structure.PageStructure;
import cn.mrcsh.fazil.entity.vo.UserStorageVo;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface UserService {
    void addUser(User user);
    void updateUser(User user);
    void deleteUser(String id);
    User getUser(String username);
    List<User> selectByRoleId(Integer id);
    PageStructure<User> selectByPage(Integer pageNo, Integer pageSize, String username);
    UserStorageVo getUserStorage();
    User getUserById(String id);
    User getUserById(Object id);

    void changeAvarar(MultipartFile file);

    void getUserAvatar(HttpServletResponse response, String userId);

    Long selectCount();

    void register(UserRegisterDto userRegisterDto);
}
