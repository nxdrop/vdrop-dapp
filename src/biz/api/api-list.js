/**
 * Finger move
 * blindbox
 */
// const blind = {
//   paytoken: {
//     list: {
//       url: '/blind/paytoken/list',
//       method: 'post',
//     },
//   },
//   box: {
//     list: {
//       url: '/blind/box/list',
//       method: 'post',
//     },
//     detail: {
//       url: '/blind/box/detail',
//       method: 'post',
//     },
//     nfts: {
//       url: '/blind/box/nfts',
//       method: 'post',
//     },
//     history: {
//       url: '/blind/box/history',
//       method: 'post',
//     },
//   },
//   order: {
//     get: {
//       url: '/blind/order/get',
//       method: 'post',
//     },
//     prepare: {
//       url: '/blind/order/prepare',
//       method: 'post',
//     },
//     buyfee: {
//       url: '/blind/order/buyfee',
//       method: 'post',
//     },
//     listbyboxid: {
//       url: '/blind/order/listbyboxid',
//       method: 'post',
//     },
//   },
//   prize: {
//     list: {
//       url: '/blind/prize/list',
//       method: 'post',
//     },
//     all: {
//       url: '/blind/prize/all',
//       method: 'post',
//     },
//   },
//   type: {
//     list: {
//       url: '/blind/type/list',
//       method: 'post',
//     },
//     all: {
//       url: '/blind/type/all',
//       method: 'post',
//     },
//   },
// }

/**
 *
 */
const user = {
  sendcode: {
    url: 'user/sendcode',
    method: 'post',
  },
  loginWithMail: {
    url: '/user/mailLogin',
    method: 'post',
  },
  registWithMail: {
    url: '/user/registerNext',
    method: 'post',
  },
}

const allApis = {
  user,
}

export default flatObjectApi(allApis)

function flatObjectApi(_allApis) {
  let flatApis = {}
  let outKeys = Object.keys(_allApis)
  for (let i = 0; i < outKeys.length; i++) {
    let keys = []
    let key = outKeys[i]
    let obj = _allApis[key]

    flatRecursive(key, obj, keys, flatApis)
  }

  return flatApis

  function flatRecursive(key, obj, keys = [], flatApis = {}) {
    if (typeof obj === 'object' && Object.prototype.hasOwnProperty.call(obj, 'url')) {
      let apiData = {
        url: obj['url'],
        method: typeof obj['method'] === 'string' ? obj['method'] : 'get',
      }
      keys = keys.concat([key])

      let flatkey = keys.join('.')
      flatApis[flatkey] = apiData
    } else if (typeof obj === 'object' && !Object.prototype.hasOwnProperty.call(obj, 'url')) {
      let _subkeys = Object.keys(obj)
      for (let j = 0; j < _subkeys.length; j++) {
        const _k = _subkeys[j]
        const _o = obj[_k]
        const _flatkeys = [].concat(keys).concat([key])
        flatRecursive(_k, _o, _flatkeys, flatApis)
      }
    }
  }
}
