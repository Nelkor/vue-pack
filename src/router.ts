import {
  RouteRecordRaw,
  createRouter,
  createWebHistory,
} from 'vue-router'

import Example from '@/views/Example.vue'

const routes: RouteRecordRaw[] = [
  {
    name: 'root',
    path: '/',
    component: Example,
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
})

export default router
