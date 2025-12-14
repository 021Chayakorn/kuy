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
     {
      path: '/officer', name: 'officer',  component: () => import('../components/officer/OfficerView.vue'),
      children: [
{
          path: '/quiz', name: 'quiz',  component: () => import('../components/officer/CreateQuiz.vue'),
},
{
          path: '/topic', name: 'topic',  component: () => import('../components/officer/CreateTopic.vue'),
},
{
          path: '/role', name: 'role',  component: () => import('../components/officer/MatchUser.vue'),
},
{
          path: '/report', name: 'report',  component: () => import('../components/officer/ReportView.vue'),
},
{
          path: '/match', name: 'match',  component: () => import('../components/officer/RoleUser.vue'),
},
{
            path: '/time', name: 'time',  component: () => import('../components/officer/TimeSide.vue'),

}
      ]
    },
     {
      path: '/boss', name: 'boss',  component: () => import('../components/BossViews.vue'),
    },
     {
      path: '/user', name: 'user',  component: () => import('../components/UserViews.vue'),
    },
  ],
})

export default router
