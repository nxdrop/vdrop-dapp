import { compressAddress } from '@lib/web3/address-util'

export const currentChain = (state, getters, rootState) => {
  console.log('>>>>>>>>>>>>>>>>>>>>', state, getters, rootState)
}

export const shortAddress = (state) => {
  const { selectedAddress = '' } = state
  return compressAddress(selectedAddress)
}

export const walletConnected = (state) => {
  return !!state.selectedAddress
}
