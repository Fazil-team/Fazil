package cn.mrcsh.fazil.service.storage.impl;

import cn.hutool.http.HttpRequest;
import cn.hutool.http.HttpUtil;
import cn.mrcsh.fazil.entity.dto.FolderDto;
import cn.mrcsh.fazil.entity.po.FileInfo;
import cn.mrcsh.fazil.entity.po.UserStorage;
import cn.mrcsh.fazil.service.StorageService;
import cn.mrcsh.fazil.utils.RedisUtil;
import com.alibaba.fastjson2.JSON;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.HttpServletResponse;
import lombok.Data;

import java.io.File;
import java.util.List;


@Data
public class AliyunDriveService implements StorageService {
    private final String id;
    private String driverName;
    private String accessToken;
    private String refreshToken;
    private final String clientId;
    private final String clientSecret;
    private String oauthSid;
    private String oauthQrcode;
    private String loginStatus;
    private String loginAuthCode;
    private String tokenType;
    private Integer expiresIn;
    private String driveId;
    private String avatar;
    private String nickName;
    private final List<String> authority;
    private String fileId;
    private String uploadId;
    private List<AliDrivePartInfo> partInfoList;
    private double percent;
    private String clusterId;

    @Data
    public class AliDrivePartInfo {
        private String etag;
        private Integer part_number;
        private long part_size;
        private String upload_url;
        private String internal_upload_url;
        private String content_type;
        private String upload_form_info;
    }

    @Override
    public List<FileInfo> listFiles(String path) {
        return List.of();
    }

    @Override
    public void upload(FileInfo uploadFile, FileInfo fileInfo, File source) {

    }

    @Override
    public void download(String path, HttpServletResponse response) {

    }

    @Override
    public void delete(FileInfo path) {

    }

    @Override
    public String getDownloadUrl(String path) {
        return "";
    }

    @Override
    public void reNameFile(FileInfo fileInfo) {

    }

    @Override
    public Object checkConnect() {
        try {
            String OAuthParam = "{\n" +
                    "    \"client_id\": \"" + clientId + "\",\n" +
                    "    \"scopes\": " + JSON.toJSONString(authority) + ",\n" +
                    "    \"client_secret\": \"" + clientSecret + "\"\n" +
                    "}";

            HttpRequest oauth_req = HttpUtil.createPost("https://openapi.alipan.com/oauth/authorize/qrcode");
            oauth_req.body(OAuthParam);
            String oauth_result = oauth_req.execute().body();
            ObjectMapper objectMapper = new ObjectMapper();
            JsonNode jsonNode = objectMapper.readTree(oauth_result);
            oauthQrcode = jsonNode.get("qrCodeUrl").asText();
            oauthSid = jsonNode.get("sid").asText();
            loginStatus = "waiting";
            System.out.println(oauthQrcode);
            Thread checkLoginStatusTask = new Thread(() -> {
                try {
                    while (!loginStatus.equals("LoginSuccess")) {
                        String login_result = HttpUtil.get("https://openapi.alipan.com/oauth/qrcode/" + oauthSid + "/status");
                        JsonNode login_result_json_node = objectMapper.readTree(login_result);
                        loginStatus = login_result_json_node.get("status").asText();
                        if (loginStatus.equals("LoginSuccess")) {
                            loginAuthCode = login_result_json_node.get("authCode").asText();
                        }
                    }
                    String access_token_params = "{\n" +
                            "    \"client_id\": \"" + clientId + "\",\n" +
                            "    \"client_secret\": \"" + clientSecret + "\",\n" +
                            "    \"grant_type\": \"authorization_code\",\n" +
                            "    \"code\": \"" + loginAuthCode + "\"\n" +
                            "}";

                    HttpRequest access_token_request = HttpUtil.createPost("https://openapi.alipan.com/oauth/access_token");
                    access_token_request.body(access_token_params);
                    String access_token_request_result = access_token_request.execute().body();
                    JsonNode access_token_json_node = objectMapper.readTree(access_token_request_result);
                    tokenType = access_token_json_node.get("token_type").asText();
                    accessToken = (access_token_json_node.get("access_token").asText());
                    refreshToken = (access_token_json_node.get("refresh_token").asText());
                    expiresIn =(access_token_json_node.get("expires_in").asInt());
                    System.out.println("登陆成功");

                    HttpRequest post = HttpUtil.createPost("https://openapi.alipan.com/adrive/v1.0/user/getDriveInfo");
                    post.header("Authorization", "Bearer " + accessToken);
                    String body = post.execute().body();
                    ObjectMapper objectMapper1 = new ObjectMapper();
                    try {
                        JsonNode jsonNode1 = objectMapper1.readTree(body);
                        avatar = (jsonNode1.get("avatar").asText());
                        driveId = (jsonNode1.get("default_drive_id").asText());
                        nickName = (jsonNode1.get("nick_name").asText());
                        System.out.println(JSON.toJSONString(this));
                    } catch (JsonProcessingException e) {
                        throw new RuntimeException(e);
                    }

                } catch (Exception e) {
                    e.printStackTrace();
                }
            });
            checkLoginStatusTask.start();
        } catch (Exception e) {

        }
        return oauthQrcode;
    }

    @Override
    public void createFolder(UserStorage userStorage, FolderDto folder) {

    }
}
