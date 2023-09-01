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