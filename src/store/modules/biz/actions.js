import api from '@/biz/api'
import * as types from './mutation-types'

export const loadDropList = async ({ commit }) => {
  const resp = await api('drop.list')
  const { code, msg, data } = resp
  if (code === 0 && data && data.length) {
    let drops = data.reduce((prev, curr) => {
      const { nftMetadataStructure = [] } = curr
      const { name, description, dropTotal, logoUri, officalSite } = curr.info

      let nftInfo = {}
      if (nftMetadataStructure && nftMetadataStructure.length && typeof nftMetadataStructure[0].info === 'object') {
        nftInfo = { ...nftMetadataStructure[0].info }
      }
      let d = { ...d, name, description, dropTotal, logoUri, officalSite, dropid: parseInt(curr.dropid), nftInfo }
      prev = prev.concat([d])
      return prev
    }, [])
    // console.log(drops, data)
    commit(types.UPD_DROP_LIST, drops)
  } else {
    if (data && !data.length) throw new Error('No airdrops.')
    throw new Error(msg || 'no drops')
  }
}
