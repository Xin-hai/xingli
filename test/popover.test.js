const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/popover.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
    it('存在.', () => {
        expect(Popover).to.be.ok
    })
    it('接受 position.', (done) => {
       Vue.component('g-popover', Popover)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
         <g-popover position="left" ref="popover">
            <template v-slot:content>
                <div>我是内容</div>
            </template>
            <template v-slot:default>
                <button>点我</button>
            </template>
        </g-popover>
        `
        const vm = new Vue({
            el: div
        })
        vm.$nextTick(()=> {
            vm.$el.querySelector('button').click()
            vm.$nextTick(()=> {
                const popover = vm.$refs.popover
                expect(popover.$refs.contentWrapper.classList.contains('position-left')).to.be.true
                done()
            })
        })
    })
})