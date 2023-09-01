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