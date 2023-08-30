<template>
    <div class="popover"  ref="popover">
      <transition name="fade">
      <div ref="contentWrapper" class="content-wrapper"  v-if="visible" :class="{[`position-${position}`]: true}">
        <slot name="content" :close="close"></slot>
      </div>
      </transition>
      <span ref="triggerWrapper" class="trigger-wrapper">
        <slot name="default" ></slot>
      </span>
    </div>
</template>

<script>

export default {
  name: "XingPopover",
  data(){
    return {
      visible: false,
    }
  },
  mounted(){
    if(this.trigger === 'click'){
      this.$refs.popover.addEventListener('click', this.onClick)
    }else {
      this.$refs.popover.addEventListener('mouseenter', this.open)
      this.$refs.popover.addEventListener('mouseleave', this.close)
    }
  },
  destroyed(){
    if(this.trigger === 'click'){
      this.$refs.popover.addEventListener('click', this.onClick)
    }else {
      this.$refs.popover.addEventListener('mouseenter', this.open)
      this.$refs.popover.addEventListener('mouseleave', this.close)
    }
  },
  props: {
    position:{
      type: String,
      default: 'top',
      validator(value){
        return ['top','right','bottom','left'].includes(value)
      }
    },
    trigger: {
      type: String,
      default: 'click',
      validator(value) {
        return ['click','hover'].includes(value);
      }
    }
  },
  methods: {
    positionContent(){
      const contentWrapper = this.$refs.contentWrapper
      document.body.appendChild(contentWrapper)
      const {width,height,left, top} = this.$refs.triggerWrapper.getBoundingClientRect()
      const {height:height2} = contentWrapper.getBoundingClientRect()

      let positions = {
        top: {top: window.scrollY + top, left:  window.scrollY + left},
        bottom: {top: window.scrollY + top +height , left: left + window.scrollX},
        right: {top: window.scrollY + top+ (height -height2)/2 , left: left + window.scrollX + width},
        left: {top: window.scrollY + top+ (height -height2)/2 , left: left + window.scrollX},
         }
      contentWrapper.style.left = positions[this.position].left + 'px'
      contentWrapper.style.top = positions[this.position].top + 'px'
    },
    onClickDocument(e){
      if (this.$refs.popover &&
          (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))) {
        return;
      }
      if(this.$refs.contentWrapper &&
          (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))){
        return
      }
      this.close()
    },
    open(){
      this.visible = true
      this.$nextTick(()=> {
        this.positionContent()
        document.addEventListener('click', this.onClickDocument)
      })
    },
    close(){
      this.visible = false
      document.removeEventListener('click', this.onClickDocument)
    },
   onClick(event){
     if(this.$refs.triggerWrapper.contains(event.target)){
       if(this.visible === true){
         this.close()
       }else{
         this.open()
       }
     }
    }
  }
}
</script>

<style scoped lang="scss">
  $border-color: #333;
  $border-radius: 4px;
    .popover{
      display: inline-block;
      vertical-align: top;
      position: relative;
    }
    .content-wrapper {
      position: absolute;
      border: 1px solid $border-color;
      border-radius: $border-radius;
      //box-shadow: 0 0 3px rgba(0,0,0,.5);
      filter: drop-shadow(0 1px 1px rgba(0,0,0,0.5));
      background: white;

      padding: 0.5em 1em;
      max-width: 20em;
      word-break: break-word;
        &::before,&::after{
        content: '';
        display: block;
        border: 10px solid transparent;
        height: 0;
        width: 0;
        position: absolute;
        }
        &.position-top{
        transform: translateY(-100%);
        margin-top: -10px;
        &::before,&::after{
          left: 10px;
        }
        &:before {
          border-top-color: black;
          top: 100%;
          border-bottom: none;
        }
        &::after{
          border-top-color: white;
          top: calc(100% - 1px);
          border-bottom: none;
        }
      }
      &.position-bottom{
        margin-top: 10px;
        &::before,&::after{
          left: 10px;
        }
        &:before {
          border-bottom-color: black;
          bottom: 100%;
          border-top: none;
        }
        &::after{
          border-bottom-color: white;
          bottom: calc(100% - 1px);
          border-top: none;
        }
      }
      &.position-left {
        transform: translateX(-100%);
        margin-left: -10px;
        &::before,&::after{
          top: 50%;
          transform: translateY(-50%);
        }
        &:before {
          border-left-color: black;
          border-right: none;
          left: 100%;
        }
        &::after{
          border-left-color: white;
          border-right: none;
          left: calc(100% - 1px);
        }
      }
      &.position-right {
        margin-left: 10px;
        &::before,&::after{
          top: 50%;
          transform: translateY(-50%);
        }
        &:before {
          border-left: none;
          border-right-color: black;
          right: 100%;
        }
        &::after{
          border-left: none;
          border-right-color: white;
          right: calc(100% - 1px);
        }
      }

    }
    .trigger-wrapper{
      display: inline-flex;
    }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 250ms;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
