import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

export default {
  namespaced: true,
  state: {
    chainId: 0x0,
    currentWalletType: null,
    selectedAddress: '',
  },
  mutations,
  getters: {
    ...getters,
  },
  actions,
}