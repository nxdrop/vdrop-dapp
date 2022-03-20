import Vue from 'vue'
import App from './App.vue'
import router from './router'
import api from './biz/api'
import store from './store'
import vuetify from './plugins/vuetify'
// import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import Toast from './meta-ui/toast'

Vue.use(Toast)

Vue.config.productionTip = false
Vue.prototype.$api = api

store.dispatch('web3/checkMetaMask')

const dapp = new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app')

if (process.env.NODE_ENV === 'development') {
  global.nxdrop = dapp
  console.log('>>>>>>>>>>>>>>>>>>dpp>', dapp.$toast)
}
