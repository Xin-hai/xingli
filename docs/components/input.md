---
title: Input - 输入框
---

# 输入框

## 预览

&nbsp;

<ClientOnly>

<input-demo></input-demo>

</ClientOnly>

## 使用方法

```vue
<template>
  <div>
    <xin-input></xin-input>
    <xin-input :disabled="true"></xin-input>
    <xin-input :readonly="true"></xin-input>
    <xin-input error="这是一个错误"></xin-input>
  </div>
</template>
```
## 选项<Badge text="支持选项" />

|    选项    |         取值         |        类型        |    作用     |
|:--------:|:------------------:|:----------------:|:---------:|
| selected |       String       | String  | 设置选中的item |
| readonly | true、false，默认false |      String      |   设置只读    |
|  error   |       String       |      String      |  设置错误信息   |

## 双向绑定

预览

&nbsp;

<ClientOnly>

<input-model></input-model>

</ClientOnly>

实现代码

```vue
<template>
  <div>
    <xin-input v-model="value"></xin-input>
    <br>
    value: {{value}}
  </div>
</template>

<!--定义一下value-->
data(){
    return {
      value: '双向绑定'
    }
  }
```
