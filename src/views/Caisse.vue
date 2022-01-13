<template>
    <div class="breadcrumbs_area mt-45">
        <div class="container">   
            <div class="row">
                <div class="col-12">
                    <div class="breadcrumb_content">
                        <ul>
                            <li><a href="index.html">home</a></li>
                            <li>Checkout</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>         
    </div>
    <!--breadcrumbs area end-->
    
    <!--Checkout page section-->
    <div class="Checkout_section mt-45">
       <div class="container">
            <!-- <div class="row">
               <div class="col-12">
                    <div class="user-actions">
                        <h3> 
                            <i class="fa fa-file-o" aria-hidden="true"></i>
                            Returning customer?
                            <a class="Returning" href="#" data-bs-toggle="collapse" data-bs-target="#checkout_coupon" aria-expanded="true">Click here to enter your code</a>     

                        </h3>
                         <div id="checkout_coupon" class="collapse" data-parent="#accordion">
                            <div class="checkout_info">
                                <form action="#">
                                    <input placeholder="Coupon code" type="text">
                                    <button type="submit">Apply coupon</button>
                                </form>
                            </div>
                        </div>    
                    </div>    
               </div>
            </div> -->
            <div class="checkout_form">
                <div class="row">
                    <form @submit="orderSubmit">
                        <div class="col-lg-6 col-md-6">
                        
                            <h3>DÉTAILS DE LA FACTURATION</h3>
                            <div class="row">

                                <div class="col-lg-6 mb-20">
                                    <label>Nom <span>*</span></label>
                                    <input v-model="order.nom" type="text" required>    
                                </div>
                                <div class="col-lg-6 mb-20">
                                    <label>Prenoms  <span>*</span></label>
                                    <input v-model="order.prenoms" type="text" required> 
                                </div>

                                <div class="col-12 mb-20">
                                    <label>Ville  <span>*</span></label>
                                    <input v-model="order.location" placeholder="House number and street name" type="text" required>     
                                </div>
                                <div class="col-12 mb-20">
                                    <label>Commune <span>*</span></label>
                                    <input v-model="order.shipping" type="text">    
                                </div> 
                                <div class="col-12 mb-20">
                                    <input placeholder="Apartment, suite, unit etc. (optional)" type="text" required>     
                                </div>
                                <div class="col-lg-6 mb-20">
                                    <label>Telephone<span>*</span></label>
                                    <input v-model="order.phone" type="text" required> 
                                </div> 
                                 <div class="col-lg-6 mb-20">
                                    <label> Email  <span>*</span></label>
                                      <input v-model="order.email" type="text"> 
                                </div> 
                                
                                <div class="col-12 mb-20">
                                    <input id="address" type="checkbox" data-bs-target="createp_account" />
                                    <label class="righ_0" for="address" data-bs-toggle="collapse" data-bs-target="#collapsetwo" aria-controls="collapseOne">Livrer à une adresse différente?</label>

                                    <div id="collapsetwo" class="collapse one" data-parent="#accordion">
                                       <div class="row">
                                            <div class="col-lg-6 mb-20">
                                                <label>First Name <span>*</span></label>
                                                <input type="text">    
                                            </div>
                                            <div class="col-lg-6 mb-20">
                                                <label>Last Name  <span>*</span></label>
                                                <input type="text"> 
                                            </div>
                                            <div class="col-12 mb-20">
                                                <div class="select_form_select">
                                                    <label for="countru_name">country <span>*</span></label>
                                                    <select class="niceselect_option" name="cuntry" id="countru_name"> 
                                                        <option value="2">bangladesh</option>      
                                                        <option value="3">Algeria</option> 
                                                        <option value="4">Afghanistan</option>    
                                                        <option value="5">Ghana</option>    
                                                        <option value="6">Albania</option>    
                                                        <option value="7">Bahrain</option>    
                                                        <option value="8">Colombia</option>    
                                                        <option value="9">Dominican Republic</option>   

                                                    </select>
                                                </div> 
                                            </div>

                                            <div class="col-12 mb-20">
                                                <label>Street address  <span>*</span></label>
                                                <input placeholder="House number and street name" type="text">     
                                            </div>
                                            <div class="col-12 mb-20">
                                                <input placeholder="Apartment, suite, unit etc. (optional)" type="text">     
                                            </div>
                                            <div class="col-12 mb-20">
                                                <label>Town / City <span>*</span></label>
                                                <input  type="text">    
                                            </div> 
                                             <div class="col-12 mb-20">
                                                <label>State / County <span>*</span></label>
                                                <input type="text">    
                                            </div> 
                                            <div class="col-lg-6 mb-20">
                                                <label>Phone<span>*</span></label>
                                                <input type="text"> 

                                            </div> 
                                             <div class="col-lg-6">
                                                <label> Email Address   <span>*</span></label>
                                                  <input type="text"> 

                                            </div> 
                                        </div>
                                    </div>
                                </div>
                                <!-- <div class="col-12">
                                    <div class="order-notes">
                                         <label for="order_note">Order Notes</label>
                                        <textarea id="order_note" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                                    </div>    
                                </div>     	    	    	    	    	    	     -->
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <h3>Votre commandes</h3> 
                            <div class="order_table table-responsive">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Produit</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(item,index) in panier" :key="index">
                                            <td> {{item.product.libelle}} <strong> × {{item.quantity}}</strong></td>
                                            <td> {{Number(item.price*item.quantity)}} Fcfa</td>
                                        </tr>
                                        
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th>Sous total</th>
                                            <td>{{totalRequest}}  Fcfa</td>
                                        </tr>
                                        <tr>
                                            <th>Livraison</th>
                                            <td><strong>0</strong></td>
                                        </tr>
                                        <tr class="order_total">
                                            <th>commande Total</th>
                                            <td><strong> {{totalRequest}}  Fcfa</strong></td>
                                        </tr>
                                    </tfoot>
                                </table>     
                            </div>
                            <div class="payment_method">
                                <!-- <div class="panel-default">
                                    <input id="payment" name="check_method" type="radio" data-bs-target="createp_account" />
                                    <label for="payment" data-bs-toggle="collapse" data-bs-target="#method" aria-controls="method">Create an account?</label>

                                    <div id="method" class="collapse one" data-parent="#accordion">
                                        <div class="card-body1">
                                        <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                                        </div>
                                    </div>
                                </div>  -->
                            <div class="panel-default">
                                    <!-- <input id="payment_defult" name="check_method" type="radio" data-bs-target="createp_account" />
                                    <label for="payment_defult" data-bs-toggle="collapse" data-bs-target="#collapsedefult" aria-controls="collapsedefult">PayPal <img src="assets/img/icon/papyel.png" alt=""></label>

                                    <div id="collapsedefult" class="collapse one" data-parent="#accordion">
                                        <div class="card-body1">
                                        <p>Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.</p> 
                                        </div>
                                    </div> -->
                                </div>
                                <div class="order_button" v-if="panier.length > 0">
                                    <button  type="submit">Commander</button> 
                                </div>    
                            </div> 
                        </div>
                    </form>         
                </div> 
            </div> 
        </div>       
    </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Home',
  data(){
      return{
          other_address:'',
          display_other: 'none',
          panier:[] ,
          order:{}
      }
  },
  mounted(){
      this.getCart()
  },
  computed: {
        articles(){
            return this.$store.state.panier
        },
        totalRequest() {
                return this.panier.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        }   
  },
  methods:{
    getCart(){
        let app = this
        this.$store.dispatch('getCart').then((response)=>{
            app.panier = response
            console.log('panier test',response)
        }).catch(()=>{
            
        })
    },
    active_user(){
        // Checkout Page Accordion Behaviour
        document.getElementById('checkout_login').slideToggle(300);

    },
    active_other_address(){
        console.log(this.other_address)
        if(this.other_address){
            this.display_other = "block"
        }else{
            this.display_other = "none"
        }
    },
    orderSubmit(){
// this.panier.forEach((element,i) => {
            
        axios.post('/orders',this.order)
        .then(res => {
            console.log(res.data)
            if (res.data.state) {
                this.panier = []
                localStorage.setItem('panier',JSON.stringify(this.panier))
                this.$swal.fire({
                    icon: 'success',
                    title: 'Commande',
                    text: 'Commande validé avec succès !',
                    showConfirmButton: false,
                    timer: 3000
                })
            }
        })
        .catch(err =>{
            console.log(err)
        })
    },
  }
  }
</script>
