<template>
    <svg class="g-icon">
      <use v-bind:xlink:href="`#i-${name}`"></use>
    </svg>
</template>

<script>
import './svg'
export default {
  name: 'XingIcon',
  props: ['name']
}
</script>

<style scoped lang="scss">
.g-icon {
  height: 1em;
  width: 1em;
}
</style>