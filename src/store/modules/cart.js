import axios from 'axios'
export default {
  namespaced: true,
  state () {
    return {
      list: []
    }
  },
  getters: {
    total (state) {
      return state.list.reduce((sum, item) => sum + item.count, 0)
    },
    totalprice (state) {
      return state.list.reduce((sum, item) => sum + item.count * item.price, 0)
    }
  },
  mutations: {
    DataUpList (state, Newlist) {
      state.list = Newlist
    },
    DataUpList2 (state, obj) {
      const goods = state.list.find(item => item.id === obj.id)
      goods.count = obj.Newcount
    }
  },
  actions: {
    async GetNewList (context) {
      const res = await axios.get('http://localhost:3000/cart')
      context.commit('DataUpList', res.data)
    },
    async DataUpNewList (context, obj) {
      await axios.patch(`http://localhost:3000/cart/${obj.ID}`, {
        count: obj.Newcount
      })
      context.commit('DataUpList2', {
        id: obj.ID,
        Newcount: obj.Newcount
      })
    }
  }
}
