import * as types from './mutation-types'

/**
 *
 * @param {*} param0
 * @param {*} state
 */
export const setWalletState = ({ commit }, state = {}) => {
  commit(types.UPD_WALLET_BASE_STATE, state)
}
