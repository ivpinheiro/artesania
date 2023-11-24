import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import LoginPage from '@/views/LoginPage.vue'
import DashboardPage from '@/views/DashboardPage.vue'
import SignPage from '@/views/SignInPage.vue'
import ArtistsGallery from '@/views/ArtistsGallery.vue'
import PaymentPage from '@/views/PaymentPage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/sign',
      name: '/sign',
      component: SignPage
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardPage
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: ArtistsGallery
    },
    {
      path: '/payment',
      name: 'payment',
      component: PaymentPage
    }
  ]
})

export default router
