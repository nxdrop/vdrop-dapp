import qs from 'qs'
import request from './http-request'
import allApiList from './api-list'

const META_PREVIOUS = '/meta'

/**
 *
 * @param {string} apikey like user.sendcode
 * @param {object} data
 * @returns promise
 */
export default function api(apikey, data = {}) {
  if (!allApiList[apikey]) {
    throw new Error(`Apikey ${apikey} undefined`)
  }

  let method = allApiList[apikey].method

  let url = /^(\/).*/.test(allApiList[apikey].url)
    ? `${META_PREVIOUS}${allApiList[apikey].url}`
    : `${META_PREVIOUS}/${allApiList[apikey].url}`
  let req = {
    url,
    method,
  }

  if (apikey == 'storage.upload' || apikey === 'storage.multiupload') {
    req.headers = { 'Content-Type': 'multipart/form-data' }
    req.data = data
  } else if (apikey === 'log.info') {
    req.data = data
  } else {
    req.data = method.toLowerCase() === 'post' ? qs.stringify(data) : data
  }

  return request(req)
}
