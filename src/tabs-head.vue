<template>
  <div class="tabs-head" ref="head">
      <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "XingTabsHead",
  inject: ['eventBus'],
  mounted(){
    this.eventBus.$on('update:selected',(item,vm)=> {
      let {width,left} = vm.$el.getBoundingClientRect()
      let {left: left2} = this.$refs.head.getBoundingClientRect()
      this.$refs.line.style.width = `${width}px`
      this.$refs.line.style.left = `${left - left2}px`
    })
  }
}
</script>

<style scoped lang="scss">
$tabs-head-height: 40px;
$border-color: #ddd;
$blue: #1677ff;
  .tabs-head {
    display: flex;
    height: $tabs-head-height;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    border-bottom: 1px solid $border-color;
    >.line{
      position: absolute;
      bottom: 0;
      border-bottom: 2px solid $blue;
      transition: left 300ms,width 300ms;
    }
    >.actions-wrapper{
      margin-left: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 1em;
    }
  }
</style>