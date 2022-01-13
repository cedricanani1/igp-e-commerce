<template>
        <!--breadcrumbs area start-->
    <div class="breadcrumbs_area mt-45">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="breadcrumb_content">
                        <ul>
                            <li><a href="index.html">home</a></li>
                            <li>My account</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section class="main_content_area">
        <div class="container">
            <div class="account_dashboard">
                <div class="row">
                    <div class="col-sm-12 col-md-3 col-lg-3">
                        <!-- Nav tabs -->
                        <div class="dashboard_tab_button">
                            <ul role="tablist" class="nav flex-column dashboard-list">
                                <li><a href="#dashboard" data-bs-toggle="tab" class="nav-link active">Tableau de bord</a></li>
                                <li> <a href="#orders" data-bs-toggle="tab" class="nav-link">Mes commandes</a></li>
                                <li><a href="#address" data-bs-toggle="tab" class="nav-link">Addresses</a></li>
                                <li><a href="#account-details" data-bs-toggle="tab" class="nav-link">Account details</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-9 col-lg-9">
                        <!-- Tab panes -->
                        <div class="tab-content dashboard_content">
                            <div class="tab-pane fade show active" id="dashboard">
                                <h3>Tableau de bord </h3>
                                <p>Depuis le tableau de bord de votre compte. vous pouvez facilement vérifier et afficher vos commandes récentes, gérer vos adresses de livraison et de facturation et modifier votre mot de passe et les détails de votre compte.</p>
                            </div>
                            <div class="tab-pane fade" id="orders">
                                <h3>Mes commandes</h3>
                                <div class="table-responsive" >
                                    <table class="table display" id="table_id">
                                        <thead>
                                            <tr>
                                                <th>No Commande</th>
                                                <th>Date</th>
                                                <th>Status</th>
                                                <th>Total</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(order,index) in orders" :key="index">
                                                <td>{{order.order_number}}</td>
                                                <td>{{order.created_at}}</td>
                                                <td><span class="success">{{order.status}}</span></td>
                                                <td>{{order.total_amount}} Fcfa</td>
                                                <td><router-link :to="'/'+order.id+'/order-details'" class="view">voir</router-link></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div>

                                </div>
                            </div>
                            <div class="tab-pane" id="address">
                               <p>Les adresses suivantes seront utilisées par défaut sur la page de paiement.</p>
                                <h4 class="billing-address">Billing address</h4>
                                <a href="#" class="view">Edit</a>
                                <p><strong>Michael M Hoskins</strong></p>
                                <address>
                                  <address>
                                    <span><strong>City:</strong> Seattle</span>,
                                    <br>
                                    <span><strong>State:</strong> Washington(WA)</span>,
                                    <br>
                                    <span><strong>ZIP:</strong> 98101</span>,
                                    <br>
                                    <span><strong>Country:</strong> USA</span>
                                  </address>
                                </address>
                            </div>
                            <div class="tab-pane fade" id="account-details">
                                <h3>Account details </h3>
                                <div class="login">
                                    <div class="login_form_container">
                                        <div class="account_login_form">
                                            <form action="#">
                                                <p>Already have an account? <a href="#">Log in instead!</a></p>
                                                <div class="input-radio">
                                                    <span class="custom-radio"><input type="radio" value="1" name="id_gender"> Mr.</span>
                                                    <span class="custom-radio"><input type="radio" value="1" name="id_gender"> Mrs.</span>
                                                </div> <br>
                                                <label>First Name</label>
                                                <input type="text" name="first-name">
                                                <label>Last Name</label>
                                                <input type="text" name="last-name">
                                                <label>Email</label>
                                                <input type="text" name="email-name">
                                                <label>Password</label>
                                                <input type="password" name="user-password">
                                                <label>Birthdate</label>
                                                <input type="text" placeholder="MM/DD/YYYY" value="" name="birthday">
                                                <span class="example">
                                                  (E.g.: 05/31/1970)
                                                </span>
                                                <br>
                                                <span class="custom_checkbox">
                                                    <input type="checkbox" value="1" name="optin">
                                                    <label>Receive offers from our partners</label>
                                                </span>
                                                <br>
                                                <span class="custom_checkbox">
                                                    <input type="checkbox" value="1" name="newsletter">
                                                    <label>Sign up for our newsletter<br><em>You may unsubscribe at any moment. For that purpose, please find our contact info in the legal notice.</em></label>
                                                </span>
                                                <div class="save_button primary_btn default_button">
                                                   <button type="submit">Save</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import axios from 'axios'

import $ from "jquery";
import moment from "moment";
moment.locale("fr");

export default {
  name: 'Header', 
  data(){
    return{
        panier: [],
        categories:[],
        baseUrl:'',
        user:null,
        orders: [],
    }
  },
    computed: {
        totalRequest() {
            return this.panier.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        }
    },
    mounted(){
        this.baseUrl = this.$store.state.baseUrl
        this.panier = JSON.parse(localStorage.getItem('panier'))
        this.user = JSON.parse(localStorage.getItem('user'))
        this.getOrdersClient()
    },
    methods:{
            getOrdersClient(){
                axios.get('/orders-client')
                .then(res =>{
                    res.data.forEach((element) => {
                        element.created_at = moment(element.created_at).format(
                        "Do MMMM YYYY"
                        );
                        element.updated_at = moment(element.updated_at).format(
                        "Do MMMM YYYY"
                        );
                    });
                    setTimeout(function() {
                        $('#table_id').DataTable({
                            pageLength: 10,
                            // data: res.data,
                            'order': [],
                            // columns: [
                            //     { data: 'order_number' },
                            //     { data: 'created_at' },
                            //     { data: 'status' },
                            //     { data: 'total_amount' },
                            //     { data: 'id' }
                            // ]
                        });
                    }, 1000);
                    this.orders = res.data
                })
            },
            removeItem(id){
                let key =null
                this.panier.forEach((element,index) => {
                    if (element.id == id) {
                        key = index
                    }
                });
                if (key != null) {
                    this.panier.splice(key, 1);
                }
                localStorage.setItem('panier',JSON.stringify(this.panier))
            },
            deconnexion(){
                axios.get('https://igp-auth.lce-ci.com/api/auth/logout')
                .then(res =>{
                    if (res.data.status) {
                        localStorage.setItem('token',null)
                        localStorage.setItem('user',null)
                        this.$router.push('/')
                    }
                    console.log('status',res.data)
                })
            },
    }
}
</script>
