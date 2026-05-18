# 💚 心情驿站 — Xin Qing Yi Zhan

> 让心情变好的小站 — 温暖治愈的心理健康追踪 Web 应用

📌 **项目简介**

心情驿站是一个充满温暖和正能量的心理健康 Web 应用，通过精心设计的界面和积极向上的内容，帮助用户改善心情、传递快乐。项目基于 React 18 构建，结合 Tailwind CSS 和 Framer Motion，打造出流畅的动画效果和清新优雅的视觉体验。支持多主题切换、随机正能量语录、彩纸庆祝动画等趣味交互。

✨ **核心特性**

- 🌈 **5 款渐变主题** — 默认 / 日落 / 海洋 / 森林 / 薰衣草，一键切换
- 💬 **随机正能量语录** — 10 条温暖文案，点击即换
- 🎊 **彩纸庆祝动画** — 切换语录时 50 个粒子从天而降
- 😊 **动态表情图标** — 微笑图标呼吸动画 + 旋转摇摆
- 🎨 **8 个心情图标** — 阳光 / 云朵 / 爱心 / 微笑 / 音乐 / 星星 / 彩虹 / 羽毛
- 🎭 **Framer Motion 动画** — 入场动画、悬停缩放、弹簧物理效果
- 💎 **毛玻璃卡片** — `backdrop-blur` 半透明卡片设计
- 📱 **响应式布局** — 桌面端与移动端完美适配

🛠️ **技术栈**

| 技术 | 版本 | 说明 |
|------|------|------|
| React | 18.2 | 核心框架，Hooks 驱动 |
| React DOM | 18.2 | DOM 渲染 |
| Tailwind CSS | 3.3 | 原子化 CSS 框架 |
| Framer Motion | 10.16 | 声明式动画库 |
| React Icons | 4.11 | 图标库 (Font Awesome) |
| Heroicons | 2.0 | 图标库补充 |
| React Scripts | 5.0 | CRA 脚手架 |

🚀 **快速开始**

**前置条件**

- Node.js 16+
- npm 或 yarn

**安装步骤**

```bash
git clone https://github.com/aiyangdie/-Xin-Qing-Yi-Zhan.git
cd -Xin-Qing-Yi-Zhan
npm install
```

**运行**

```bash
# 启动开发服务器
npm start

# 构建生产版本
npm run build
```

开发服务器启动后访问 `http://localhost:3000`

📂 **项目结构**

```
-Xin-Qing-Yi-Zhan/
├── public/
│   └── index.html          # HTML 模板
├── src/
│   ├── App.js              # 主组件（主题切换 / 语录 / 动画）
│   ├── index.js            # 入口文件
│   └── index.css           # Tailwind 基础样式
├── package.json            # 依赖与脚本
├── tailwind.config.js      # Tailwind 配置（自定义颜色 / 动画）
├── .gitignore              # Git 忽略配置
├── CNAME                   # GitHub Pages 自定义域名
└── README.md               # 项目说明
```

🤝 **贡献与许可证**

欢迎提交 Issue 和 Pull Request 改进项目！

本项目基于 **MIT License** 开源 — 详见 [LICENSE](LICENSE) 文件。
