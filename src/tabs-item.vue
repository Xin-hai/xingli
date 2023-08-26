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
      this.eventBus.$emit('update:selected', this.name, this)
    }
  }
}
</script>

<style scoped lang="scss">
  $blue: #1677ff;
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
  }
</style>