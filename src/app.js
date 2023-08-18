import Vue from 'vue'
import Button from "./button.vue";

Vue.config.productionTip = false

Vue.component('g-button', Button)

new Vue({
    el:'#app',
    data: {

    }
})
