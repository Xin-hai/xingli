<template>
  <div class="collapse-item">
    <div v-text="title" class="title" @click="toggle" :class="classes"></div>
    <transition name="fade">
    <div class="content" v-if="open" >
      <slot></slot>
    </div>
      </transition>
  </div>
</template>

<script>
export default {
  name: "XingCollapseItem",
  inject: ['eventBus'],
  data(){
    return{
      open: false,
    }
  },
  props: {
    title: {
      type: String,
      require: true
    },
    name: {
      type: String,
      require: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes(){
      return {
        disabled: this.disabled
      }
    }
  },
  methods: {
    toggle(){
      if(this.open){
        this.eventBus && this.eventBus.$emit('update:removeSelected', this.name)
      }else{
        if(this.disabled){return}
       this.eventBus && this.eventBus.$emit('update:addSelected', this.name)
      }
    }
  },
  mounted(){
    if(this.eventBus){
      this.eventBus.$on('update:selected', (names)=>{
        this.open = names.indexOf(this.name) >= 0;
      })
    }
  }
}
</script>

<style scoped lang="scss">
$color-grey: #ddd ;
$border-radius: 4px;
$min-height: 32px;
$color-disabled: rgba(0, 0, 0, 0.25);
  .collapse-item{
    >.title{
      border: 1px solid $color-grey;
      min-height: $min-height;
      padding: 0 8px;
      margin-top: -1px;
      margin-right: -1px;
      margin-left: -1px;
      display: flex;
      align-items: center;
      cursor: pointer;
    }
    .disabled{
      cursor: not-allowed;
      color: $color-disabled;
    }
    .content{
      padding: 8px;
    }
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to  {
      transform: translateX(10px);
      opacity: 0;
    }
  }
</style>