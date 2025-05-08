# 心情驿站 (Mood Haven)

## 项目简介
心情驿站（Mood Haven）是一个充满温暖和正能量的网站，通过精心设计的界面和积极向上的内容，帮助用户改善心情，传递快乐。网站采用现代化的设计风格，结合流畅的动画效果，为用户创造一个轻松愉悦的在线空间。

## 项目特点
- 清新优雅的界面设计
- 流畅自然的动画效果
- 积极向上的名言警句
- 温暖治愈的视觉元素
- 简单易用的交互方式

## 部署教程

### 一、宝塔面板部署

#### 1. 环境准备
1. 安装宝塔面板
```bash
# CentOS
yum install -y wget && wget -O install.sh http://download.bt.cn/install/install_6.0.sh && sh install.sh

# Ubuntu/Debian
wget -O install.sh http://download.bt.cn/install/install-ubuntu_6.0.sh && sudo bash install.sh
```

2. 在宝塔面板中安装以下软件：
   - Nginx
   - Node.js 版本管理器
   - PM2管理器

#### 2. 项目部署步骤

1. 在宝塔面板中创建网站
   - 点击"网站" -> "添加站点"
   - 填写域名
   - 选择PHP版本为"纯静态"
   - 创建数据库选择"不创建"

2. 上传项目文件
   - 进入网站根目录
   - 上传项目文件到网站根目录

3. 安装项目依赖
```bash
cd /www/wwwroot/你的网站目录
npm install
```

4. 构建项目
```bash
npm run build
```

5. 配置Nginx
   - 在宝塔面板中点击"网站"
   - 找到你的网站，点击"设置"
   - 在"配置文件"中添加以下配置：

```nginx
location / {
    root /www/wwwroot/你的网站目录/build;
    index index.html;
    try_files $uri $uri/ /index.html;
}
```

### 二、服务器直接部署

#### 1. 环境准备

1. 安装Node.js
```bash
# 使用nvm安装Node.js
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install 16
nvm use 16
```

2. 安装Nginx
```bash
# CentOS
sudo yum install nginx

# Ubuntu
sudo apt update
sudo apt install nginx
```

#### 2. 项目部署步骤

1. 创建项目目录
```bash
mkdir -p /var/www/happy-mood
cd /var/www/happy-mood
```

2. 上传项目文件
   - 使用scp或其他方式将项目文件上传到服务器
   - 或使用git克隆项目

3. 安装依赖并构建
```bash
npm install
npm run build
```

4. 配置Nginx
```bash
sudo nano /etc/nginx/sites-available/happy-mood
```

添加以下配置：
```nginx
server {
    listen 80;
    server_name your-domain.com;  # 替换为你的域名

    root /var/www/happy-mood/build;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

5. 启用站点配置
```bash
# 创建符号链接
sudo ln -s /etc/nginx/sites-available/happy-mood /etc/nginx/sites-enabled/

# 测试配置
sudo nginx -t

# 重启Nginx
sudo systemctl restart nginx
```

### 三、注意事项

1. 安全配置
   - 确保服务器防火墙配置正确
   - 建议配置SSL证书，启用HTTPS
   - 定期更新系统和依赖包

2. 性能优化
   - 启用Nginx的gzip压缩
   - 配置适当的缓存策略
   - 使用CDN加速静态资源

3. 监控维护
   - 定期检查服务器状态
   - 监控应用运行状态
   - 及时备份重要数据

### 四、常见问题解决

1. 如果网站无法访问
   - 检查Nginx配置是否正确
   - 确认防火墙设置
   - 查看Nginx错误日志

2. 如果构建失败
   - 检查Node.js版本
   - 确认所有依赖安装成功
   - 查看构建日志

### 五、更新维护

1. 更新代码
```bash
# 拉取最新代码
git pull

# 安装依赖
npm install

# 重新构建
npm run build

# 重启服务
pm2 restart happy-mood
```

2. 备份数据
```bash
# 备份构建文件
tar -czf happy-mood-backup.tar.gz /var/www/happy-mood/build

# 备份配置文件
cp /etc/nginx/sites-available/happy-mood /etc/nginx/sites-available/happy-mood.backup
```

## 技术栈

- React.js
- Tailwind CSS
- Framer Motion
- React Icons

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm start

# 构建生产版本
npm run build
```

## 项目预览


## 贡献指南

欢迎提交 Issue 和 Pull Request

## 许可证

MIT License 