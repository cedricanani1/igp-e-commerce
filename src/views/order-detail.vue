<template>

    <div class="breadcrumbs_area mt-45">
        <div class="container">   
            <div class="row">
                <div class="col-12">
                    <div class="breadcrumb_content">
                        <ul>
                            <li><a href="index.html">home</a></li>
                            <li>Detail</li>
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
                            <div v-if="panier.cart && panier.cart.length > 0" class="cart_page table-responsive">
                                <table>
                                    <thead>
                                        <tr>
                                            <th class="product_thumb">Image</th>
                                            <th class="product_name">Produit</th>
                                            <th class="product-price">Prix</th>
                                            <th class="product_quantity">Quantité</th>
                                            <th class="product_total">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(cart,index) in panier.cart" :key="index">
                                            <td class="product_thumb"><a ><img :src="baseUrl+cart.product.images[0]" alt=""></a></td>
                                            <td class="product_name"><a >{{cart.product.libelle}}</a></td>
                                            <td class="product-price">{{cart.price}} Fcfa</td>
                                            <td class="product_quantity">{{cart.quantity}}</td>
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
                        </div>
                     </div>
                 </div>
                 <!--coupon code area start-->
                <div class="coupon_area">
                    <div class="row">
                        
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
                                   <div class="checkout_btn" >
                                       <button @click="$router.go(-1)">Retour</button>
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
        panier:[],
        total:[]
      }
  },
  mounted(){
    this.baseUrl = this.$store.state.baseUrl
    this.getCart();
  },
  computed: {
      
        totalRequest() {
            return this.total.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        }
  },
  methods: {
    getCart(){
        axios.get('/orders/'+this.$route.params.id)
            .then(res => {
                this.total=  res.data.cart
                res.data.cart.forEach(item =>{
                    let images = []
                    let photo = item.product.photo
                    images = photo.split(';')
                    item.product.images = images.slice(0,images.length-1)
                })
              this.panier=  res.data
            })
            .catch(err =>{
                console.log(err)
            })
    },
  }
}
</script>
