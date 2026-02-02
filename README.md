# ETFB Wiki

> Escape Tsunami For Brainrots Wiki - Your ultimate resource for surviving the waves

**网站地址：https://escapetsunamiforbrainrots.space**

ETFB Wiki 是一个社区驱动的非官方知识库网站，专为 Roblox 游戏 "Escape Tsunami For Brainrots" 设计。无论是新手还是资深玩家，这里都能找到你需要的攻略、工具和资源。

## 特性

- **完整游戏攻略** - 从新手入门到高级策略，帮助你在海啸浪潮中生存
- **Brainrot 百科全书** - 包含所有 brainrot 收集品的详细数据、稀有度和生成位置
- **进程指南** - 优化基地收益、规划重生时机的最佳策略
- **游戏内工具与计算器** - 帮助你估算收益、规划升级
- **事件与秘密** - 发现游戏中的隐藏内容
- **常见问题解答** - 解答玩家的常见疑问
- **内置游戏** - 直接在网站上体验 Escape Tsunami For Brainrots
- **深色/浅色主题** - 支持跟随系统、手动切换的个性化主题

## 技术栈

- **Next.js 16** - React 框架
- **React 19** - UI 库
- **TypeScript** - 类型安全
- **Tailwind CSS 4** - 样式框架
- **Lucide React** - 图标库

## 项目结构

```
escapeysunami/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── about/       # 关于页面
│   │   ├── privacy/     # 隐私政策
│   │   ├── terms/       # 服务条款
│   │   ├── globals.css  # 全局样式
│   │   ├── layout.tsx   # 根布局
│   │   └── page.tsx     # 首页
│   └── components/      # React 组件
│       ├── Hero.tsx           # 英雄区域
│       ├── IntroSection.tsx   # 介绍区域
│       ├── Mechanics.tsx      # 游戏机制
│       ├── Encyclopedia.tsx    # 百科全书
│       ├── Progression.tsx     # 进程指南
│       ├── EventsSecrets.tsx   # 事件与秘密
│       ├── ToolsScripts.tsx    # 工具与脚本
│       ├── FAQ.tsx            # 常见问题
│       ├── Navbar.tsx         # 导航栏
│       ├── Footer.tsx         # 页脚
│       └── VideoSection.tsx   # 视频区域
├── public/               # 静态资源
├── package.json          # 依赖配置
├── tsconfig.json         # TypeScript 配置
├── tailwind.config.ts    # Tailwind CSS 配置
└── next.config.ts        # Next.js 配置
```

## 快速开始

### 安装依赖

```bash
npm install
```

### 运行开发服务器

```bash
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建生产版本

```bash
npm run build
```

### 运行生产服务器

```bash
npm run start
```

### 代码检查

```bash
npm run lint
```

## 页面说明

### 首页 (/)
- Hero：游戏介绍和快速导航
- 介绍区域：游戏基础概念
- 游戏机制：核心玩法说明
- Brainrot 百科：收集品数据库
- 进程指南：升级和收益优化
- 事件与秘密：特殊内容发现
- 工具与脚本：实用计算器
- FAQ：常见问题解答

### 关于页面 (/about)
了解 ETFB Wiki 的使命、核心价值观和免责声明。

## 重要声明

**ETFB Wiki 是一个非官方的粉丝制作资源。** 我们 **不隶属于** Roblox Corporation 或 Escape Tsunami For Brainrots 的开发者。

所有游戏相关内容、商标和知识产权归其各自所有者所有。本 Wiki 仅为信息目的创建，旨在帮助社区。

## 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目！

## 许可证

本项目遵循 MIT 许可证。
