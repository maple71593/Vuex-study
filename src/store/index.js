import Vue from 'vue'
import Vuex from 'vuex'
import setting from './modules/setting'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: '來亂的',
    count: 100
  },
  getters: {
  },
  mutations: {
    addn (state, obj) {
      state.count += obj.nbr
      console.log(obj)
    },
    changenbr (state, nbr) {
      state.count = nbr
    }

  },
  actions: {
    ChangeAsync (context, num) {
      setTimeout(() => {
        context.commit('changenbr', num)
      }, 2000)
    }
  },
  modules: {
    setting,
    user
  }
})
