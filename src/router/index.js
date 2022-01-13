import { createRouter, createWebHashHistory } from 'vue-router'

import store from '@/store'

import Home from '../views/Home.vue'
import newPage from '../views/newpage.vue'
import Portfolio from '../views/portfolio.vue'
import Contact from '../views/contact.vue'
import monCompte from '../views/dashboard.vue'
import Shop from '../views/Shop-informatique.vue'
import Compare from '../views/Compare.vue'
import Wishlist from '../views/Wishlist.vue'
import Cart from '../views/Cart.vue'
import Caisse from '../views/Caisse.vue'
import Register from '../views/Register.vue'
import Login from '../views/auth/login.vue'
import DetailProduit from '../views/Detail-produit.vue'
import OrderDetail from '../views/order-detail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: true 
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio
  },
  {
    path: '/newpage/:nom',
    name: 'newpage',
    component: newPage
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/shop/:slug',
    name: 'Shop-informatique',
    component: Shop,
    props: true, 
    beforeRouteUpdate(to, from, next) {
      // called when the route that renders this component has changed.
      // This component being reused (by using an explicit `key`) in the new route or not doesn't change anything.
      // For example, for a route with dynamic params `/foo/:id`, when we
      // navigate between `/foo/1` and `/foo/2`, the same `Foo` component instance
      // will be reused (unless you provided a `key` to `<router-view>`), and this hook will be called when that happens.
      // has access to `this` component instance.
      next('/shop/:slug')
    },
  },
  {
    path: '/compare-produits',
    name: 'Compare',
    component: Compare
  },
  {
    path: '/liste-de-souhaits',
    name: 'Wishlist',
    component: Wishlist
  },
  {
    path: '/panier',
    name: 'Cart',
    component: Cart,
    props: true ,
    beforeEnter: (to, from, next) => {
      console.log(store.state.token)
      if (store.state.token) {
        next()
      }else{
        next('/')
      }
    }
  },
  {
    path: '/:id/order-details',
    name: 'order-detais',
    component: OrderDetail
  },
  {
    path: '/caisse',
    name: 'Caisse',
    component: Caisse,
    beforeEnter: (to, from, next) => {
      console.log(store.state.token)
      if (store.state.token) {
        next()
      }else{
        next('/')
      }
    }
  },
  {
    path: '/mon-compte',
    name: 'myaccount',
    component: monCompte,
    beforeEnter: (to, from, next) => {
      console.log(store.state.token)
      if (store.state.token) {
        next()
      }else{
        next('/')
      }
    }
  },
  {
    path: '/inscription',
    name: 'Register',
    component: Register
  },
  {
    path: '/connexion',
    name: 'Login',
    component: Login
  },
  {
    path: '/:id/detail-produit',
    name: 'Detail-produit',
    component: DetailProduit
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
