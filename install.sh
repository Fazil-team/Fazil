#!/bin/bash
set -e

DEFAULT_INSTALL_DIR="/opt/fazil"
SERVICE_NAME="fazil"
SERVICE_FILE="/etc/systemd/system/${SERVICE_NAME}.service"

echo "=================================="
echo "   Fazil 应用安装/卸载/更新脚本"
echo "=================================="
echo "1. 安装"
echo "2. 卸载"
echo "3. 更新"
read -p "请选择操作 [1/2/3]: " choice

if [ "$choice" = "1" ]; then
    echo ""
    read -p "请输入安装目录（默认: ${DEFAULT_INSTALL_DIR}）: " INSTALL_DIR
    INSTALL_DIR="${INSTALL_DIR:-$DEFAULT_INSTALL_DIR}"
    INSTALL_DIR=$(realpath "$INSTALL_DIR")

    echo "[信息] 安装目录设定为: $INSTALL_DIR"

    # 检查 Java
    echo "[信息] 检查 Java 环境..."
    if ! which java >/dev/null 2>&1; then
        echo "[提示] 未检测到 Java，将尝试自动安装..."
        wget -O /tmp/jdk21.deb https://download.oracle.com/java/21/latest/jdk-21_linux-x64_bin.deb
        sudo dpkg -i /tmp/jdk21.deb
    else
        echo "[信息] Java 已安装"
    fi

    # 下载并解压应用
    echo "[信息] 创建安装目录..."
    sudo mkdir -p "$INSTALL_DIR"
    cd "$INSTALL_DIR"

    if [ -f "Fazil.zip" ]; then
        echo "[信息] 已存在 Fazil.zip，跳过下载"
    else
        echo "[信息] 下载应用文件..."
        sudo wget -O Fazil.zip https://github.com/Fazil-team/Fazil/releases/download/lastest/Fazil.zip
    fi

    echo "[信息] 解压应用..."
    sudo unzip -o -q Fazil.zip
    sudo chmod -R 755 "$INSTALL_DIR"

    # 创建 systemd 服务
    echo "[信息] 创建 systemd 服务配置..."
    sudo tee "${SERVICE_FILE}" >/dev/null <<EOF
[Unit]
Description=Fazil Java App Service
After=network.target

[Service]
Type=simple
WorkingDirectory=${INSTALL_DIR}
ExecStart=/usr/bin/java -jar ${INSTALL_DIR}/app.jar
Restart=always
RestartSec=5
User=root

[Install]
WantedBy=multi-user.target
EOF

    echo "[信息] 启动服务并设置为开机自启..."
    sudo systemctl daemon-reexec
    sudo systemctl daemon-reload
    sudo systemctl enable "${SERVICE_NAME}"
    sudo systemctl restart "${SERVICE_NAME}"

    echo ""
    echo "[完成] 安装成功，服务正在运行"
    echo "[路径] 应用部署在: ${INSTALL_DIR}"
    echo "[服务] 使用以下命令查看状态："
    echo "       sudo systemctl status ${SERVICE_NAME} -n 50"

elif [ "$choice" = "2" ]; then
    echo ""
    echo "[信息] 正在执行卸载操作..."

    if [ -f "$SERVICE_FILE" ]; then
        INSTALL_DIR=$(grep "^WorkingDirectory=" "$SERVICE_FILE" | cut -d'=' -f2)
        echo "[信息] 检测到安装目录: $INSTALL_DIR"
    else
        echo "[警告] 未检测到服务配置文件，尝试使用默认目录"
        INSTALL_DIR="$DEFAULT_INSTALL_DIR"
    fi

    if systemctl is-active --quiet "${SERVICE_NAME}"; then
        echo "[信息] 停止服务..."
        sudo systemctl stop "${SERVICE_NAME}"
    fi

    echo "[信息] 禁用并删除服务配置..."
    sudo systemctl disable "${SERVICE_NAME}"
    sudo rm -f "${SERVICE_FILE}"

    echo "[信息] 删除应用目录: ${INSTALL_DIR}"
    sudo rm -rf "${INSTALL_DIR}"

    echo "[信息] 刷新 systemd 配置..."
    sudo systemctl daemon-reexec
    sudo systemctl daemon-reload

    echo ""
    echo "[完成] 卸载已完成。"

elif [ "$choice" = "3" ]; then
    echo ""
    echo "[信息] 执行更新操作..."

    if [ -f "$SERVICE_FILE" ]; then
        INSTALL_DIR=$(grep "^WorkingDirectory=" "$SERVICE_FILE" | cut -d'=' -f2)
        echo "[信息] 检测到安装目录: $INSTALL_DIR"
    else
        echo "[错误] 未检测到安装信息，请先安装后再更新"
        exit 1
    fi

    cd "$INSTALL_DIR"

    echo "[信息] 下载最新版本..."
    sudo wget -O Fazil.zip https://github.com/Fazil-team/Fazil/releases/download/lastest/Fazil.zip

    echo "[信息] 停止服务..."
    sudo systemctl stop "${SERVICE_NAME}"

    echo "[信息] 删除旧文件..."
    sudo rm -rf lib app.jar

    echo "[信息] 解压新文件..."
    sudo unzip -o -q Fazil.zip lib/* app.jar

    echo "[信息] 设置权限..."
    sudo chmod -R 755 "$INSTALL_DIR"

    echo "[信息] 重启服务..."
    sudo systemctl restart "${SERVICE_NAME}"

    echo ""
    echo "[完成] 更新成功！服务已重启。"
    echo "[服务] 使用以下命令查看状态："
    echo "       sudo systemctl status ${SERVICE_NAME} -n 50"

else
    echo "[错误] 输入无效，请输入 1 / 2 / 3"
    exit 1
fi
