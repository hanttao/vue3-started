import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    name: 'dashboard',
    path: '/',
    component: () => import('@/views/dashboard')
  }
]
export default createRouter({
  history: createWebHistory(),
  routes
})