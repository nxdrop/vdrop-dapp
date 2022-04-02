export const nftsItems = (state) => {
  return state.nfts || []
}

export const getNftDetail = (state, id) => {
  const nfts = state.nfts || []
  const detail = nfts.find((d) => d.nftid === id || d.nftid === parseInt(id))
  return detail || {}
}
