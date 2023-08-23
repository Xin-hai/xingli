import Toast from './toast.vue'
export default {
    install(Vue, options){
        Vue.prototype.$toast = function(message, toastOptions){
            // 动态创建 组件
            let Constructor = Vue.extend(Toast)
            let toast = new Constructor({
                propsData: {
                    closeButton: toastOptions.closeButton
                }
            })
            toast.$slots.default = [message]
            toast.$mount()
            document.body.appendChild(toast.$el)
        }
    }
}