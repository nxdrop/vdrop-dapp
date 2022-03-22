import * as types from './mutation-types'

export default {
  [types.UPD_DROP_LIST](state, list) {
    state.drops = list || []
  },
}
