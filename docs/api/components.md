# 组件 API

详细了解 Vescent 提供的组件接口。

## 内置组件

VitePress 自带了一些实用的 Markdown 组件。

### 代码块

````md
```js {2,4-6}
function hello() {
  // 高亮第 2 行
  const a = 1
  // 高亮第 4-6 行
  const b = 2
  const c = 3
  const d = 4
}
```
````

### 自定义容器

```md
::: info
这是一条信息提示
:::

::: warning
这是一条警告提示
:::

::: danger
这是一条危险提示
:::
```

### 徽章

```md
- Vite <Badge type="warning" text="V5" />
- Vue <Badge type="tip" text="3.4+" />
```

## 自定义组件

你可以在 `.vitepress/theme/components/` 目录下创建自定义组件。

```vue
<!-- .vitepress/theme/components/MyComponent.vue -->
<template>
  <div class="my-component">
    {{ msg }}
  </div>
</template>

<script setup>
const msg = 'Hello World'
</script>
```
