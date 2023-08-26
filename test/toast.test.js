import sinon from "sinon";

const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
    it('存在.', () => {
        expect(Toast).to.be.ok
    })
    describe('props', function(){
        it('接收 autoClose', (done)=> {
            let div = document.createElement('div')
            document.body.appendChild(div)
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    autoClose: 1
                }
            }).$mount(div)
            setTimeout(()=>{
                expect(document.body.contains(vm.$el)).to.equal(false)
                done()
            },1500)
        })
        it('接受 closeButton', (done) => {
            const callback = sinon.fake();
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    closeButton: {
                        text: '关闭吧',
                        callback,
                    },
                }
            }).$mount()
            let closeButton = vm.$el.querySelector('.close')
            expect(closeButton.textContent.trim()).to.eq('关闭吧')
            setTimeout(()=> {
                closeButton.click()
                expect(callback).to.have.been.called
                done()
            }, 200)
        })
        it('接受enableHtml', ()=> {
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    enableHtml: true
                }
            })
            vm.$slots.default = ['<strong id="hello">hello</strong>']
                vm.$mount()
            let strong = vm.$el.querySelector("#hello")
            expect(strong).to.be.exist
        })
        it('接收position', ()=> {
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    position: 'middle'
                }
            }).$mount()
            expect(vm.$el.classList.contains('position-middle')).to.equal(true)
        })
    })
})