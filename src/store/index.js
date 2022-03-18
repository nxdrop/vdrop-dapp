import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import web3 from './modules/web3'
import wallet from './modules/wallet'

const UPD_HEAD_SCROLL_OVER = 'theme@srcoll/toggle_theme'

export default new Vuex.Store({
  state: {
    vxsCls: 'd-none d-md-flex d-lg-none',
    metaTitle: 'MetaDrops',
    overHeadTheme: '',
  },
  getters: {
    getVxsCls: (state) => state.vxsCls,
    metaTitle: (state) => state.metaTitle,
    metaHeadOver: (state) => state.overHeadTheme || '',
  },
  mutations: {
    [UPD_HEAD_SCROLL_OVER](state, overCls = '') {
      state.overHeadTheme = overCls
    },
  },
  actions: {
    setOverCls({ commit }, overCls = '') {
      commit(UPD_HEAD_SCROLL_OVER, overCls)
    },
  },
  modules: {
    web3,
    wal: wallet,
  },
  strict: process.env.NODE_ENV !== 'production',
})
