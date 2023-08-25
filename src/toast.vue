<template>
  <div class="toast" ref="toast">
    <div class="message">
      <div v-html="$slots.default[0]" v-if="enableHtml"></div>
      <slot v-else></slot>
    </div>

    <div class="line" ref="line"></div>
    <span class="close" v-if="closeButton" @click="onClickClose()">{{closeButton.text}}</span>
  </div>
</template>

<script>

export default {
  name: "XingToast",
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    autoCloseDelay: {
      type: Number,
      default: 500
    },
    closeButton: {
      type: Object,
      default() {
        return{
          text: '关闭',
          callback: undefined
        }
      }
    },
    enableHtml: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    executeAutoClose(){
      if(this.autoClose){
        setTimeout(()=>{
          this.close()
        },  this.autoCloseDelay* 1000)
      }
    },
    updateStyle(){
      this.$nextTick(()=> {
        this.$refs.line.style.height =
            `${this.$refs.toast.getBoundingClientRect().height}px`
      })
    },
    close(){
      this.$el.remove()
      this.$destroy()
    },
    onClickClose(){
      this.close()
      if(this.closeButton && typeof this.closeButton.callback === "function"){
        this.closeButton.callback()
      }
    }
  },
  created() {

  },
  mounted(){
    this.updateStyle()
    this.executeAutoClose()
  }
}
</script>

<style scoped lang="scss">
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: #f0f9eb;
$toast-color: #67c23a;
.toast {
  display: flex;align-items: center;
  position: fixed;top:0;left: 50%;transform: translateX(-50%);
  font-size: $font-size;min-height: $toast-min-height;line-height: 1.8;
  background: $toast-bg;border-radius: 4px; color: $toast-color;
  box-shadow: 0 0 3px 0 lighten($toast-color,5%);padding: 0 16px;
  > .message{
    padding: 8px 0;
  }
  >.line{
    border-left: 1px solid #dcf1d1;
    margin-left: 16px;
    height: 100%;
  }
  > .close {
    padding-left: 16px;
    flex-shrink: 0;
    cursor: pointer;
  }
}
</style>