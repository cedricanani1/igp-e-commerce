import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
    state: {
        // baseUrl: 'http://192.168.1.11:8002/Products/', 
        baseUrl: 'https://igp-backend-ecommerce.lce-ci.com/public/',
        panier: [],
        totaux: 0,
        liste_souhait: [],
        liste_comparaison: [],
        token: localStorage.getItem('token') || null
    },
    mutations: {
        addtocart(state) {
            state.cart = state.cart = 1
        },

        /* Panier */

        /* Plusieurs */

        delToPanier(state, article) {
            for (let i = 0; i < state.panier.length; i++) {
                if (state.panier[i].id == article.id) {
                    // Mise a jour des totaux
                    state.totaux -= parseInt(state.panier[i].total_price)
                        // Retirer de la iste ?
                    state.panier.splice(i, 1);
                    break;
                }
            }
        }

    },
    actions: {
        addToPanier({ commit }, productCart) {
            commit('addtocart')
            return new Promise((resolve, reject) => {

                let cart = []

                if (Array.isArray(productCart.panier.data)) {
                    productCart.panier.data.forEach(element => {
                        cart.push(element.product_id)
                    });
                } else {

                    reject(productCart.panier)
                }

                if (!cart.includes(productCart.id)) {

                    var cartsend = new FormData()
                    cartsend.append("product_id", productCart.id)
                    cartsend.append("color", productCart.color)
                    cartsend.append("quantity", productCart.quantity)
                    cartsend.append("price", productCart.price)
                    cartsend.append("photo", productCart.photo)


                    axios.post('/cart', cartsend)
                        .then(res => {
                            resolve(res.data)
                        })
                        .catch(err => {
                            console.log(err)
                            reject(err)
                        })



                } else {

                    reject({
                        state: false,
                        message: 'Ce produit existe déjà dans votre panier'
                    })
                }
            })
        },
        getCart({ commit }) {
            commit('addtocart')
            return new Promise((resolve, reject) => {
                axios.get('/cart')
                    .then(res => {
                        if (res.data.state) {
                            res.data.data.forEach(item => {
                                let images = []
                                let photo = item.product.photo
                                images = photo.split(';')
                                item.product.images = images.slice(0, images.length - 1)
                            })
                            resolve(res.data)
                        } else {
                            resolve(res.data)
                        }

                    })
                    .catch(err => {
                        console.log(err)
                        reject(err)
                    })
            })

        },
    },
    modules: {}
})