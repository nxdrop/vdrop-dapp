import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import web3 from './modules/web3'

export default new Vuex.Store({
  state: {
    metaTitle: 'MetaDrops',
  },
  getters: {
    metaTitle: (state) => state.metaTitle,
  },
  mutations: {},
  actions: {},
  modules: {
    web3,
  },
  strict: process.env.NODE_ENV !== 'production',
})
