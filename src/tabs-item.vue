<template>
  <div class="tabs-item" @click="xxx" :class="classes">
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
        active: this.active
      }
    }
  },
  inject: ['eventBus'],
  created(){

  },
  mounted(){
    this.eventBus.$on('update:selected',(name)=>{
      this.active = name === this.name;
    })
  },
  methods: {
    xxx(){
      this.eventBus.$emit('update:selected', this.name)
    }
  }
}
</script>

<style scoped lang="scss">
  .tabs-item {
    flex-shrink: 0;
    padding: 0 2em;
    cursor: pointer;
    border: 1px solid green;
    height: 100%;
    display: flex;
    align-items: center;
    &.active{
      background: red;
    }
  }
</style>