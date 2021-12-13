import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

    state: {
        user: null,
        token: null,
        loading: false,

        // 数据
        category: [ ]
    },
    mutations: {
        
        saveLogin(state, v) {
            state.token = v.jwt
            state.user = v.user

            console.log('saveLogin =', v.jwt)
        },
        saveLoading(state, v) {
            state.loading = v
        },

        saveCategory(state, v) {
            state.category = v
        }
    },
    getters: { 
        
        checkToken(state) {
            let res = false

                const token = localStorage.getItem('oils_token')
                
                if ((token == undefined) || (token == '') || (token == null) || (token == 'undefined')) {
                    res = true
                } else {
                    state.token = token
                    
                    console.log('token = ', token.substring(0, 15) + '...')
                }
    
            try{

            } catch(e) {

            }
            
            return v => {
              return res
            }
        },
    },
    modules: {

    }
})