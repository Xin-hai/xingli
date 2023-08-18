<template>
  <button class="g-button" v-if="iconPosition === 'right'">
    <slot></slot>
    <svg class="icon" v-if="icon">
      <use v-bind:xlink:href="`#i-${icon}`"></use>
    </svg>
  </button>
  <button class="g-button" v-else>
    <svg class="icon" v-if="icon">
      <use v-bind:xlink:href="`#i-${icon}`"></use>
    </svg>
    <slot></slot>
  </button>
</template>

<script>

export default {
  props: ['icon', 'iconPosition']
}
</script>

<style scoped lang="scss">

.g-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);

  &:hover {
    border-color: var(--border-color-hover);
  }

  &:active {
    background: var(--button-active-bg);
  }

  &:focus {
    outline: none;
  }
}

</style>