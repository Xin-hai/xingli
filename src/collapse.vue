<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: "XingCollapse",
  data(){
    return {
      eventBus: new Vue()
    }
  },
  props: {
    multiple: {
      default: false,
      type: Boolean
    },
    selected: {
      type: String
    }
  },
  provide(){
    if(this.multiple){return }
    return {
      eventBus: this.eventBus
    }
  },
  mounted(){
    this.eventBus.$emit('update:selected', this.selected)
    this.eventBus.$on('update:selected',(name)=> {
      this.$emit('update:selected', name)
    })

  }
}
</script>

<style scoped lang="scss">
$color-grey: #ddd ;
$border-radius: 4px;
  .collapse{
    border: 1px solid $color-grey;
    border-radius: $border-radius;
    overflow: hidden;
  }
</style>