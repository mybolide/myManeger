import Vue from 'vue'
import store from '@/store'
import Router from 'vue-router'
import Layout from '@/views/Layout/index.vue'
import nginx from './modules/nginx'

const assetsRouter = [
  {
    path: '/',
    name: 'index',
    component: Layout,
    redirect: '/home',
    meta: { title: '首页' },
    children: [{
      path: 'home',
      name: 'home',
      component: () => import('@/views/Home/index.vue'),
      meta: { title: '欢迎页' }
    }]
  },
  nginx
]
store.commit('SET_PERMISSION_ROUTERS', assetsRouter)
export default new Router({
  mode: 'history',
  routes: assetsRouter
})
