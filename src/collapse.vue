<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "XingCollapse"
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