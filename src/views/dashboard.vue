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
                                <li><a href="#account-details" data-bs-toggle="tab" class="nav-link">Modifier compte</a></li>
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
                            <div class="tab-pane" id="address" v-if="user">
                               <p>Information</p>
                                <p><strong>{{user.nom}} {{user.prenoms}}</strong></p>
                                <address>
                                  <address>
                                    <span><strong>Email:</strong> {{user.email}}</span>,
                                    <br>
                                    <span><strong>Contact:</strong> {{user.phone}}</span>,
                                    <br>
                                    <span><strong>Ville:</strong> {{user.ville}}</span>,
                                    <br>
                                    <span><strong>Commune:</strong> {{user.commune}}</span>
                                  </address>
                                </address>
                            </div>
                            <div class="tab-pane fade" id="account-details">
                                <h3>détails de compte </h3>
                                <div class="login">
                                    <div class="login_form_container">
                                        <div class="account_login_form" v-if="user">
                                            <form @submit.prevent="compteUpdate">
                                                <label>Nom</label>
                                                <input type="text" v-model="user.nom" name="first-name">
                                                <label>¨Prenoms</label>
                                                <input type="text" v-model="user.prenoms" name="last-name">
                                                <label>Email</label>
                                                <input type="text" v-model="user.email" >
                                                <label>Ville</label>
                                                <input type="text" v-model="user.ville" >
                                                <label>Commune</label>
                                                <input type="text" v-model="user.commune" >
                                                <label>Mot de passe </label>
                                                <input type="password" v-model="user.password" name="user-password">
                                                <label>confirmation de mot de passe</label>
                                                <input type="password" v-model="user.password_confirmation" name="user-password">
                                                <label>Nouveau de mot de passe</label>
                                                <input type="password" v-model="user.newPassword" name="user-password">
                                                <span class="example">
                                                   {{new Date()}}
                                                </span>
                                                <br>
                                                <br>
                                                <div class="save_button primary_btn default_button">
                                                   <button type="submit">Enregistrer</button>
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
        this.user = JSON.parse(localStorage.getItem('user'))
        this.baseUrl = this.$store.state.baseUrl
        this.panier = JSON.parse(localStorage.getItem('panier'))
        
        this.getOrdersClient()

        console.log()
        
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
                            'order': [],
                        });
                    }, 1000);
                    this.orders = res.data
                })
            },
            compteUpdate(){
                axios.post('https://igp-auth.lce-ci.com/api/auth/modify-account',this.user)
                .then(res =>{
                    console.log(res.data)
                    if (res.data.status) {
                            this.$emit('updateUser',res.data.user)
                            this.$swal.fire({
                                icon: 'success',
                                title: 'Modification',
                                text: 'Compte modifié avec succès !',
                                showConfirmButton: false,
                                timer: 1000
                            }) 
                            
                    }
                    
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
                })
            },
    }
}
</script>
