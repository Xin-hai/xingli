---
title: Collapse - 折叠面板
---

# Collapse

## 预览

&nbsp;

<ClientOnly>

<collapse-demo></collapse-demo>

</ClientOnly>

## 使用方法

```vue
<template>
  <div>
    <xin-collapse :selected.sync="selected1">
      <xin-collapse-item title="标题1" name="1">I'm tab1 corresponding to content one </xin-collapse-item>
      <xin-collapse-item title="标题2" name="2">I'm tab2 corresponding to content two</xin-collapse-item>
      <xin-collapse-item title="标题3" name="3">I'm tab3 corresponding to content three</xin-collapse-item>
      <xin-collapse-item title="标题4" name="4">I'm tab4 corresponding to content four</xin-collapse-item>
    </xin-collapse>
    <br><br>
    <xin-collapse :selected.sync="selected2">
      <xin-collapse-item title="标题1" name="1">I'm tab1 corresponding to content one </xin-collapse-item>
      <xin-collapse-item title="标题2" name="2">I'm tab2 corresponding to content two</xin-collapse-item>
      <xin-collapse-item title="标题3" name="3" :disabled="true">I'm tab3 corresponding to content three</xin-collapse-item>
      <xin-collapse-item title="标题4" name="4">I'm tab4 corresponding to content four</xin-collapse-item>
    </xin-collapse>
    <br><br>
    <xin-collapse :selected.sync="selected3" :multiple="false">
      <xin-collapse-item title="标题1" name="1">我是内容 一 </xin-collapse-item>
      <xin-collapse-item title="标题2" name="2">我是内容 二 </xin-collapse-item>
      <xin-collapse-item title="标题3" name="3">我是内容 三 </xin-collapse-item>
      <xin-collapse-item title="标题4" name="4">我是内容 四 </xin-collapse-item>
    </xin-collapse>
  </div>
</template>

<script>
import Collapse from "../../../src/collapse.vue";
import CollapseItem from "../../../src/collapse-item.vue";
export default {
  components: {
    'xin-collapse': Collapse,
    'xin-collapse-item': CollapseItem
  },
  data(){
    return{selected1: ['1'], selected2: ['2'],selected3: ['2']}
  }
}
</script>

```

## 选项<Badge text="支持选项" />
选项

|    选项    |     取值     |   类型    |          作用          |
|:--------:|:----------:|:-------:|:--------------------:|
|  title   |   String   | String  |     设置标题显示文字，必填      |
|   name   |   String   | String  |      设置用来标识，必填       |
| disabled | false、true | Boolean |  设置是否能不可选中，默认false   |
| selected |   Array    |  Array  | 设置选中的一项，其中值为name相同的值 |
| multiple | true、false | Boolean |    设置是否多选，默认为true    |


## 结束

<img :src="$withBase('/img/ending.jpg')" alt="ending" class="custom">