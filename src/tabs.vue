<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: "XingTabs",
  props: {
    selected:{
      type: String,
      require: true
    },
    directional: {
      type: String,
      default: 'horizontal',
      validator(value){
        return ['horizontal','vertical'].includes(value)
      }
    }
  },
  data(){
    return {
      eventBus : new Vue()
    }
  },
  mounted() {
    this.eventBus.$emit('update:selected', this.selected)
  },
  provide(){
    return {
      eventBus: this.eventBus
    }
  }
}
</script>

<style scoped lang="scss">
  .tabs {

  }
</style>