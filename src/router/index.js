import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/ProductsView.vue')
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: () => import('../views/ContactoView.vue'),
    props: (route) => {
      return {
        nombre: "Chamo Olivares",
        email: "Elchamito@gmail.com"
      };
    }
  },
  {
    path: '/carrito',
    name: 'carrito',
    component: () => import('../views/CarritoView.vue')
  },

  {
    path: '/gracias',
    name: 'gracias',
    component: () => import('../views/GraciasView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
