import api from '@/biz/api'
import * as types from './mutation-types'

export const loadDropList = async ({ commit }) => {
  const resp = await api('drop.list')
  const { code, msg, data } = resp
  if (code === 0 && data && data.length) {
    let drops = data.reduce((prev, curr) => {
      const { name, description, dropTotal, logoUri, officalSite } = curr.info
      let d = { ...d, name, description, dropTotal, logoUri, officalSite, dropid: parseInt(curr.dropid) }
      prev = prev.concat([d])
      return prev
    }, [])
    // console.log(drops, data)
    commit(types.UPD_DROP_LIST, drops)
  } else {
    throw new Error(msg || 'no drops')
  }
}
