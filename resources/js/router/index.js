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
    },
      {
          path: '/register',
          name: 'Auth.Register',
          component: () => import('../views/Auth/Register.vue')
      },
      {
          path: '/login',
          name: 'Auth.Login',
          component: () => import('../views/Auth/Login.vue')
      },
      {
          path: '/myAccount',
          name: 'Auth.MyAccount',
          component: () => import('../views/Auth/My-Account.vue')
      },
      {
          path: '/favourites',
          name: 'products.favourites',
          component: () => import('../views/product/Favourites.vue')
      },
      {
          path: '/:catchAll(.*)',
          name: '404',
          component: () => import('../views/Error.vue')
      }
  ]
})

export default router
