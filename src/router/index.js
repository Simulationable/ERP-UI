import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/signin',
      name: 'signin',
      component: () => import('@/views/SignInView.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/quotation',
      name: 'quotation',
      component: () => import('@/views/QuotationView.vue')
    },
    {
      path: '/createquotation',
      name: 'createquotation',
      component: () => import('@/views/CreateQuotation.vue')
    },
    {
      path: '/customer',
      name: 'customer',
      component: () => import('@/views/CustomerView.vue')
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('@/views/ProductView.vue')
    },
    {
      path: '/payment',
      name: 'payment',
      component: () => import('@/views/PaymentView.vue')
    },
    {
      path: '/account',
      name: 'account',
      component: () => import('@/views/AccountView.vue')
    },
    {
      path: '/business',
      name: 'business',
      component: () => import('@/views/BusinessView.vue')
    },
    {
      path: '/overview',
      name: 'overview',
      component: () => import('@/views/OverviewView.vue')
    },
    {
      path: '/manual',
      name: 'manual',
      component: () => import('@/views/ManualView.vue')
    }
  ]
})

export default router
