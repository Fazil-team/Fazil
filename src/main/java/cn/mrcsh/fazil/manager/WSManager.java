package cn.mrcsh.fazil.manager;


import cn.dev33.satoken.stp.StpUtil;
import cn.mrcsh.fazil.entity.structure.XWS;
import cn.mrcsh.fazil.enums.WSType;
import com.alibaba.fastjson2.JSON;
import jakarta.websocket.OnClose;
import jakarta.websocket.OnOpen;
import jakarta.websocket.Session;
import jakarta.websocket.server.PathParam;
import jakarta.websocket.server.ServerEndpoint;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.*;

@Component
@ServerEndpoint("/wsInterface/{token}")
@Slf4j
public class WSManager {

    public static final Map<String, Session> SESSION_POOL = new LinkedHashMap<>();
    public static final Map<String, Session> SESSION_ID_POOL = new LinkedHashMap<>();
    public static final Map<String, String> ID_POOL = new LinkedHashMap<>();

    @OnOpen
    public void onOpen(Session session, @PathParam("token") String token) throws IOException {
        Object loginIdByToken = StpUtil.getLoginIdByToken(token);
        if(loginIdByToken == null){
            send2Session(session, WSType.KICK, "token错误");
            session.close();
        }
        addToSessionPool(session, String.valueOf(loginIdByToken));
        send2Session(session, WSType.NORMAL, "success");
    }

    @OnClose
    public void onClose(Session session) {
        SESSION_ID_POOL.remove(session.getId());
        SESSION_POOL.remove(ID_POOL.get(session.getId()));
        log.info("[websocket] 关闭链接 | session-id: {}", session.getId());
    }

    public void addToSessionPool(Session session, String id) {
        SESSION_POOL.putIfAbsent(id, session);
        SESSION_ID_POOL.putIfAbsent(session.getId(), session);
        ID_POOL.put(session.getId(), id);
        log.info("[websocket] 新建立连接 | session-id: {}, login-id: {}", session.getId(), id);
    }

    public static void send2Session(String id, WSType type, String msg){
        XWS xws = new XWS();
        xws.setData(msg);
        xws.setType(type.getType());
        xws.setTimestamp(System.currentTimeMillis());
        Session session = SESSION_POOL.get(id);
        session.getAsyncRemote().sendText(JSON.toJSONString(xws));

    }

    public static void send2Session(Session session, WSType type, String msg){
        XWS xws = new XWS();
        xws.setData(msg);
        xws.setType(type.getType());
        xws.setTimestamp(System.currentTimeMillis());
        try {
            session.getAsyncRemote().sendText(JSON.toJSONString(xws));
        }catch (Exception e){
            e.printStackTrace();
            log.error("消息发送失败: {}", xws);
        }
    }
}
