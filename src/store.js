import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        data: null
    },
    mutations:{
        changeData(state, payload){
            state.data = payload
        }

    },
    actions:{
        //imitation of request on serve
        downloadData(context){
            function dataPromise(){
                return new Promise((resolve => {
                    const data = ()=> import('./database')
                    if(data) resolve(data())
                }))
            }
            function  delay(time) {
                return new Promise(resolve => {
                    setTimeout(resolve, time)
                })

            }

            dataPromise()
                .then(()=> delay(1000))
                .then(()=>console.log('Getting data...'))
                .then(()=> delay(1000))
                .then(()=>dataPromise())
                .then(x => {
                    return {
                        cards: x.bonuses,
                        header: x.header
                    }
                })
                .then(data => context.commit('changeData', data))





            

        }
    }
})
