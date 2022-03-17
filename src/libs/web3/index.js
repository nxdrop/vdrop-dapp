import Web3 from 'web3'

export const checkEvmProvider = () => {
  if (!window.ethereum || !window.ethereum.isMetaMask) throw new Error('Your browser enviroment unfound Metamask.')
  return window.ethereum
}

export const getWeb3js = (ethereum) => {
  if (!ethereum && !window.ethereum) throw new Error('Miss ethereum.')
  return new Web3(ethereum || window.ethereum)
}
