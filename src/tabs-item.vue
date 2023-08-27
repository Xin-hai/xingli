<template>
  <div class="tabs-item" @click="onClick" :class="classes" :data-name="name">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: "XingTabsItem",
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: [String, Number],
      require: true
    },
    props: {}
  },
  data(){
    return {
      active: false
    }
  },
  computed: {
    classes(){
      return {
        active: this.active,
        disabled: this.disabled
      }
    }
  },
  inject: ['eventBus'],
  created(){
  },
  mounted(){
    if(this.eventBus){
      this.eventBus.$on('update:selected',(name)=>{
        this.active = name === this.name;
      })
    }
  },
  methods: {
    onClick(){
      if(this.disabled){return}
      if(this.eventBus){
        this.eventBus.$emit('update:selected', this.name, this)
      }
    }
  }
}
</script>

<style scoped lang="scss">
  $blue: #1677ff;
  $color-disabled: rgba(0, 0, 0, 0.25);
  .tabs-item {
    flex-shrink: 0;
    padding: 0 2em;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    &.active{
      font-weight: bold;
      color: $blue;
    }
    &.disabled{
      cursor: not-allowed;
      color: $color-disabled;
    }
  }
</style>