<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: "XingToast"
}
</script>

<style scoped lang="scss">
$font-size: 14px;
$toast-height: 40px;
$toast-bg: #f0f9eb;
$toast-color: #67c23a;
.toast {
  display: flex;align-items: center;
  position: fixed;top:0;left: 50%;transform: translateX(-50%);
  font-size: $font-size;height: $toast-height;line-height: 1.8;
  background: $toast-bg;border-radius: 4px; color: $toast-color;
  box-shadow: 0 0 3px 0 lighten($toast-color,20%);padding: 0 16px;
}
</style>