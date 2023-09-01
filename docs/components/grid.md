---
title: Grid - 网格
---

# 网格
24格网格系统。

## 预览

&nbsp;

<ClientOnly>

<grid-demo></grid-demo>

</ClientOnly>

## 使用方法

```vue
<template>
  <div>
    <xin-row class="xin-row">
      <xin-col span="24" class="xin-col">24</xin-col>
    </xin-row>
    <xin-row class="xin-row">
      <xin-col span="12" class="xin-col">12</xin-col>
      <xin-col span="12" class="xin-col">12</xin-col>
    </xin-row>
    <xin-row class="xin-row">
      <xin-col span="8" class="xin-col">8</xin-col>
      <xin-col span="8" class="xin-col">8</xin-col>
      <xin-col span="8" class="xin-col">8</xin-col>
    </xin-row>
    <xin-row class="xin-row">
      <xin-col span="6" class="xin-col">6</xin-col>
      <xin-col span="6" class="xin-col">6</xin-col>
      <xin-col span="6" class="xin-col">6</xin-col>
      <xin-col span="6" class="xin-col">6</xin-col>
    </xin-row>
    <xin-row class="xin-row">
      <xin-col span="3" class="xin-col">3</xin-col>
      <xin-col span="3" class="xin-col">3</xin-col>
      <xin-col span="3" class="xin-col">3</xin-col>
      <xin-col span="3" class="xin-col">3</xin-col>
      <xin-col span="3" class="xin-col">3</xin-col>
      <xin-col span="3" class="xin-col">3</xin-col>
      <xin-col span="3" class="xin-col">3</xin-col>
      <xin-col span="3" class="xin-col">3</xin-col>
    </xin-row>
  </div>
</template>

<style scoped lang="scss">
$background: #42b983;
$color: white;
.xin-row{
  color: $color;
  .xin-col{
    text-align: center;margin: 2px 0;
    &:nth-child(odd){background: $background;}
    &:nth-child(even){background: darken($background, 10%);}
  }
}
</style>
```

## 选项<Badge text="支持选项" />


### Row 选项

| Row 选项  |        取值         |        类型        |      作用      |
|:-------:|:-----------------:|:----------------:|:------------:|
| gutter  |     限定数字和字符串      | String or Number | 设置col组件之间的间隔 |
| align | left、center、right |      String      |    设置排版方式    |

#### gutter
设置`gutter`表示空隙/间隔，单位为'px'。

预览
&nbsp;

<ClientOnly>

<grid-gutter></grid-gutter>

</ClientOnly>

代码实现

```vue
<template>
  <div>
    <xin-row class="xin-row" gutter="10">
      <xin-col span="12" class="xin-col"><div>gutter 10</div></xin-col>
      <xin-col span="12" class="xin-col"><div>gutter 10</div></xin-col>
    </xin-row>
    <xin-row class="xin-row" gutter="20">
      <xin-col span="12" class="xin-col"><div>gutter 20</div></xin-col>
      <xin-col span="12" class="xin-col"><div>gutter 20</div></xin-col>
    </xin-row>
    <xin-row class="xin-row" gutter="30">
      <xin-col span="12" class="xin-col"><div>gutter 30</div></xin-col>
      <xin-col span="12" class="xin-col"><div>gutter 30</div></xin-col>
    </xin-row>
  </div>
</template>

<style scoped lang="scss">
* { box-sizing: border-box; }
$background: #42b983;
$color: white;
.xin-row{
  color: $color;
  .xin-col{
    text-align: center;margin: 2px 0;
    > div {  background: #3eaf7c; }
  }
}
</style>
```

#### align
设置`align`表示row组件中子组件的排版方式。

预览
&nbsp;

<ClientOnly>

<grid-align></grid-align>

</ClientOnly>

代码实现

```vue
<template>
  <div>
    <xin-row class="xin-row" align="left">
      <xin-col span="10" class="xin-col">align=left</xin-col>
      <xin-col span="10" class="xin-col">align=left</xin-col>
    </xin-row>
    <xin-row class="xin-row" align="center">
      <xin-col span="10" class="xin-col">align=center</xin-col>
      <xin-col span="10" class="xin-col">align=center</xin-col>
    </xin-row>
    <xin-row class="xin-row" align="right">
      <xin-col span="10" class="xin-col">align=right</xin-col>
      <xin-col span="10" class="xin-col">align=right</xin-col>
    </xin-row>
  </div>
</template>

<style scoped lang="scss">
* { box-sizing: border-box; }
$background: #42b983;
$color: white;
.xin-row{
  color: $color;
  .xin-col{
    text-align: center;margin: 2px 0;
    &:nth-child(odd){background: $background;}
    &:nth-child(even){background: darken($background, 10%);}
  }
}
</style>
```

### Col 选项

|          Col 选项           |      取值       |        类型        |       作用       |
|:-------------------------:|:-------------:|:----------------:|:--------------:|
|           span            |     0-24      | String or Number |  设置col组件<br/>占据的宽度  |
|          offset           |     0-24      | String or Number | 设置col组件<br/>向右偏移的距离 |
| ipad、narrow-pc、pc、wide-pc | span和offset的值 |      Object      |     设置响应式      |

#### span
设置`span`表示网格系统中col组件跨越的宽度，`span`和`offset`相加总数为24份。

预览
&nbsp;

<ClientOnly>

<grid-span></grid-span>

</ClientOnly>

代码实现

```vue
<template>
  <div>
    <xin-row class="xin-row">
      <xin-col span="12" class="xin-col">12</xin-col>
      <xin-col span="12" class="xin-col">12</xin-col>
    </xin-row>
    <xin-row class="xin-row">
      <xin-col span="8" class="xin-col">8</xin-col>
      <xin-col span="8" class="xin-col">8</xin-col>
      <xin-col span="8" class="xin-col">8</xin-col>
    </xin-row>
    <xin-row class="xin-row">
      <xin-col span="6" class="xin-col">6</xin-col>
      <xin-col span="6" class="xin-col">6</xin-col>
      <xin-col span="6" class="xin-col">6</xin-col>
      <xin-col span="6" class="xin-col">6</xin-col>
    </xin-row>
  </div>
</template>

<style scoped lang="scss">
* { box-sizing: border-box; }
$background: #42b983;
$color: white;
.xin-row{
  color: $color;
  .xin-col{
    text-align: center;margin: 2px 0;
    &:nth-child(odd){background: $background;}
    &:nth-child(even){background: darken($background, 10%);}
  }
}
</style>
```
#### offset
设置`offset`表示col组件向右偏移的距离，原理为margin-left设置，`span`和`offset`相加总数为24份。

预览
&nbsp;

<ClientOnly>

<grid-offset></grid-offset>

</ClientOnly>

代码实现

```vue
<template>
  <div>
    <xin-row class="xin-row">
      <xin-col span="6" class="xin-col"><span>offset=0</span></xin-col>
      <xin-col span="4" offset="8" class="xin-col"><span>offset=8</span></xin-col>
      <xin-col span="4" offset="2" class="xin-col"><span>offset=2</span></xin-col>
    </xin-row>
    <xin-row class="xin-row">
      <xin-col span="8"  class="xin-col"><span>offset=0</span></xin-col>
      <xin-col span="6" offset="2" class="xin-col"><span>offset=2</span></xin-col>
      <xin-col span="4" offset="4" class="xin-col"><span>offset=4</span></xin-col>
    </xin-row>
  </div>
</template>

<style scoped lang="scss">
* { box-sizing: border-box; }
$background: #42b983;
$color: white;
.xin-row{
  color: $color;
  .xin-col{
    text-align: center;
    &:nth-child(odd){background: $background;}
    &:nth-child(even){background: darken($background, 10%);}
  }
}
</style>
```

#### 响应式

支持ipad、narrowPc、pc、widePc和默认手机端的响应式布局。设置多种模式时，需要`span`和`offset`相加总数为24。

预览
&nbsp;

<ClientOnly>

<grid-response></grid-response>

</ClientOnly>

代码实现

```vue
<template>
  <div>
    <xin-row class="xin-row">
      <xin-col span="8" :ipad="{span:8}" :wide-pc="{span: 6,offset: 2}" :pc="{span: 4,offset: 4}" class="xin-col">8</xin-col>
      <xin-col span="8" :ipad="{span: 6,offset: 2}" :wide-pc="{span:8}" :pc="{span: 4,offset: 4}" class="xin-col">8</xin-col>
      <xin-col span="8" :ipad="{span: 4,offset: 4}" :wide-pc="{span: 6,offset: 2}" :pc="{span:8}" class="xin-col">8</xin-col>
    </xin-row>
  </div>
</template>

<style scoped lang="scss">
* { box-sizing: border-box; }
$background: #42b983;
$color: white;
.xin-row{
  color: $color;
  .xin-col{
    text-align: center;margin: 2px 0;
    &:nth-child(odd){background: $background;}
    &:nth-child(even){background: darken($background, 10%);}
  }
}
</style>
```