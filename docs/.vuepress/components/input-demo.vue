<template>
    <div>
      <xin-input></xin-input>
      <xin-input :disabled="true"></xin-input>
      <xin-input :readonly="true"></xin-input>
      <xin-input error="这是一个错误"></xin-input>

    </div>
</template>

<style scoped lang="scss">
div:last-child{
  margin-top: 8px;
}
</style>

<script>
import Input from '../../../src/input.vue'
export default {
  components: {
    'xin-input': Input,
  }
}
</script>

