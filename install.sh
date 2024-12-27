echo "==================Fazil安装脚本=================="
echo "\r ______   ______     ______     __     __ \r
/\  ___\ /\  __ \   /\___  \   /\ \   /\ \ \r
\ \  __\ \ \  __ \  \/_/  /__  \ \ \  \ \ \____ \r
 \ \_\    \ \_\ \_\   /\_____\  \ \_\  \ \_____\ \r
  \/_/     \/_/\/_/   \/_____/   \/_/   \/_____/ \r"
echo "==================Powered By Virus_Cui=================="

read -p "请输入端口号：" port
read -p "请输入安装目录：" folder

docker run -d --name Fazil -p $port:8080 -v $folder/config:/opt/server/config -v $folder/data:/fazil-data nexus-docker.mrcsh.cn:8088/fazil:1.0

echo "安装完成！"

