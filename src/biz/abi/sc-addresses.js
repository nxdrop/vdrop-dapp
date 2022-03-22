/*********************************************************************
 * AircraftClass :: MetaDrops
 *		@description:
 *		@description:
 * WARNINGS:
 *
 * HISTORY:
 *		@author: lanbery@gmail.com
 *		@created:  2022-03-14
 *		@comments:
 **********************************************************************/

export const SC_DROP_NFT_KEY = 'DropsNFT721'

import { POLYGON_MUMBAI_ID, BSC_MAINNET_CHAIN_ID } from '@lib/networks/evm-standard-networks'

const MUNBAI_SC_ADDRESSES = {
  [SC_DROP_NFT_KEY]: '0x9d74bfDa1b213a4D7fDC7d8a60fF5E7Dd263A32D',
}

export const BSC_MAIN_ADDRESSES = {
  [SC_DROP_NFT_KEY]: '0x9d74bfDa1b213a4D7fDC7d8a60fF5E7Dd263A32D',
}

export const allContractAddresses = {
  [POLYGON_MUMBAI_ID]: MUNBAI_SC_ADDRESSES,
  [BSC_MAINNET_CHAIN_ID]: BSC_MAIN_ADDRESSES,
}

/**
 *
 * @param {number} chainId
 * @param {string} contractName
 * @returns
 */
export const getContractAddress = (chainId, contractName) => {
  if (!allContractAddresses[parseInt(chainId)]) return ''
  return allContractAddresses[parseInt(chainId)][contractName] || ''
}

/**
 *
 * @param {string} contractName
 * @returns
 */
export const getMumbarContractAddress = (contractName) => {
  return MUNBAI_SC_ADDRESSES[contractName] || ''
}
