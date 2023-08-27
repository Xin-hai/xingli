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
import Tabs from './tabs.vue'
import TabsItem from "./tabs-item.vue";
import TabsBody from "./tabs-body.vue";
import TabsPanel from "./tabs-panel.vue";
import TabsHead from "./tabs-head.vue";
import Collapse from "./collapse.vue";
import CollapseItem from "./collapse-item.vue";
import Popover from "./popover.vue";

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
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-panel', TabsPanel)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-collapse', Collapse)
Vue.component('g-collapse-item', CollapseItem)
Vue.component('g-popover', Popover)

Vue.use(plugin)


new Vue({
    el:'#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false,
        message: 'hi',
        selectedTab: ['2']
    },
    created(){},
    methods:{

    }
})



