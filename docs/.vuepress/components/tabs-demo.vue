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

<script>
import Tabs from '../../../src/tabs.vue'
import TabsHead from '../../../src/tabs-head.vue'
import TabBody from '../../../src/tabs-body.vue'
import TabsItem from '../../../src/tabs-item.vue'
import TabsPanel from '../../../src/tabs-panel.vue'
import Icon from '../../../src/icon.vue'
export default {
  components: {
    'xin-tabs': Tabs,
    'xin-tabs-head': TabsHead,
    'xin-tabs-body': TabBody,
    'xin-tabs-item': TabsItem,
    'xin-tabs-panel': TabsPanel,
    'xin-icon': Icon
  },
  data(){
    return{
      selected: 'tab2'
    }
  }
}
</script>
