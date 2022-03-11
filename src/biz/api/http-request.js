import axios from 'axios'

import { HEADER_TOKEN_KEY } from '../../libs/frame-config'

const service = axios.create({
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

    return config
  },
  (err) => Promise.reject(err)
)

export default service
