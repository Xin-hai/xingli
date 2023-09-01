---
title: Tabs - 标签
---

# 标签

## 预览

&nbsp;

<ClientOnly>

<tabs-demo></tabs-demo>

</ClientOnly>

## 使用方法

```vue
<template>
  <div>
    <xin-tabs :selected="selected">
      <xin-tabs-head>
        <xin-tabs-item name="tab1">tab1</xin-tabs-item>
        <xin-tabs-item name="tab2">tab2</xin-tabs-item>
        <xin-tabs-item name="tab3" :disabled="true">tab3</xin-tabs-item>
        <xin-tabs-item name="tab4">tab4<xin-icon name="settings"></xin-icon></xin-tabs-item>
        <xin-tabs-item name="tab5"><xin-icon name="settings"></xin-icon>tab5</xin-tabs-item>
      </xin-tabs-head>
      <xin-tabs-body>
        <xin-tabs-panel name="tab1">我是内容 一</xin-tabs-panel>
        <xin-tabs-panel name="tab2">我是内容 二</xin-tabs-panel>
        <xin-tabs-panel name="tab3">我是内容 三</xin-tabs-panel>
        <xin-tabs-panel name="tab4">我是内容 四</xin-tabs-panel>
        <xin-tabs-panel name="tab5">我是内容 五</xin-tabs-panel>
      </xin-tabs-body>
    </xin-tabs>
  </div>
</template>

<!--注意绑定 selected-->
  data(){
    return{
      selected: 'tab2'
    }
  }
```

## 选项<Badge text="支持选项" />
tabs 选项

| tabs 选项  |        取值        |        类型        |     作用      |
|:--------:|:----------------:|:----------------:|:-----------:|
| selected |      String      |      String      | 设置默认选中标签，必填 |


tabs-item 选项

| tabs-item 选项 |         取值         |   类型    |    作用     |
|:------------:|:------------------:|:-------:|:---------:|
|   disabled   | true、false，默认false | Boolean |   设置不可选   |
|     name     |  String or Number  | String or Number  | 设置name，必填 |

::: danger 重要
1、tabs的子组件应该是tabs-head和tabs-body。
 
2、tabs-item和items-panel的name必须设定，且需要相互对应。
:::