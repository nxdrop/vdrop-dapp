/* eslint-disable no-unused-vars */
const isProd = process.env.NODE_ENV === 'production'

const { R, src } = require('./ci/paths')
console.log('>>>>>>>>>>PUBLIC_PATH>>>>>>>>>', process.env.PUBLIC_PATH)

module.exports = {
  publicPath: process.env.PUBLIC_PATH || '',
  productionSourceMap: isProd,
  transpileDependencies: ['vuetify'],
  devServer: {
    port: process.env.PORT || 37211,
    disableHostCheck: false,
    proxy: {
      '/meta': {
        changeOrigin: true,
        ws: true,
        target: 'http://192.168.81.170:20004',
        pathRewrite: {
          '^/meta': '/meta',
        },
      },
    },
  },
  lintOnSave: true,
  chainWebpack: (config) => {
    // config.plugin('VuetifyLoaderPlugin').tap((args) => [
    //   {
    //     match(originalTag, { kebaTag, camelTag, path, component }) {
    //       if (kebaTag.startsWith('core-')) {
    //         return [camelTag, `import ${camelTag} from '@/components/core/${camelTag.substring(4)}.vue'`]
    //       }
    //     },
    //   },
    // ])
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': '@/assets',
        '@biz': '@/biz',
        '@comp': '@/components',
        '@pages': '@/pages',
        '@ui': '@/meta-ui',
        '@lib': '@/libs',
        '@utils': '@/libs/utils',
        '@store': '@/store',
        '@mocks': '@/mocks',
        '@views': '@/views',
      },
    },
  },
}
