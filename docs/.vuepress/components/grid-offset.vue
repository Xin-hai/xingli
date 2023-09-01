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
    margin-bottom: 4px;
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