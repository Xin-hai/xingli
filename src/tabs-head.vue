<template>
  <div class="tabs-head">
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
  created(){
    this.eventBus.$on('update:selected',(item,vm)=> {
      // console.log(item);
      // console.log(vm);
    })
  }
}
</script>

<style scoped lang="scss">
$tabs-head-height: 40px;
$blue: #1677ff;
  .tabs-head {
    border: 1px solid red;
    display: flex;
    height: $tabs-head-height;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    >.line{
      position: absolute;
      bottom: 0;
      border-bottom: 2px solid $blue;
      width: 100px;
    }
    >.actions-wrapper{
      margin-left: auto;
    }
  }
</style>