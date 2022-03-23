import axios from 'axios'

import { HEADER_TOKEN_KEY } from '../config'
const META_PREVIOUS = '/meta'

const service = axios.create({
  baseURL: META_PREVIOUS,
  timeout: 50000,
  transformResponse: [
    function (data) {
      try {
        let _d = JSON.parse(data)
        _d.errcode = _d.errno
        delete _d.errno
        return JSON.stringify(_d)
      } catch (_) {
        return data
      }
    },
  ],
})

/**
 * request
 */
service.interceptors.request.use(
  (config) => {
    if (!config.headers[HEADER_TOKEN_KEY]) {
      config.headers[HEADER_TOKEN_KEY] = `${window.localStorage.getItem('Authorization') || ''}`
    }

    // console.log('>>>>data>>>config>>>>>>>', config)

    return config
  },
  (err) => Promise.reject(err)
)

service.interceptors.response.use(
  (response) => {
    let { data } = response

    if (typeof data === 'string') {
      try {
        data = JSON.parse(data)
      } catch (ex) {
        console.log('API handler json fail :', ex)
      }
    }
    return data
  },
  (err) => {
    throw new Error(err)
  }
)

export default service
