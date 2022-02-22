<template>
    <div class="breadcrumbs_area mt-45">
        <div class="container">   
            <div class="row">
                <div class="col-12">
                    <div class="breadcrumb_content">
                        <ul>
                            <li><a href="/">Accueil</a></li>
                            <li>Connexion</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>         
    </div>
    <div class="customer_login mt-45 ">
        <div class="container ">
            <div class="row">
                <div class="text-center">
                    <div class="account_form login col-md-6 ">
                        <h2>Connexion</h2>
                        <form @submit.prevent="orderSubmit">
                            <p>   
                                <label>email <span class="text-danger">*</span></label>
                                <input v-model="user.email" type="text" required>
                             </p>
                             <p>   
                                <label>Mot de passe <span class="text-danger">*</span></label>
                                <input v-model="user.password" type="password" required>
                             </p>   
                            <div class="login_submit">
                                <label for="remember">
                                    <router-link to="/recovery-password">Mot de passe oublié ?</router-link>
                                    
                                </label> <br>
                                <label for="remember">
                                    <input id="remember" type="checkbox">
                                    Remember me
                                </label>
                                <br>
                                <button type="submit" >login</button>
                            </div>
                        </form>
                     </div>    
                </div>
            </div>
        </div>    
    </div>
</template>
<script>
    import axios from 'axios'

    export default {
        data(){
        return{
            other_address:'',
            display_other: 'none',
            panier:[] ,
            user:{},
            redirect:null
        }
    },
    mounted(){
        this.redirect = this.$route.query.redirect
    },
    methods:{

            orderSubmit(){
                let url = 'https://igp-auth.lce-ci.com/api/auth/login'
                // let url = 'http://192.168.1.8:8004/api/auth/login'
                axios.post(url,this.user)
                .then(res => {
                        if (res.data.status) {
                            localStorage.setItem('token',res.data.access_token)
                            localStorage.setItem('user',JSON.stringify(res.data.user))

                            this.$swal.fire({
                                icon: 'success',
                                title: 'Connexion',
                                text: 'Connexion reussi avec succès !',
                                showConfirmButton: false,
                                timer: 2000
                            }) 

                            window.location.href = this.$route.query.redirect || '/';

                        }else{
                            this.$swal.fire({
                                icon: 'error',
                                title: 'Echec',
                                text: 'Identifiant Incorrect !',
                                showConfirmButton: false,
                                timer: 2000
                            }) 
                        }
                })
                .catch(err =>{
                    // console.log('ddd',err)
                    if (!err.response.data.status) {
                            this.$swal.fire({
                                icon: 'error',
                                title: 'Echec',
                                text: 'Identifiant Incorrect !',
                                showConfirmButton: false,
                                timer: 2000
                            }) 
                    }
                    
                })
            },
    }
    }
</script>