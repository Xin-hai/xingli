<template>
  <div class="popover">
    <xin-popover position="left">
      <template v-slot:content>
        <div>我是Popover内容</div>
      </template>
      <template v-slot:default>
        <xin-button>点击左侧弹出</xin-button>
      </template>
    </xin-popover>
    <xin-popover position="top">
      <template v-slot:content>
        <div>我是Popover内容</div>
      </template>
      <template v-slot:default>
        <xin-button>点击上方弹出</xin-button>
      </template>
    </xin-popover>
    <xin-popover position="bottom">
      <template v-slot:content>
        <div>我是Popover内容</div>
      </template>
      <template v-slot:default>
        <xin-button>点击下方弹出</xin-button>
      </template>
    </xin-popover>
    <xin-popover position="right">
      <template v-slot:content>
        <div>我是Popover内容</div>
      </template>
      <template v-slot:default>
        <xin-button>点击右侧弹出</xin-button>
      </template>
    </xin-popover>
    <br><br>
    <xin-popover position="left" trigger="hover">
      <template v-slot:content>
        <div>我是Popover内容</div>
      </template>
      <template v-slot:default>
        <xin-button>点击左侧弹出</xin-button>
      </template>
    </xin-popover>
    <xin-popover position="top" trigger="hover">
      <template v-slot:content>
        <div>我是Popover内容</div>
      </template>
      <template v-slot:default>
        <xin-button>点击上方弹出</xin-button>
      </template>
    </xin-popover>
    <xin-popover position="bottom" trigger="hover">
      <template v-slot:content>
        <div>我是Popover内容</div>
      </template>
      <template v-slot:default>
        <xin-button>点击下方弹出</xin-button>
      </template>
    </xin-popover>
    <xin-popover position="right" trigger="hover">
      <template v-slot:content>
        <div>我是Popover内容</div>
      </template>
      <template v-slot:default>
        <xin-button>点击右侧弹出</xin-button>
      </template>
    </xin-popover>
    <br><br>
    <xin-popover position="left">
      <template v-slot:content="slotProps">
        <div>我是Popover内容</div>
        <xin-button @click="slotProps.close">关闭</xin-button>
      </template>
      <template v-slot:default>
        <xin-button>左侧 内嵌关闭按钮</xin-button>
      </template>
    </xin-popover>
  </div>
</template>

<script>
import Popover from "../../../src/popover.vue";
import Button from "../../../src/button.vue";
export default {
  components: {
    'xin-popover': Popover,
    'xin-button': Button
  }
}
</script>

