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