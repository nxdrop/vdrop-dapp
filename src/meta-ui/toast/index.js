import vue from 'vue'

import MetaToast from './MetaToast.vue'

const ToastConstructor = vue.extend(MetaToast)

function showToast(message, type = 'normal', duration = 5000, cb) {
  const _toast = new ToastConstructor({
    data() {
      return {
        showToast: true,
        type: type,
        message: message,
        duration: duration,
      }
    },
  })

  let $vm = _toast.$mount().$el
  document.body.appendChild($vm)

  setTimeout(() => {
    _toast.showToast = false
    if (typeof cb === 'function') {
      cb()
    }
  }, duration)
}

showToast.install = (Vue) => {
  Vue.prototype.$toast = showToast
}

export default showToast
