import Vue from 'vue'
import Button from "./button.vue";
import icon from './icon.vue'

Vue.config.productionTip = false

Vue.component('g-button', Button)
Vue.component('g-icon', icon)

new Vue({
    el:'#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false
    }
})
