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