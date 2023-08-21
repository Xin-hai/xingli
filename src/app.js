import Vue from 'vue'
import Button from "./button.vue";
import icon from './icon.vue'
import ButtonGroup from "./button-group.vue";
import Input from './input.vue'

Vue.config.productionTip = false

Vue.component('g-button', Button)
Vue.component('g-icon', icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input',Input)

new Vue({
    el:'#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false
    }
})



