<template >
  <div class="wrapper">
    <input type="text" :value="value" :disabled="disabled" :readonly="readonly" :class="{'error': error}"
    @change="$emit('change',$event)"
    @input="$emit('input',$event)"
    @focus="$emit('focus',$event)"
    @blur="$emit('blur',$event)"
    >
    <template v-if="error">
      <Icon name="error" class="error-style"></Icon>
      <span v-text="error" class="errorMessage"></span>
    </template>

  </div>
</template>

<script>
import Icon from "./icon.vue";
export default {
  name: "XingInput",
  components:{
    Icon
  },
  props: {
     value:{
       type: String
     },
    disabled:{
       type: Boolean,
       default: false
    },
    readonly:{
       type: Boolean,
       default: false
    },
    error:{
       type: String
    }
  }
}
</script>

<style scoped lang="scss">
$border-color: #999;
$height: 32px;
$border-color-hover: #666;
$border-radius: 4px;
$font-size: 12px;
$box-shadow-color: rgba(0,0,0,0.5);
$red: #ee3f4d;


.wrapper{
  display: inline-flex;
  align-items: center;
  font-size: $font-size;
  > :not(:last-child) {margin-right: .5em; }

  > input{
    height: $height;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    font-size: inherit;
    padding: 0 8px;
    &:hover{
      border-color: $border-color-hover;
    }
    &:focus { box-shadow: inset 0 1px 3px $box-shadow-color; outline: none; }
    &[disabled],&[readonly]{
      border-color: #aaa;
      color: #aaa;
      cursor: not-allowed;
    }
  }
  .error{
    border-color: $red;
  }
  .error-style{
    fill: $red
  }
  .errorMessage{
    color: red;
  }
}

</style>