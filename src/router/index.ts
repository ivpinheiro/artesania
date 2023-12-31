import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import LoginPage from '@/views/LoginPage.vue'
import DashboardPage from '@/views/DashboardPage.vue'
import OrderAgreementPage from '@/views/OrderAgreementPage.vue'
import OrderAgreementConfirmationPage from '@/views/OrderAgreementConfirmationPage.vue'
import SignPage from '@/views/SignInPage.vue'
import ArtistsGallery from '@/views/ArtistsGallery.vue'
import ArtistsGalleryProfile from '@/views/ArtistsGalleryProfile.vue'
import PaymentPage from '@/views/PaymentPage.vue'
import ProductPage from '@/views/ProductPage.vue'
import ConfirmPaymentPage from '@/views/ConfirmPaymentPage.vue'
import NegotiationChat from '@/views/NegotiationChat.vue'
import OrderPage from '@/views/OrderPage.vue'
import OrderShipping from '@/views/OrderShipping.vue'
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
      name: 'sign-in',
      component: SignPage,
      meta: {
        breadcrumb: 'Cadastre-se'
      }
    },
    {
      path: '/dashboard/order',
      name: 'dashboard',
      component: DashboardPage,
      meta: {
        breadcrumb: 'Rafaela Oliveira  /  Meu Painel',
        middleware: authMiddleWare.oauthMiddleWare
      }
    },
    {
      path: '/gallery',
      name: 'gallery-art',
      component: ArtistsGallery,
      meta: {
        breadcrumb: 'Galeria'
      }
    },
    {
      path: '/gallery/artist/:artistId',
      name: 'gallery-art-artist',
      component: ArtistsGallery,
      meta: {
        breadcrumb: 'Galeria'
      }
    },
    {
      path: '/artists/gallery/profiles/independent',
      name: 'gallery-art-artist-independent',
      component: ArtistsGalleryProfile,
      meta: {
        breadcrumb: 'Artistas independentes'
      }
    },
    {
      path: '/artists/gallery/profiles',
      name: 'gallery-profile-artist',
      component: ArtistsGalleryProfile,
      meta: {
        breadcrumb: 'Galeria de perfis'
      }
    },
    {
      path: '/order/payment',
      name: 'payment',
      component: PaymentPage,
      meta: {
        breadcrumb: 'Pagamento'
      }
    },
    {
      path: '/products/view/:productId',
      name: 'product-page',
      component: ProductPage,
      meta: {
        breadcrumb: 'Obra'
      }
    },
    {
      path: '/order/payment/confirm',
      name: 'confirm-payment',
      component: ConfirmPaymentPage,
    },
    {
      path: '/order/shipping',
      name: 'order-shipping',
      component: OrderShipping,
    },
    {
      path: '/chat',
      name: 'negotiation-chat',
      component: NegotiationChat,
      meta: {
        breadcrumb: 'Rafaela Oliveira  /  Chat '
      }
    }, 
    {
      path: '/dashboard/order/agreement',
      name: 'order-agreement',
      component: OrderAgreementPage,
      meta: {
        breadcrumb: 'Pedidos / Encomenda Nº123'
      }
    },
    {
      path: '/order/page',
      name: 'order-page',
      component: OrderPage,
      meta: {
        breadcrumb: 'Pedidos / Encomenda'
      }

    },
    {
      path: '/dashboard/confirmation',
      name: 'order-agreement-confirmation-page',
      component: OrderAgreementConfirmationPage,
      meta: {
        breadcrumb: 'Rafaela Oliveira  /  Meu Painel '
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
