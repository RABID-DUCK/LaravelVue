import { createRouter, createWebHistory } from 'vue-router'
import Cart from '../views/Cart/Index.vue'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('../views/main/Index.vue')
    },
    {
      path: '/products',
      name: 'products.index',
      component: () => import('../views/product/Products.vue')
    },
    {
      path: '/products/:id',
      name: 'products.show',
      component: () => import('../views/product/Show.vue')
    },
    {
      path: '/cart',
      name: 'cart.index',
      component: Cart
    }
  ]
})

export default router
