import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ElementManager from '../views/ElementManager.vue'
import AddElement from '../views/AddElement.vue'
import EditElement from '../views/EditElement.vue'
import ViewElement from '../views/ViewElement.vue'
import PageNotFound from '../views/PageNotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/elements',
    name: 'ElementManager',
    component: ElementManager
  },
  {
    path: '/elements/add',
    name: 'AddElement',
    component: AddElement
  },
  {
    path: '/elements/edit/:elementId',
    name: 'EditElement',
    component: EditElement
  },
  {
    path: '/elements/view/:elementId',
    name: 'ViewElement',
    component: ViewElement
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: PageNotFound
  }  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
