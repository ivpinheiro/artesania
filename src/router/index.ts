import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import LoginPage from '@/views/LoginPage.vue'
import DashboardPage from '@/views/DashboardPage.vue'
import OrderAgreementPage from '@/views/OrderAgreementPage.vue'
import SignPage from '@/views/SignInPage.vue'
import ArtistsGallery from '@/views/ArtistsGallery.vue'
import PaymentPage from '@/views/PaymentPage.vue'
import ProductPage from '@/views/ProductPage.vue'
import ConfirmPaymentPage from '@/views/ConfirmPaymentPage.vue'
import NegotiationChat from '@/views/NegotiationChat.vue'
import OrderPage from '@/views/OrderPage.vue'
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
        breadcrumb: 'Mira Morani  /  Meu Painel',
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
    },
    {
      path: '/products/view/:productId',
      name: 'ProductPage',
      component: ProductPage,
      meta: {
        breadcrumb: 'Obra'
      }
    },
    {
      path: '/confirmPayment',
      name: 'confirmPayment',
      component: ConfirmPaymentPage,
    },
    {
      path: '/chat',
      name: 'NegotiationChat',
      component: NegotiationChat,
      meta: {
        breadcrumb: 'Chat'
      }
    }, 
    {
      path: '/dashboard/encomenda',
      name: 'OrderAgreement',
      component: OrderAgreementPage,
      meta: {
        breadcrumb: 'Pedidos / Encomenda Nº123'
      }
    },
    {
      path: '/orderPage',
      name: 'OrderPage',
      component: OrderPage,
      meta: {
        breadcrumb: 'Pedidos / Encomenda'
      }

    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // sempre rolar para o topo quando mudar de rota
    return { top: 0 }
  }
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
