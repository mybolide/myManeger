import Layout from '@/views/Layout/index.vue'

export default {
  path: '/nginx',
  name: 'nginx',
  component: Layout,
  redirect: '/nginx/list',
  meta: { title: 'nginx管理' },
  children: [
    {
      path: 'list',
      name: 'nginxList',
      component: () => import('@/views/Nginx/list/index.vue'),
      meta: { title: '配置文件' }
    }
  ]
}
