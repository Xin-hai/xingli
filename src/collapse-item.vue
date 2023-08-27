<template>
  <div class="collapse-item">
    <div v-text="title" class="title" @click="open=!open"></div>
    <div class="content" v-if="open" >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "XingCollapseItem",
  data(){
    return{
      open: false
    }
  },
  props: {
    title: {
      type: String,
      require: true
    }
  }
}
</script>

<style scoped lang="scss">
$color-grey: #ddd ;
$border-radius: 4px;
$min-height: 32px;
  .collapse-item{
    >.title{
      border: 1px solid $color-grey;
      min-height: $min-height;
      padding: 0 8px;
      margin-top: -1px;
      margin-right: -1px;
      margin-left: -1px;
      display: flex;
      align-items: center;
    }
    >.content{
      padding: 8px;
    }
  }
</style>