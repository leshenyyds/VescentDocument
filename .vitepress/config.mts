import { defineConfig } from 'vitepress'

export default defineConfig({
  srcDir: 'docs',
  appearance: 'dark',
  title: 'Vescent Document',
  description: 'Vescent 文档中心',

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Vescent',

    outline: {
      label: '页面目录',
      level: [2, 3],
    },

    search: {
      provider: 'local',
    },

    nav: [
      { text: '指南', link: '/guide/introduction' },
      { text: '命名规则', link: '/standards/naming-rules' },
      { text: 'API 参考', link: '/api/overview' },
      { text: '更新日志', link: '/changelog' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '介绍', link: '/guide/introduction' },
            { text: '快速开始', link: '/guide/getting-started' },
            { text: '配置', link: '/guide/configuration' },
          ],
        },
      ],
      '/standards/': [
        {
          text: '命名规则',
          collapsed: false,
          items: [
            { text: 'UE 引擎统一命名规范', link: '/standards/naming-rules' },
          ],
        },
      ],
      '/api/': [
        {
          text: 'API 参考',
          items: [
            { text: '概述', link: '/api/overview' },
            { text: '组件 API', link: '/api/components' },
          ],
        },
      ],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/your-repo' }],

    footer: {
      message: '基于 VitePress 构建',
      copyright: 'Copyright © 2024 Vescent',
    },
  },

  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
})
