import * as actions from './actions'
import mutations from './mutations'
import * as getters from './getters'

export default {
  namespaced: true,
  state: {
    hasMetamask: false,
  },
  mutations,
  getters: {
    metamaskInjected: (state) => Boolean(state.hasMetamask),
    ...getters,
  },
  actions,
}
