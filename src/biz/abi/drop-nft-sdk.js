/*********************************************************************
 * AircraftClass :: MetaDrop V2
 *		@description:
 *		@description:
 * WARNINGS:
 *
 * HISTORY:
 *		@author: lanbery@gmail.com
 *		@created:  2022-03-16
 *		@comments:
 **********************************************************************/

import { POLYGON_MUMBAI_ID as defChainId } from '@lib/networks/evm-standard-networks'
import { getDropNFTABI } from './json'
import { getContractAddress, SC_DROP_NFT_KEY } from './sc-addresses'

/**
 *
 * @param {*} web3js
 * @param {*} chainId
 */
export const DropNFTInstance = (web3js, chainId = defChainId) => {
  const abi = getDropNFTABI()
  const contractAddress = getContractAddress(chainId, SC_DROP_NFT_KEY)
  if (!contractAddress) throw new Error(`Unset contract[${SC_DROP_NFT_KEY}] address at chain [${chainId}]`)

  return new web3js.eth.Contract(abi, contractAddress)
}

export const getDropBaseInfo = async (web3js, chainId) => {
  const inst = DropNFTInstance(web3js, chainId)
  const baseUri = await inst.methods.baseURI().call()
  const dropLength = await inst.methods.dropslength().call()
  return {
    baseUri,
    dropLength,
  }
}

export const getNFTBalance = async (web3js, address) => {}

/**
 *
 * @param {object} web3js
 * @param {object} params
 * @property {number} dropId
 * @property {number} tokenId
 * @property {arrasy} proof
 */
export const claimNFT = async (web3js, params = {}) => {
  const { dropid, tokenId, proof, chainId, selectedAddress } = params

  if (typeof dropid !== 'number' || !proof || !proof.length) throw new Error('miss dropid or proof')

  const inst = await DropNFTInstance(web3js, chainId)

  const receipt = await inst.methods.claim(dropid, tokenId, proof).send({ from: selectedAddress })

  // todo toggler

  return receipt
}
