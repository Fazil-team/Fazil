echo "==================Fazil安装脚本=================="
echo "\r ______   ______     ______     __     __ \r
/\  ___\ /\  __ \   /\___  \   /\ \   /\ \ \r
\ \  __\ \ \  __ \  \/_/  /__  \ \ \  \ \ \____ \r
 \ \_\    \ \_\ \_\   /\_____\  \ \_\  \ \_____\ \r
  \/_/     \/_/\/_/   \/_____/   \/_/   \/_____/ \r"
echo "==================Powered By Virus_Cui=================="

read -p "请输入端口号：" port
read -p "请输入安装目录：" folder

echo "初始化文件系统"

mkdir $folder/config
mkdir $folder/data

cd $folder/config
echo "$folder/config"

if command -v wget >/dev/null 2>&1; then
    echo "wget 已安装"
    wget https://dl.mrcsh.cn/CloudDisk/application.yml
else
    echo "wget 未安装"
    if command -v yum &>/dev/null; then
        echo "检测到 yum 包管理器，正在安装 wget..."
        yum install -y wget
        wget https://dl.mrcsh.cn/CloudDisk/application.yml
    elif command -v dnf &>/dev/null; then
        echo "检测到 dnf 包管理器，正在安装 wget..."
        dnf install -y wget
        wget https://dl.mrcsh.cn/CloudDisk/application.yml
    elif command -v apt-get &>/dev/null; then
        echo "检测到 apt-get 包管理器，正在安装 wget..."
        apt-get update -y
        apt-get install -y wget
        wget https://dl.mrcsh.cn/CloudDisk/application.yml
    else
        echo "未找到受支持的包管理器，请手动安装 wget。"
        exit 1
    fi
fi

docker run -d --name Fazil -p $port:8080 -v $folder/config:/opt/server/config/ -v $folder/data:/opt/server/data/ nexus-docker.mrcsh.cn/fazil:20250206095319

echo "安装完成！"

