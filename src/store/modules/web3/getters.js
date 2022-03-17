export const hasConnected = (state, getters, rootState) => {
  const {
    wal: { selectedAddress, chainId },
  } = rootState
  console.log('>>>>>hasConnected>>>>>>>>>>>>>>>>>>>>>>>', selectedAddress, chainId, rootState)

  return selectedAddress && chainId > 0
}
