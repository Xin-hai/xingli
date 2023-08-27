<template>
    <div class="popover" @click="x">
      <div class="content-wrapper">
        <slot name="content" v-if="visible"></slot>
      </div>
      <slot name="default"></slot>
    </div>
</template>

<script>
export default {
  name: "XingPopover",
  data(){
    return {
      visible: false
    }
  },
  methods: {
    x(){
      this.visible = !this.visible
    }
  }
}
</script>

<style scoped lang="scss">
    .popover{
      display: inline-block;
      vertical-align: top;
      position: relative;
      .content-wrapper {
        position: absolute;
        bottom: 100%;
        left: 0;
        border: 1px solid red;
        box-shadow: 0 0 3px rgba(0,0,0,.5);
      }
    }
</style>