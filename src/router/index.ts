import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/start-screen-view/StartScreenView.vue')
    },
    {
      path: '/current-state',
      name: 'current-state',
      component: () => import('@/views/current-state-view/CurrentStateView.vue')
    },
    {
      path: '/wallet',
      name: 'wallet',
      component: () => import('@/views/wallet/WalletView.vue')
    },
    {
      path: '/wallet/new-card',
      name: 'new-card',
      component: () => import('@/views/new-card/NewCardsView.vue')
    },
    {
      path: '/wallet/cards',
      name: 'cards',
      component: () => import('@/views/cards/CardsView.vue')
    },
    {
      path: '/operation-log',
      name: 'operation-log',
      component: () => import('@/views/operation-log/OperationLogView.vue')
    }
  ]
})

export default router
