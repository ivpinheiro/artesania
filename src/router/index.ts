import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import LoginPage from '@/views/LoginPage.vue'
import DashboardPage from '@/views/DashboardPage.vue'
import SignPage from '@/views/SignInPage.vue'
import ArtistsGallery from '@/views/ArtistsGallery.vue'
import PaymentPage from '@/views/PaymentPage.vue'
import { authMiddleWare } from '@/middlewares/AuthMiddleWare'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: {
        breadcrumb: 'Página Inicial'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
      meta: {
        breadcrumb: 'Login'
      }
    },
    {
      path: '/sign',
      name: '/sign',
      component: SignPage,
      meta: {
        breadcrumb: 'Cadastre-se'
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardPage,
      meta: {
        breadcrumb: 'Painel',
        middleware: authMiddleWare.oauthMiddleWare
      }
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: ArtistsGallery,
      meta: {
        breadcrumb: 'Galeria'
      }
    },
    {
      path: '/payment',
      name: 'payment',
      component: PaymentPage,
      meta: {
        breadcrumb: 'Pagamento'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const middleware = to.meta.middleware
  if (middleware && typeof middleware === 'function') {
    middleware(to, from, next)
  } else {
    next()
  }
});

export default router
