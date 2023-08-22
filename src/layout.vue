<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "XingLayout",
  data(){
    return{
      layoutClass: {
        hasSide: false
      }
    }
  },
  mounted(){
   this.$children.forEach(vm=>{
     if(vm.$options.name === 'XingSide'){
        this.layoutClass.hasSide = true
     }
   })
  },
}
</script>

<style scoped lang="scss">
    .layout{
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      &.hasSide{
        flex-direction: row;
      }
    }

</style>