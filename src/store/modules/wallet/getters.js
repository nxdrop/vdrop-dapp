import { compressAddress } from '@lib/web3/address-util'

export const shortAddress = (state) => {
  const { selectedAddress = '' } = state
  return compressAddress(selectedAddress)
}

export const walletConnected = (state) => {
  return !!state.selectedAddress
}

export const hasUserRegist = (state) => {
  const { address, email, tiwtter, discord } = state.userInfo

  return address && (email || tiwtter || discord)
}
