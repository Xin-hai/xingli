<template>
    <div>
      <xin-button @click="onClickButton1">2s自动关闭</xin-button>
      <xin-button @click="onClickButton2">点击才关闭</xin-button>
      <xin-button @click="onClickButton3">支持 HTML</xin-button>
      <xin-button @click="onClickButton4">支持 回调</xin-button>
      <br><br>
      <xin-button @click="onClickButton5">左侧弹出</xin-button>
      <xin-button @click="onClickButton6">上方弹出</xin-button>
      <xin-button @click="onClickButton7">中部弹出</xin-button>
      <xin-button @click="onClickButton8">下方弹出</xin-button>
      <xin-button @click="onClickButton9">右侧弹出</xin-button>
    </div>
</template>

<script>
import Vue from 'vue'
import Button from "../../../src/button.vue";
import Toast from "../../../src/toast.vue";
import plugin from "../../../src/plugin";
Vue.use(plugin)
export default {
  components: {
    'xin-toast': Toast,
    'xin-button': Button
  },
  methods: {
    onClickButton1(){
      this.$toast('我是Toast的内容', {
        autoClose: 2,
        closeButton: {
          text: '点此关闭'
        }
      })
    },
    onClickButton2(){
      this.$toast('我是Toast的内容', {
        autoClose: false,
        closeButton: {
          text: '点此关闭'
        }
      })
    },
    onClickButton3(){
      this.$toast('<strong>我是Toast内容</strong>,支持<span style="color:red">HTML</span>', {
        closeButton: {
          text: '点此关闭',
        },
        enableHtml: true
      })
    },
    onClickButton4(){
      this.$toast('控制台打印出一句话。', {
        autoClose: false,
        closeButton: {
          text: '点此关闭',
          callback: ()=>{
            console.log('可以加一个回调')
          }
        }
      })
    },
    onClickButton5(){
      this.$toast('我是Toast的内容，在左侧弹出', {
        autoClose: false,
        position: 'left',
        closeButton: {
          text: '点此关闭'
        }
      })
    },
    onClickButton6(){
      this.$toast('我是Toast的内容，在上方弹出', {
        autoClose: false,
        position: 'top',
        closeButton: {
          text: '点此关闭'
        }
      })
    },
    onClickButton7(){
      this.$toast('我是Toast的内容，在中间弹出', {
        autoClose: false,
        position: 'middle',
        closeButton: {
          text: '点此关闭'
        }
      })
    },
    onClickButton8(){
      this.$toast('我是Toast的内容，在下方弹出', {
        autoClose: false,
        position: 'bottom',
        closeButton: {
          text: '点此关闭'
        }
      })
    },
    onClickButton9(){
      this.$toast('我是Toast的内容，在右侧弹出', {
        autoClose: false,
        position: 'right',
        closeButton: {
          text: '点此关闭'
        }
      })
    },
  }
}
</script>
