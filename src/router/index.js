import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/productos',
    name: 'productos',
    component: () => import('../views/ProductosView.vue'),
    props: (route) => {
      return {
        nombre: "Desayunos",
        descripcion: "Contamos con desayunos nutritivos y deiciosos",
        precio: 2000,
        cantidad: "Para 2 personas"
      };
    }
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: () => import('../views/ContactoView.vue'),
    props: (route) => {
      return {
      nombre: "Chamo Olivares",
      email: "Elchamito@gmail.com"
    }
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
