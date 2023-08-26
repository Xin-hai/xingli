<template>
  <div class="tabs-head">
      <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "XingTabsHead",
  inject: ['eventBus'],
  created(){}
}
</script>

<style scoped lang="scss">
$tabs-head-height: 40px;
  .tabs-head {
    border: 1px solid red;
    display: flex;
    height: $tabs-head-height;
    justify-content: flex-start;
    align-items: center;
    >.actions-wrapper{
      margin-left: auto;
    }
  }
</style>