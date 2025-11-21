import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/pyxis/reports/gerencial-tmt',
      name: 'gerencialTmt',
      component: () =>
        import('../modules/operacao/reports/gerencialTmt/pages/GerencialTmtView.vue'),
    },
    {
      path: '/pyxis/components',
      name: 'components',
      component: () => import('../shared/components/ComponentsPage.vue'),
    },
  ],
})

export default router
