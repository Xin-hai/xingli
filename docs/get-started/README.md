---
快速上手
---

# 快速上手

## 引入
```js
import {Button, Input} from 'xin-li'
```
## 注册组件
```js
export default {
  components: {
    "xin-button": Button, 
      "xin-input": Input
  },
}
```
## 使用
```vue
<template>
  <div>
    <xin-button>默认按钮</xin-button>
    <xin-input></xin-input>
  </div>
</template>
```
## 效果
&ensp;
<ClientOnly>
<get-started></get-started>
</ClientOnly>