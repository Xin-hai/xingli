<template>
    <div class="tabs-panel" :class="classes" v-if="active">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: "XingTabsPanel",
  inject: ['eventBus'],
  props: {
    name: {
      type: [String,Number],
      require: true
    }
  },
  data(){
    return {
      active: false
    }
  },
  computed: {
    classes(){
      return {
        active: this.active
      }
    }
  },
  mounted(){
    this.eventBus.$on('update:selected',(name)=>{
      if(name === this.name){
        this.active = true
      }else{
        this.active = false
      }
    })
  }
}
</script>

<style scoped lang="scss">
  .tabs-panel {
    &.active{
      background: red;
    }
  }
</style>