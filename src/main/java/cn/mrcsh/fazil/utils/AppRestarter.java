package cn.mrcsh.fazil.utils;

import java.io.File;
import java.io.IOException;
import java.net.URI;
import java.util.ArrayList;
import java.util.List;

public class AppRestarter {
    public static void restartApplication() throws IOException {
        String javaBin = System.getProperty("java.home") + File.separator + "bin" + File.separator + "java";
        File currentJar = getExecutableJarFile();
        System.out.println(currentJar.getPath());
        currentJar = new File(currentJar.getPath().replaceAll("nested:", ""));

        // 当前程序是可执行JAR吗？
        if (!currentJar.getName().endsWith(".jar")) {
            throw new IllegalStateException("不是可执行 JAR，不能自我重启");
        }

        // 构造启动命令
        List<String> command = new ArrayList<>();
        command.add(javaBin);
        command.add("-jar");
        command.add(currentJar.getPath());

        new Thread(() -> {
            try {
                Thread.sleep(10);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
            // 杀掉当前 JVM
            System.exit(0);
        }).start();

        // 执行命令：启动新进程
        new ProcessBuilder(command)
                .inheritIO()
                .start();
    }

    public static File getExecutableJarFile() {
        try {
            // 找到当前 class 所在的位置（注意不能用 getPath()）
            URI uri = AppRestarter.class.getProtectionDomain()
                    .getCodeSource()
                    .getLocation()
                    .toURI();

            // 转成路径字符串
            String path = uri.getSchemeSpecificPart();

            // 判断是不是 JAR 包中的 class
            if (path.contains("!")) {
                path = path.substring(0, path.indexOf("!"));
            }

            // nested:/ 开头处理掉
            if (path.startsWith("file:")) {
                path = path.substring("file:".length());
            }

            return new File(path);
        } catch (Exception e) {
            throw new RuntimeException("无法获取 JAR 路径", e);
        }
    }
}
