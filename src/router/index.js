import { createRouter, createWebHistory } from 'vue-router'

import store from '@/store'

import Home from '../views/Home.vue'
import PageNotFound from '../views/NotFound.vue'
import RecoveryPassword from '../views/auth/recoveryPassword.vue'
import RecoveryPasswordLink from '../views/auth/recoveryPasswordlink.vue'
import ActivateAccount from '../views/auth/activate.vue'
import newPage from '../views/newpage.vue'
import Portfolio from '../views/portfolio.vue'
import Contact from '../views/contact.vue'
import monCompte from '../views/dashboard.vue'
import Shop from '../views/Shop-informatique.vue'
import Compare from '../views/Compare.vue'
import Wishlist from '../views/Wishlist.vue'
import Cart from '../views/Cart.vue'
import Caisse from '../views/Caisse.vue'
import Register from '../views/auth/Register.vue'
import Login from '../views/auth/login.vue'
import DetailProduit from '../views/Detail-produit.vue'
import OrderDetail from '../views/order-detail.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        props: true
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'PageNotFound',
        component: PageNotFound,
    },
    {
        path: '/recovery-password',
        name: 'RecoveryPassword',
        component: RecoveryPassword,
    },
    {
        path: '/activate-account/:email/:token',
        name: 'ActivateAccount',
        component: ActivateAccount,
    },
    {
        path: '/recovery-password/:email/:token',
        name: 'RecoveryPasswordlink',
        component: RecoveryPasswordLink,
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
        props: true,
        beforeEnter: (to, from, next) => {
            if (store.state.token) {
                next()
            } else {
                next({
                    path: '/connexion',
                    query: { redirect: to.fullPath }
                })
            }
        }
    },
    {
        path: '/:id/order-details',
        name: 'order-detais',
        component: OrderDetail,
        beforeEnter: (to, from, next) => {
            if (store.state.token) {
                next()
            } else {
                next({
                    path: '/connexion',
                    query: { redirect: to.fullPath }
                })
            }
        }
    },
    {
        path: '/caisse',
        name: 'Caisse',
        component: Caisse,
        beforeEnter: (to, from, next) => {
            if (store.state.token) {
                next()
            } else {
                next({
                    path: '/connexion',
                    query: { redirect: to.fullPath }
                })
            }
        }
    },
    {
        path: '/mon-compte',
        name: 'myaccount',
        component: monCompte,
        beforeEnter: (to, from, next) => {
            if (store.state.token) {
                next()
            } else {
                next({
                    path: '/connexion',
                    query: { redirect: to.fullPath }
                })
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
        component: Login,
        beforeEnter: (to, from, next) => {
            if (store.state.token) {
                next('/')
            } else {
                next()
            }
        }
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
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router