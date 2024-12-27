package cn.mrcsh.zfcloudpanbackend.service.impl;

import cn.dev33.satoken.stp.StpUtil;
import cn.hutool.core.io.FileUtil;
import cn.hutool.core.util.IdUtil;
import cn.hutool.crypto.SecureUtil;
import cn.mrcsh.zfcloudpanbackend.config.APPConfig;
import cn.mrcsh.zfcloudpanbackend.entity.po.User;
import cn.mrcsh.zfcloudpanbackend.entity.structure.PageStructure;
import cn.mrcsh.zfcloudpanbackend.entity.vo.UserStorageVo;
import cn.mrcsh.zfcloudpanbackend.mapper.UserMapper;
import cn.mrcsh.zfcloudpanbackend.service.UserService;
import cn.mrcsh.zfcloudpanbackend.utils.FileUtils;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import jakarta.servlet.http.HttpServletResponse;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;

    @Autowired
    private APPConfig appConfig;

    @Autowired
    private FileUtils fileUtils;

    @Override
    public void addUser(User user) {
        QueryWrapper<User> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("user_name", user.getUserName());
        User user1 = userMapper.selectOne(queryWrapper);
        if (user1 != null) {
            throw new NullPointerException();
        }
        user.setId(IdUtil.getSnowflakeNextIdStr());
        user.setPassword(SecureUtil.sha256(user.getPassword()));
        userMapper.insert(user);
    }

    @Override
    public void updateUser(User user) {
        userMapper.updateById(user);
    }

    @Override
    public void deleteUser(String id) {
        userMapper.deleteById(id);
    }

    @Override
    public User getUser(String username) {
        QueryWrapper<User> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("user_name", username);
        return userMapper.selectOne(queryWrapper);
    }

    @Override
    public List<User> selectByRoleId(Integer id) {
        QueryWrapper<User> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("role", id);
        return userMapper.selectList(queryWrapper);
    }

    @Override
    public PageStructure<User> selectByPage(Integer pageNo, Integer pageSize, String username) {
        PageStructure<User> structure = new PageStructure<>();
        Page<User> page = new Page<>(pageNo, pageSize);
        userMapper.selectPage(page, new QueryWrapper<User>().like("user_name", "%" + username + "%"));
        structure.setPage_size(pageSize);
        structure.setTotal(page.getTotal());
        structure.setData(page.getRecords());
        return structure;
    }

    @Override
    public UserStorageVo getUserStorage() {
        String loginId = (String) StpUtil.getLoginId();
        User user = userMapper.selectById(loginId);
        UserStorageVo vo = new UserStorageVo();
        vo.setTotal_storage(user.getStorage());
        vo.setUsed_storage(user.getUsedStorage());
        return vo;
    }

    @Override
    public User getUserById(String id) {
        return userMapper.selectById(id);
    }

    @Override
    public User getUserById(Object id) {
        return userMapper.selectById((String) id);
    }

    @Override
    public void changeAvarar(MultipartFile file) {
        //获取用户ID
        String userId = StpUtil.getLoginIdAsString();
        //查询用户信息
        User user = userMapper.selectById(userId);
        //头像存储位置
        String saveFolder = appConfig.getDataSavePath() + File.separator + "/static/avatar/";
        //创建文件夹
        File saveFolderObj = new File(saveFolder);
        if (!saveFolderObj.exists()) {
            saveFolderObj.mkdirs();
        }
        String savePath = appConfig.getDataSavePath() + File.separator + "/static/avatar/" + userId + "." + FileUtil.getSuffix(file.getOriginalFilename());
        try {
            file.transferTo(new File(savePath));
        } catch (IOException e) {
            e.printStackTrace();
            throw new RuntimeException(e);
        }
        user.setAvatar(userId + "." + FileUtil.getSuffix(file.getOriginalFilename()));
        userMapper.updateById(user);
    }

    @Override
    public void getUserAvatar(HttpServletResponse response, String userId) {
        User userById = getUserById(userId);
        String saveFolder = appConfig.getDataSavePath() + File.separator + "/static/avatar/";
        File avatarFile = new File(saveFolder, userById.getAvatar());
        fileUtils.downloadFile(avatarFile, response);
    }
}
