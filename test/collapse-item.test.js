const expect = chai.expect;
import Vue from 'vue'
import CollapseItem from "../src/collapse-item.vue";

Vue.config.productionTip = false
Vue.config.devtools = false

describe('CollapseItem', () => {
    it('存在.', () => {
        expect(CollapseItem).to.be.ok
    })
    it('接受 disabled 属性',()=>{
        const Constructor = Vue.extend(CollapseItem)
        const vm = new Constructor({
            propsData: {
                disabled: true
            }
        }).$mount()
       expect(vm.$el.querySelector('.disabled').classList.contains('disabled')).to.be.true
    })
})