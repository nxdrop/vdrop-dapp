import detectEthereumProvider from '@metamask/detect-provider'

import * as types from './mutation-types'

/**
 *
 * @param {*} param0
 * @param {*} hasMetamask
 */
export const checkMetaMask = async ({ commit }) => {
  try {
    const provider = await detectEthereumProvider()

    if (provider && provider.isMetaMask) {
      // commit(types.SET_ETHEREUM_PROVIDER, provider)
      commit(types.SET_METAMASK_INJECTED, true)
    }
  } catch (ex) {
    console.log('>>>>>>>>>>>checkMetaMask>>>>>>>>>>>>', ex)
  }
}

export const setMetamaskState = async ({ commit, dispatch }, hasMetamask = false) => {}
