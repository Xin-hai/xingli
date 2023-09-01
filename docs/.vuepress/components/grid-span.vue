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

<script>
import Col from '../../../src/col.vue'
import Row from '../../../src/row.vue'
export default {
  components: {
    'xin-col': Col,
    'xin-row': Row
  }

}
</script>