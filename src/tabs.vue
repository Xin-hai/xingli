<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
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
  created() {
    // this.$emit('update:selected', xxx)
  }
}
</script>

<style scoped lang="scss">
  .tabs {

  }
</style>