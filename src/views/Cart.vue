<template>

    <div class="breadcrumbs_area mt-45">
        <div class="container">   
            <div class="row">
                <div class="col-12">
                    <div class="breadcrumb_content">
                        <ul>
                            <li><a href="index.html">home</a></li>
                            <li>Shopping Cart</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>         
    </div>
    <!--breadcrumbs area end-->
    
     <!--shopping cart area start -->
    <div class="shopping_cart_area mt-45">
        <div class="container">  
            <!-- <form action="#">  -->
                <div class="row">
                    <div class="col-12">
                        <div class="table_desc">
                            <div v-if="panier.length > 0" class="cart_page table-responsive">
                                <table>
                                    <thead>
                                        <tr>
                                            <th class="product_remove">Supprimer</th>
                                            <th class="product_thumb">Image</th>
                                            <th class="product_name">Produit</th>
                                            <th class="product-price">Prix</th>
                                            <th class="product_quantity">Quantité</th>
                                            <th class="product_total">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(cart,index) in panier" :key="index">
                                        <td class="product_remove"><a @click="removeItem(cart.id)"><i class="fa fa-trash-o"></i></a></td>
                                            <td class="product_thumb"><a ><img :src="baseUrl+cart.product.images[0]" alt=""></a></td>
                                            <td class="product_name"><a >{{cart.product.libelle}}</a></td>
                                            <td class="product-price">{{cart.price}} Fcfa</td>
                                            <td class="product_quantity"><label>Quantité</label> <input min="1" max="100" v-model="cart.quantity" type="number"></td>
                                            <td class="product_total">{{Number(cart.quantity*cart.price)}} Fcfa</td>
                                        </tr>
                                    </tbody>
                                </table>   
                            </div> 
                            <div v-else>
                                <div class="alert alert-danger text-center">
                                    Panier vide
                                </div>
                            </div> 
                            <div class="cart_submit" v-if="panier.length > 0">
                                <button type="submit" @click="updatePanier">Mettre à jour le panier </button>
                            </div>      
                        </div>
                     </div>
                 </div>
                 <!--coupon code area start-->
                <div class="coupon_area">
                    <div class="row">
                        <div class="col-lg-6 col-md-6" v-if="panier.length > 0">
                            <div class="coupon_code left">
                                <h3>Coupon</h3>
                                <div class="coupon_inner">   
                                    <p>Enter your coupon code if you have one.</p>                                
                                    <input placeholder="Coupon code" type="text">
                                    <button type="submit">Apply coupon</button>
                                </div>    
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="coupon_code right">
                                <h3>PANIER TOTAUX</h3>
                                <div class="coupon_inner">
                                   <div class="cart_subtotal">
                                       <p>Subtotal</p>
                                       <p class="cart_amount">{{totalRequest}} Fcfa</p>
                                   </div>
                                   <div class="cart_subtotal ">
                                       <p>Livraison</p>
                                       <p class="cart_amount"></p>
                                   </div>
                                   
                                   <div class="cart_subtotal">
                                       <p>Total</p>
                                       <p class="cart_amount">{{totalRequest}} Fcfa</p>
                                   </div>
                                   <div class="checkout_btn" v-if="panier.length > 0">
                                       <router-link to="/caisse">Passer à la caisse</router-link>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--coupon code area end-->
            <!-- </form>  -->
        </div>     
    </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Home',
  data(){
      return {
        baseUrl : '',
        quantite: '',
        infos_commande: {
            nom: '',
            prenoms: '',
            email : '',
            phone: '',
            adresse: '',
            ville :'',
            commune: '',
            others :''
        },
        panier:[]
      }
  },
  mounted(){
    this.baseUrl = this.$store.state.baseUrl
    this.getCart();
  },
  computed: {
      articles(){
        return this.$store.state.panier
      },
        totalRequest() {
            return this.panier.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        }
  },
  methods: {
    getCart(){
        let app = this
        this.$store.dispatch('getCart').then((response)=>{
            console.log('cart',response)
            app.panier = response
        }).catch(()=>{
            
        })
    },
    addToPanier(productCart){
        let app = this
        productCart.panier = this.cart 
        if (this.$refs.photo) {
            productCart.photo = this.$refs.photo.files[0]
        }     
        
        this.$store.dispatch('addToPanier',productCart).then((response)=>{
            this.getCart()
            if (response.state) {
                app.$swal.fire({
                        icon: 'success',
                        title: 'Panier',
                        text: 'Article ajouté au panier avec succès !',
                        showConfirmButton: false,
                        timer: 3000
                    }) 
            }
                
        }).catch(()=>{
            this.$swal.fire({
                    icon: 'warning',
                    title: 'Produit existant',
                    text: 'Ce Produit est deja dans votre panier!',
                    showConfirmButton: false,
                    timer: 3000
                })
        })
    },

    updatePanier(){
            axios.post('/update-cart-item/',{
                cart:this.panier
            })
            .then(res => {
                console.log('product Type',res)
                if (res.data.state) {
                    this.$swal.fire({
                        icon: 'success',
                        title: 'Panier',
                        text: 'Panier modifié avec succès !',
                        showConfirmButton: false,
                        timer: 3000
                    }) 
            }
                this.getCart()
            })
            .catch(err =>{
                console.log(err)
            })
    },
    removeItem(id){
            axios.delete('/remove-cart-item/'+id)
            .then(res => {
                console.log('product Type',res)
                this.getCart()
            })
            .catch(err =>{
                console.log(err)
            })
    },
  }
}
</script>
