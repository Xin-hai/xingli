<template>
  <div>
    <xin-button>默认按钮</xin-button>
    <xin-input></xin-input>
  </div>
</template>

<script>
import Button from '../../../src/button.vue'
import Input from "../../../src/input.vue";

export default {
  name: 'get-started',
  components: {
    "xin-button": Button,
    "xin-input": Input
  }
}
</script>

<style scoped lang="scss">

</style>