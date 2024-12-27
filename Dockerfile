FROM debian
COPY jdk-21_linux-x64_bin.deb /
RUN dpkg -i jdk-21_linux-x64_bin.deb
COPY target/ /opt/server
WORKDIR /opt/server
EXPOSE 8080
ENTRYPOINT ["java","-jar","/opt/server/ZhiFeiPanAdminApp.jar"]