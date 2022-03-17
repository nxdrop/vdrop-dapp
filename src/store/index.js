import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import web3 from './modules/web3'
import wallet from './modules/wallet'

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
    wal: wallet,
  },
  strict: process.env.NODE_ENV !== 'production',
})
