<template>
<div>
  <xin-input v-model="value"></xin-input>
  <br>
  value: {{value}}
</div>
</template>

<script>
import Input from '../../../src/input.vue'
export default {
  components: {'xin-input': Input},
  data(){
    return {
      value: '双向绑定'
    }
  }
}
</script>
