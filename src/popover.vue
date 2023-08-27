<template>
    <div class="popover" @click.stop="x">
      <div ref="contentWrapper" class="content-wrapper" @click.stop v-if="visible">
        <slot name="content" ></slot>
      </div>
      <span ref="triggerWrapper">
        <slot name="default" ></slot>
      </span>
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
      if(this.visible === true){
        this.$nextTick(()=> {
          document.body.appendChild(this.$refs.contentWrapper)
          let {width, height,left, top} = this.$refs.triggerWrapper.getBoundingClientRect()
          console.log(width, height, left, top);
          this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
          this.$refs.contentWrapper.style.top = window.scrollY + top + 'px'
          let eventHandler =()=>{
            this.visible = false
            document.removeEventListener('click',eventHandler)
          }
          document.addEventListener('click', eventHandler)
        })
      }else {
        console.log('vm 隐藏popover')
      }
    }
  },
  mounted() {
    console.log(this.$refs.triggerWrapper);
  }
}
</script>

<style scoped lang="scss">
    .popover{
      display: inline-block;
      vertical-align: top;
      position: relative;
    }
    .content-wrapper {
      position: absolute;
      border: 1px solid red;
      box-shadow: 0 0 3px rgba(0,0,0,.5);
      transform: translateY(-100%);
    }
</style>
