<template>
  <transition name="slide">
  <div class="side" v-if="visible">
    <slot></slot>
    <button @click="visible=false">close</button>
  </div>
  </transition>
</template>

<script>
export default {
  data(){
    return {
      visible: true
    }
  },
  name: "XingSide"
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
   transition: all 0.5s;
 }
 .slide-enter, .slide-leave-to {
   margin-left: -200px;
 }

</style>