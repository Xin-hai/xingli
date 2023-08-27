<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: "XingCollapse",
  data(){
    return {
      eventBus: new Vue(),

    }
  },

  props: {
    multiple: {
      default: true,
      type: Boolean
    },
    selected: {
      type: Array
    }
  },
  provide(){
    // if(this.multiple){return }
    return {
      eventBus: this.eventBus,
    }
  },
  mounted(){
    this.eventBus.$emit('update:selected', this.selected)
    this.eventBus.$on('update:addSelected',(name)=> {
      // let selectedCopy = JSON.parse(JSON.stringify((this.selected)))
      let selectedCopy =  structuredClone(this.selected)
      if(this.multiple){
        selectedCopy.push(name)
      }else{
        selectedCopy = [name]
      }
      this.$emit('update:selected', selectedCopy)
      this.eventBus.$emit('update:selected', selectedCopy)
    })
    this.eventBus.$on('update:removeSelected',(name)=> {
      // let selectedCopy = JSON.parse(JSON.stringify((this.selected)))
      let selectedCopy =  structuredClone(this.selected)
      let index = selectedCopy.indexOf(name)
      selectedCopy.splice(index, 1)
      this.$emit('update:selected', selectedCopy)
      this.eventBus.$emit('update:selected', selectedCopy)
    })
  }
}
</script>

<style scoped lang="scss">
$color-grey: #ddd ;
$border-radius: 4px;
  .collapse{
    border: 1px solid $color-grey;
    border-radius: $border-radius;
    overflow: hidden;
  }
</style>