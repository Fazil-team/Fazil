package cn.mrcsh.fazil.service.storage;


import org.apache.commons.net.ftp.FTPClient;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

public class AllSPools {

    // FTP连接池
    public static Map<String, FTPClient> ftpClientMap = new ConcurrentHashMap<>();
}
