<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]:true}"
  @click="$emit('click')">
    <g-icon :name="icon" v-if="icon&& !loading" class="icon"></g-icon>
    <g-icon name="loading" class="loading icon" v-if="loading"></g-icon>
    <div class="content"><slot></slot></div>
  </button>
</template>

<script>
import Icon from "./icon.vue";

export default {
  name: 'XingButton',
  components: {'g-icon': Icon},
  props:{
    icon: {},
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator (value){
        return value === 'left' || value === 'right'
      }
    }
  }
}
</script>

<style scoped lang="scss">
@keyframes spin{
  0% {transform: rotate(0deg)}
  0% {transform: rotate(360deg)}
}
$font-size: 14px;
$button-height: 32px;
$border-radius: 4px;
$border-color: #999;
$button-bg: white;
$border-color-hover: #666;
$button-active-bg: #eee;

.g-button {
  font-size: $font-size;
  height: $button-height;
  padding: 0 1em;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover {border-color: $border-color-hover;}
  &:active {background: $button-active-bg;}
  &:focus {outline: none;}
  > .icon{
    order: 1;margin-right: .1em;}
  > .content{order: 2;}
  &.icon-right{
    > .icon{order: 2;margin-right: 0;margin-left: .1em;}
    > .content {order: 1;}
  }
  .loading{animation: spin 2s infinite linear;}
}
</style>