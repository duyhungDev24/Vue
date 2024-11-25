import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', component: () => import('../components/Layouts/LayoutClient/LayoutClient.vue'), children: [
      {path: '/home', component: () => import('../components/Layouts/LayoutClient/Pages/HomePage.vue')},
    ]},
  ]
})

export default router
