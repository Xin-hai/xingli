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
    if(this.$children.length === 0){
      console.warn &&console.warn('tabs的子组件应该是tabs-head和tabs-body，但是你没写这两个子组件')
      throw new Error('tabs的子组件应该是tabs-head和tabs-body，但是你没写这两个子组件')
    }
    this.$children.map((vm)=>{
     if(vm.$options.name === 'XingTabsHead'){
       vm.$children.map((childVm)=> {
         if(childVm.$options.name === 'XingTabsItem' && childVm.name === this.selected){
           this.eventBus.$emit('update:selected', this.selected, childVm)
         }
       })
     }
   })

  },
  provide(){
    return {
      eventBus: this.eventBus
    }
  }
}
</script>

<style scoped lang="scss">
$color-scheme-light: light;
  .tabs {
    color-scheme: $color-scheme-light;
  }
</style>