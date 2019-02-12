import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Global from '@/utils/global'

import './components/index'

Vue.config.productionTip = false
Vue.prototype.GLOBAL = new Global()

new Vue({
  router,
  store,
  render: h => h(App),
  mounted () {
    // this.$router.push('/')
  }
}).$mount('#app')
