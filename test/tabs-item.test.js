
const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs.vue'
import TabsItem from "../src/tabs-item.vue";
import TabsBody from "../src/tabs-body.vue";
import TabsPanel from "../src/tabs-panel.vue";
import TabsHead from "../src/tabs-head.vue";
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-panel', TabsPanel)
Vue.component('g-tabs-head', TabsHead)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('TabsItem', () => {
    it('存在.', () => {
        expect(TabsItem).to.be.ok
    })

        it('接收 name 属性', ()=> {
            const Constructor = Vue.extend(TabsItem)
            const vm = new Constructor({
                propsData: {
                    name: 'xxx'
                }
            }).$mount()
            expect(vm.$el.getAttribute('data-name')).to.equal('xxx')
        })
    it('接收 disabled 属性', ()=> {
        const Constructor = Vue.extend(TabsItem)
        const vm = new Constructor({
            propsData: {
                disabled: true
            }
        }).$mount()
        let x = vm.$el
        expect(x.classList.contains('disabled')).to.be.true
        })
    })