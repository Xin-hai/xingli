import Vue from 'vue'
import Button from "./button.vue";
import icon from './icon.vue'
import ButtonGroup from "./button-group.vue";
import Input from './input.vue';
import Row from './row.vue';
import Col from './col.vue';
import Layout from './layout.vue';
import Header from "./header.vue";
import Side from './side.vue';
import Footer from "./footer.vue";
import Content from "./content.vue";
import Toast from './toast.vue';
import plugin from './plugin';

Vue.config.productionTip = false

Vue.component('g-button', Button)
Vue.component('g-icon', icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-side', Side)
Vue.component('g-footer', Footer)
Vue.component('g-content', Content)
Vue.component('g-toast', Toast)

Vue.use(plugin)


new Vue({
    el:'#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false,
        message: 'hi'
    },
    methods: {
        showToast(){
            this.$toast(`我是 message我是 ${Math.random()*100} ` ,{
                enableHtml: false,
                autoClose: true,
                autoCloseDelay: 300,
                position: 'right',
                closeButton: {
                    text: '确认关闭',
                    callback(){
                        console.log('确认关闭')
                    }
                }
            })
        }
    },
    created(){
        // this.$toast('我是 message', {
        //     // closeButton: {
        //     //     text: '知道',
        //     //     callback(){
        //     //         console.log('用户说他知道了')
        //     //     }
        //     // }
        // })
    }
})



