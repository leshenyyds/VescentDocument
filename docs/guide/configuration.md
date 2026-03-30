# 配置

VitePress 提供了强大的配置系统，通过 `.vitepress/config.js` 文件进行配置。

## 基本配置

```javascript
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '我的文档',
  description: '文档描述',

  themeConfig: {
    // 主题配置
  }
})
```

## 常用配置项

### 站点信息

| 配置项 | 说明 | 默认值 |
|--------|------|--------|
| `title` | 站点标题 | - |
| `description` | 站点描述 | - |
| `lang` | 语言 | `en-US` |

### 导航栏

```javascript
themeConfig: {
  nav: [
    { text: '指南', link: '/guide/' },
    { text: 'API', link: '/api/' }
  ]
}
```

### 侧边栏

```javascript
themeConfig: {
  sidebar: [
    {
      text: '指南',
      items: [
        { text: '介绍', link: '/guide/' },
        { text: '快速开始', link: '/guide/getting-started' }
      ]
    }
  ]
}
```

## 更多配置

请参考 [VitePress 官方配置文档](https://vitepress.dev/reference/site-config)。
