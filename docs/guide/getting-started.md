# 快速开始

本指南将帮助你快速搭建 Vescent Document 文档站点。

## 环境要求

- Node.js >= 18
- pnpm / npm / yarn

## 安装

```bash
# 使用 pnpm（推荐）
pnpm install

# 或使用 npm
npm install

# 或使用 yarn
yarn install
```

## 启动开发服务器

```bash
# 启动开发服务器
pnpm docs:dev
```

执行后，访问 `http://localhost:5173` 即可预览文档站点。

## 构建生产版本

```bash
# 构建生产版本
pnpm docs:build
```

构建产物位于 `docs/.vitepress/dist` 目录。

## 下一步

- 了解如何[编写文档内容](/guide/introduction)
- 查看[配置选项](/guide/configuration)
