module.exports = {
  publicPath: '/',
  chainWebpack: config => {
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
  },
  configureWebpack: {
    externals: {
      vue: 'Vue',
      axios: 'axios',
      vuex: 'Vuex',
      'vue-router': 'VueRouter',
      'element-ui': 'ELEMENT'
    }
  }
}
