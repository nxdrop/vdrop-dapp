export const ETHEREUM_MAINNET_CHAIN = {
  chainId: 0x1,
  chainName: 'Ethereum Mainnet',
  nativeCurrency: {
    name: 'ETH',
    symbol: 'ETH',
    decimals: 18,
  },
  rpcUrls: [],
  blockExplorerUrls: ['https://etherscan.io'],
}

export const ETHEREUM_ROPSTEN_CHAIN = {
  chainId: 0x3,
  chainName: 'Ropsten Testnet',
  nativeCurrency: {
    name: 'ETH',
    symbol: 'ETH',
    decimals: 18,
  },
  rpcUrls: [],
  blockExplorerUrls: ['https://ropsten.etherscan.io'],
}

export const ETHEREUM_RINKEBY_CHAIN = {
  chainId: 0x4,
  chainName: 'Rinkeby Testnet',
  nativeCurrency: {
    name: 'ETH',
    symbol: 'ETH',
    decimals: 18,
  },
  rpcUrls: [],
  blockExplorerUrls: ['https://rinkeby.etherscan.io'],
}

export const ETHEREUM_GOERLI_CHAIN = {
  chainId: 0x5,
  chainName: 'Goerli Testnet',
  nativeCurrency: {
    name: 'ETH',
    symbol: 'ETH',
    decimals: 18,
  },
  rpcUrls: [],
  blockExplorerUrls: ['https://goerli.etherscan.io'],
}

export const ETHEREUM_KOVAN_CHAIN = {
  chainId: 0x2a,
  chainName: 'Kovan Testnet',
  nativeCurrency: {
    name: 'ETH',
    symbol: 'ETH',
    decimals: 18,
  },
  rpcUrls: [],
  blockExplorerUrls: ['https://kovan.etherscan.io'],
}

export const BSC_MAINNET_CHAIN = {
  chainId: 0x38,
  chainName: 'BSC Mainnet',
  nativeCurrency: {
    name: 'BNB',
    symbol: 'BNB',
    decimals: 18,
  },
  rpcUrls: ['https://bsc-dataseed.binance.org/'],
  blockExplorerUrls: ['https://bscscan.com'],
}

export const BSC_TESTNET_CHAIN = {
  chainId: 0x61,
  chainName: 'BSC Testnet',
  nativeCurrency: {
    name: 'BNB',
    symbol: 'BNB',
    decimals: 18,
  },
  rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
  blockExplorerUrls: ['https://testnet.bscscan.com'],
}

export const POLYGON_MAINNET = {
  chainId: 0x89,
  chainName: 'Matic Network',
  nativeCurrency: {
    name: 'MATIC',
    symbol: 'MATIC',
    decimals: 18,
  },
  rpcUrls: ['https://polygon-rpc.com/'],
  blockExplorerUrls: ['https://polygonscan.com/'],
}

export const POLYGON_MUMBAI = {
  chainId: 0x13881,
  chainName: 'Mumbai Testnet',
  nativeCurrency: {
    name: 'MATIC',
    symbol: 'MATIC',
    decimals: 18,
  },
  rpcUrls: ['https://rpc-mumbai.maticvigil.com/'],
  blockExplorerUrls: ['https://mumbai.polygonscan.com/'],
}
