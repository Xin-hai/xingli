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

describe('Tabs', () => {
    it('存在.', () => {
        expect(Tabs).to.be.ok
    })
    it('接收 selected', (done)=> {
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
           <g-tabs selected="sports">
        <g-tabs-head>
            <g-tabs-item name="study">  学习 </g-tabs-item>
            <g-tabs-item name="thinking">思考</g-tabs-item>
            <g-tabs-item name="sports" >运动</g-tabs-item>
        </g-tabs-head>
        <g-tabs-body>
            <g-tabs-panel name="study">学习相关资讯</g-tabs-panel>
            <g-tabs-panel name="thinking">思考相关资讯</g-tabs-panel>
            <g-tabs-panel name="sports">运动相关资讯</g-tabs-panel>
        </g-tabs-body>
    </g-tabs>
        `
        let vm = new Vue({
            el: div
        })
        setTimeout(()=>{
            let x= vm.$el.querySelector(`.tabs-item[data-name="sports"]`)
            expect(x.classList.contains('active')).to.be.true
            done()
        },1000)
    })
    xit('接收direction',()=> {})
})