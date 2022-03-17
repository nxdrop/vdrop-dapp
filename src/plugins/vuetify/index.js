import Vue from 'vue'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdi', // 默认值 - 仅用于展示目的
  },
  theme: {
    themes: {
      light: {
        primary: '#3772ff',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
      },
    },
  },
})
