import { checkEvmProvider } from '..'

export const connectMetamask = async () => {
  try {
    const ethereum = checkEvmProvider()

    const accounts = await ethereum.request({ method: 'eth_requestAccounts' })

    const chainId = await ethereum.request({ method: 'eth_chainId' })

    return {
      selectedAddress: accounts[0],
      chainId: parseInt(chainId),
    }
  } catch (e) {
    throw e.code === 4009 ? new Error('User reject') : e
  }
}
