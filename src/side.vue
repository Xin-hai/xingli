<template>
  <transition name="slide">
  <div class="side" v-if="visible">
    <slot></slot>
    <g-button @click="visible=false" v-if="shouldClose">close</g-button>
  </div>
  </transition>
</template>

<script>
import Button from './button.vue'
export default {
  data(){
    return {
      visible: true
    }
  },
  components: {
    'g-button': Button
  },
  name: "XingSide",
  props: {
    shouldClose: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
 .side {
   position: relative;
   >button {
     position: absolute;
     right: 0;
     top: 0;
   }
 }
 .slide-enter-active, .slide-leave-active {
   transition: all 0.3s;
 }
 .slide-enter, .slide-leave-to {
   margin-left: -150px;
 }

</style>