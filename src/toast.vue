<template>
  <div class="wrapper" :class="toastClass">
    <div class="toast" ref="toast" >
      <div class="message">
        <div v-html="$slots.default[0]" v-if="enableHtml"></div>
        <slot v-else></slot>
      </div>
      <div class="line" ref="line"></div>
      <span class="close" v-if="closeButton" @click="onClickClose()">{{closeButton.text}}</span>
    </div>
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
      default: 5
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
    },
    position: {
      type: String,
      default: 'top',
      validator(value){
        return ['top','middle','bottom','left','right'].includes(value)
      }
    }
  },
  computed: {
    toastClass(){
      return {
        [`position-${this.position}`]: true
      }
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
      this.$emit('beforeClose')
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
$animation-time: 0.5s;
@keyframes slide-up {
  0% {opacity: 0;transform: translateY(100%)}
  100%{opacity: 1;transform: translateY(0)}
}
@keyframes slide-down {
  0% {opacity: 0;transform: translateY(-100%)}
  100%{opacity: 1;transform: translateY(0)}
}
@keyframes slide-right {
  0% {opacity: 0;transform: translateX(-100%)}
  100%{opacity: 1;transform: translateX(0)}
}
@keyframes slide-left {
  0% {opacity: 0;transform: translateX(100%)}
  100%{opacity: 1;transform: translateX(0)}
}
@keyframes fade-in {
  0% {opacity: 0;}
  100%{opacity: 1;}
}
.wrapper {
  position: fixed;
  &.position-top{
    left: 50%;
    top:0;
    transform: translateX(-50%);
    .toast{
      animation: slide-down $animation-time;
      border-top-right-radius: 0;
      border-top-left-radius: 0;
    }
  }
  &.position-middle{
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .toast {
      animation: fade-in $animation-time;
    }
  }
  &.position-bottom{
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    .toast{
      animation: slide-up $animation-time;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
  &.position-left{
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    .toast{
      animation: slide-right $animation-time;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
  &.position-right{
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    .toast{
      animation: slide-left $animation-time;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
}
.toast {
  display: flex;align-items: center;
  font-size: $font-size;min-height: $toast-min-height;line-height: 1.8;
  background: $toast-bg;border-radius: 4px; color: $toast-color;
  box-shadow: 0 0 3px 0 lighten($toast-color,5%);padding: 0 16px;
   .message{
    padding: 8px 0;
  }
  .line{
    border-left: 1px solid #dcf1d1;
    margin-left: 16px;
    height: 100%;
  }
   .close {
    padding-left: 16px;
    flex-shrink: 0;
    cursor: pointer;
  }

}
</style>