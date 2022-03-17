import * as types from './mutation-types'

export default {
  /**
   *
   * @param {*} state
   * @param {*} walletState
   */
  [types.UPD_WALLET_BASE_STATE](state, walletState = {}) {
    const { selectedAddress, chainId } = walletState

    state.chainId = chainId
    selectedAddress && (state.selectedAddress = selectedAddress)
    console.log('>>>>>>>>>>UPD_WALLET_BASE_STATE>>>>>>>>>>>>>>>>>>>>>>', state)
  },
  [types.SET_CHAINID](state, chainId = 0x0) {
    state = state.chainId = typeof chainId !== 'number' ? parseInt(chainId) : chainId
  },
}
