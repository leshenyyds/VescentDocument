# API 参考

本节提供 Vescent Document 的完整 API 参考文档。

## 组件 API

### Button 组件

基础按钮组件。

**属性：**

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| `type` | `string` | `default` | 按钮类型 |
| `size` | `string` | `medium` | 按钮大小 |
| `disabled` | `boolean` | `false` | 是否禁用 |

**示例：**

```vue
<template>
  <Button type="primary" size="large">点击我</Button>
</template>
```

### Card 组件

卡片容器组件。

**属性：**

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| `title` | `string` | - | 卡片标题 |
| `shadow` | `string` | `hover` | 阴影模式 |

## 组合式 API

### useDocument

文档相关的组合式函数。

```javascript
import { useDocument } from 'vescent'

const { title, content } = useDocument()
```
