---
title: Layout - 布局
---

# 布局

## 预览

&nbsp;

<ClientOnly>

<layout-demo></layout-demo>

</ClientOnly>

## 使用方法

```vue
<template>
  <div>
    <xin-layout>
      <xin-header >header</xin-header>
      <xin-content >content</xin-content>
      <xin-footer >footer</xin-footer>
    </xin-layout>
    <br>
    <xin-layout >
      <xin-header >header</xin-header>
      <xin-layout>
        <xin-side>side</xin-side>
        <xin-content >content</xin-content>
      </xin-layout>
      <xin-footer >footer</xin-footer>
    </xin-layout>
    <br>
    <xin-layout>
      <xin-side>side</xin-side>
      <xin-layout>
        <xin-header>header</xin-header>
        <xin-content>content</xin-content>
        <xin-footer>footer</xin-footer>
      </xin-layout>
    </xin-layout>
    <br>
    <xin-layout>
      <xin-layout>
        <xin-header>header</xin-header>
        <xin-content>content</xin-content>
        <xin-footer>footer</xin-footer>
      </xin-layout>
      <xin-side should-close="true">side</xin-side>
    </xin-layout>
  </div>
</template>

<style scoped lang="scss">
$background: lightskyblue;
.header{
  height: 50px;
  background: $background;
}
.content{
  height: 150px;
  background: darken($background, 10%);
}
.footer{
  height: 50px;
  background: darken($background, 30%);
}
.side{
  width: 150px;
  background: lighten($background, 15%);
}
</style>
```

## 选项<Badge text="支持选项" />

`close` 设置能显示side是否能关闭，有默认动画。
::: warning 注意
动画默认设置的side的宽度是150px,若side非默认且使用close，需设置代码中的margin-left。
```scss
.slide-enter, .slide-leave-to {
   margin-left: -150px;
 }
```
:::