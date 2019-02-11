import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    permissionRouters: []
  },
  getters: {
    permission_routers (state) {
      return state.permissionRouters
    }
  },
  mutations: {
    SET_PERMISSION_ROUTERS: (state, routers) => {
      state.permissionRouters = routers
    }
  },
  actions: {

  }
})
