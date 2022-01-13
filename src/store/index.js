import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    baseUrl: 'http://192.168.1.3:8002/Products/', 
    // baseUrl: 'https://promotion-artisan-backend.lce-ci.com/public/',
    panier : [],
    totaux : 0,
    liste_souhait: [],
    liste_comparaison: [],
    token: localStorage.getItem('token') || null
  },
  mutations: {
    addtocart(state){
      state.cart =  state.cart =1
    },

    /* Panier */
    addToPanier(state, article, qte=1){
      article.quantite = qte
      article.total_price = (parseInt(article.price) - parseInt(article.price)*article.discount*0.01)*qte
      state.panier.push(article)
      console.log("Add with success")

      // Update totaux
      let totaux = 0
      for(let i=0; i < state.panier.length ;i++){
        if((i+1) == state.panier.length){
          totaux += parseInt(state.panier[i].total_price)
          state.totaux = totaux
        }else{
          totaux += parseInt(state.panier[i].total_price)
        }
      }
    },
    /* Plusieurs */
    modifyPanier(state,article, qte){
      let totaux = 0
      console.log("start upadating...", qte)
      for(let i=0; i < state.panier.length ;i++){
        // Mise de la quantité et prix total de l'article
        if(state.panier[i].id == article.id){
          console.log(state.panier[i])
          state.panier[i].total_price = (parseInt(state.panier[i].price) - parseInt(state.panier[i].price)*state.panier[i].discount*0.01)*parseInt(state.panier[i].quantite)
          console.log(state.panier[i])
        }

        // Update totaux
        if((i+1) == state.panier.length){
          totaux += parseInt(state.panier[i].total_price)
          state.totaux = totaux
        }else{
          totaux += parseInt(state.panier[i].total_price)
        }
      }
    },
    delToPanier(state, article){
      for(let i=0; i < state.panier.length ;i++){
        if(state.panier[i].id == article.id){
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
      addToPanier({commit},productCart){
        commit('addtocart')
        return new Promise((resolve,reject) =>{
          console.log('store',productCart)

          let cart=[]

          if (Array.isArray(productCart.panier)) {
            productCart.panier.forEach(element => {
                cart.push(element.product_id)
            });
          }else{
            reject(productCart.panier)
          }

          if (!cart.includes(productCart.id)) {
              
              var cartsend = new FormData()
              cartsend.append("product_id",productCart.id)
              cartsend.append("color",productCart.color)
              cartsend.append("quantity",productCart.quantity)
              cartsend.append("price",productCart.price)
              cartsend.append("photo",productCart.photo)

            
              axios.post('/cart',cartsend)
                  .then(res => {
                      console.log('product Type',res)
                      resolve(res.data)
                  })
                  .catch(err =>{
                      console.log(err)
                      reject(err)
                  })
            
              
              
          }else{

              reject({
                state : false,
                message : 'Ce produit existe déjà dans votre panier'
              })
          } 
        })  
      },
      getCart({commit}){
        commit('addtocart')
        return new Promise((resolve,reject) =>{
            axios.get('/cart')
            .then(res => {
              
              if (res.data.state) {
                res.data.data.forEach(item =>{
                    let images = []
                    let photo = item.product.photo
                    images = photo.split(';')
                    item.product.images = images.slice(0,images.length-1)
                })
                resolve(res.data.data)
              }else{
                resolve(res.data)
              }
              
            })
            .catch(err =>{
                console.log(err)
                reject(err)
            })
        })
            
        },
      },
  modules: {
  }
})
