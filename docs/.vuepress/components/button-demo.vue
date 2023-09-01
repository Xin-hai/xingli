<template>
  <div>
    <xin-button>默认按钮</xin-button>
    <xin-button icon="support">设置按钮</xin-button>
    <xin-button icon="settings">设置按钮</xin-button>
    <xin-button :loading="true">loading按钮</xin-button>
    <xin-button :disabled="true">disabled按钮</xin-button>
    <xin-button icon="settings" icon-position="right">右侧按钮</xin-button>
    <hr>
    <xin-button-group>
      <xin-button>按钮组</xin-button>
      <xin-button>按钮组</xin-button>
      <xin-button>按钮组</xin-button>
    </xin-button-group>

<!--    <pre><code>{{content}}</code></pre>-->
  </div>
</template>

<script >
import Button from '../../../src/button.vue'
import ButtonGroup from '../../../src/button-group.vue'
export default {
  components: {
    'xin-button': Button,
    'xin-button-group': ButtonGroup
  },
    data(){
      return {
        content: `<xin-button>默认按钮</xin-button>
        <xin-button icon="settings">设置按钮</xin-button>
        <xin-button :loading="true">loading按钮</xin-button>
        <xin-button :disabled="true">disabled按钮</xin-button>`.replace(/\t+| +/g,'').trim()
      }
    }
}
</script>