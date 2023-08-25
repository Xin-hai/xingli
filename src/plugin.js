import Toast from './toast.vue'


// 动态创建 组件
function createToast({Vue,message, propsData,onClose}){
    let Constructor = Vue.extend(Toast)
    let toast = new Constructor({
        propsData: propsData
    })
    toast.$slots.default = [message]
    toast.$mount()
    toast.$on('beforeClose', onClose)
    document.body.appendChild(toast.$el)
    return toast
}
let currentToast

export default {
    install(Vue, options){
        Vue.prototype.$toast = function(message, toastOptions){
          if(currentToast){
              currentToast.close()
          }
           currentToast = createToast({
               Vue,
               message,
               propsData: toastOptions,
               onClose: ()=>{currentToast=null}
           })
        }
    }
}