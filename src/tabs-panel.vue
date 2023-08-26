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
      this.active = name === this.name;
    })
  }
}
</script>

<style scoped lang="scss">
  .tabs-panel {
    padding: 1em 0;
    &.active{

    }
  }
</style>