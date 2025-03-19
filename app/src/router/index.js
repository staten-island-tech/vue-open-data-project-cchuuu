import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/NameChart',
      name: 'Names',
      component: () => import('../views/NameChart.vue'),
    },
    {
      path: '/MaleChart',
      name: 'Male',
      component: () => import('../views/MaleChart.vue'),
    },
    {
      path: '/FemaleChart',
      name: 'Female',
      component: () => import('../views/FemaleChart.vue'),
    },
  ],
})

export default router
