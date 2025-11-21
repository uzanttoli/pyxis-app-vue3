import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../../pages/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    // {
    //   path: '/pyxis/gerencial/tmt',
    //   name: 'gerencialTmt',
    //   component:()=> import('../../')
    // }
    // {
    //   path: '/pyxis/utilitarios',
    //   name: 'utilitarios',
    //   component: () => import('../../')
    // },
  ],
})

export default router
