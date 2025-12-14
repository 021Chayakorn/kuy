import { createRouter, createWebHistory } from 'vue-router'
import OverView from '@/views/OverView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  {
      path: '/',
      name: 'overview',
      component: OverView,
    },
  {
      path: '/reg', name: 'reg',  component: () => import('../views/RegView.vue'),
    },
     {
      path: '/login', name: 'login',  component: () => import('../views/LoginView.vue'),
    },
  ],
})

export default router
