const salt = 'Meta_drop_regist'

export async function signByPersonal(web3js, options = {}) {
  const { selectedAddress, email, tiwtter = '', discord = '' } = options
  if (!selectedAddress) throw new Error('miss selected address')
  if (!email) throw new Error('Miss email.')
  const params = buildSignParams(selectedAddress, email, tiwtter, discord)
  // const keccakPack = web3js.utils.keccak256(params)
  const signedData = await web3js.eth.personal.sign(params, selectedAddress)

  return {
    params,
    signedData,
  }
}

export function buildSignParams(userAddress, email, tiwtter = '', discord = '') {
  const ts = new Date().getTime() / 1000
  return {
    userAddress,
    ts,
    email,
    tiwtter,
    discord,
  }
}
