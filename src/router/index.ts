import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'RankingView',
    component: () => import('../views/ranking/index.vue')
  },
  {
    path: '/matches',
    name: 'MatchesView',
    component: () => import('../views/matches/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
