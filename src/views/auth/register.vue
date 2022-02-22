<template>
    <!-- breadcrumb area start -->
    <div class="breadcrumb-area">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="breadcrumb-wrap">
                        <nav aria-label="breadcrumb">
                            <ul class="breadcrumb">
                                <!-- <li class="breadcrumb-item"><a href="">Accueil</a></li>
                                <li class="breadcrumb-item active" >Inscription</li> -->
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- breadcrumb area end -->

    <!-- Start of Login Wrapper -->
    <div class="login-wrapper pb-70">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                    <main id="primary" class="site-main">
                        <div class="user-login">
                            <div class="row">
                                <div class="col-12 col-sm-12 col-md-12">
                                    <div class="section-title text-center">
                                        <h3>Créer un compte</h3>
                                    </div>
                                </div>
                            </div> <!-- end of row -->
                            <div class="row">
                                <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-8 offset-xl-2">
                                    <div class="registration-form login-form">
                                        <form @submit.prevent="createUser">
                                            <div class="login-info mb-20">
                                                <p>Vous avez déjà un compte? <a href="">Connectez-vous plutôt!</a></p>
                                            </div>
                                            <div class=" row">
                                                <label for="f-name" class="col-12 col-sm-12 col-md-4 col-form-label">Nom<span class="text-danger">*</span></label>
                                                <div class="col-12 col-sm-12 col-md-4 col-lg-4">
                                                    <input type="text" v-model="user.nom" class="form-control" id="f-name" required="">
                                                </div>
                                            </div> <br>
                                            <div class="form-group row">
                                                <label for="l-name" class="col-12 col-sm-12 col-md-4 col-form-label">Prenoms<span class="text-danger">*</span></label>
                                                <div class="col-12 col-sm-12 col-md-8 col-lg-8">
                                                    <input type="text" v-model="user.prenoms" class="form-control" id="l-name" required="">
                                                </div>
                                            </div> <br>
                                            <div class="form-group row">
                                                <label for="email" class="col-12 col-sm-12 col-md-4 col-form-label">Email<span class="text-danger">*</span></label>
                                                <div class="col-12 col-sm-12 col-md-8 col-lg-8">
                                                    <input type="text" v-model="user.email" class="form-control" id="email" required="">
                                                </div>
                                            </div> <br>
                                            <div class="form-group row">
                                                <label for="email" class="col-12 col-sm-12 col-md-4 col-form-label">Ville<span class="text-danger">*</span></label>
                                                <div class="col-12 col-sm-12 col-md-8 col-lg-8">
                                                    <input type="text" v-model="user.ville" class="form-control" id="email" required="">
                                                </div>
                                            </div> <br>
                                            <div class="form-group row">
                                                <label for="email" class="col-12 col-sm-12 col-md-4 col-form-label">commune</label>
                                                <div class="col-12 col-sm-12 col-md-8 col-lg-8">
                                                    <input type="text" v-model="user.commune" class="form-control" id="email">
                                                </div>
                                            </div> <br>

                                            <div class="form-group row">
                                                <label for="inputpassword" class="col-12 col-sm-12 col-md-4 col-form-label">Contact<span class="text-danger">*</span></label>
                                                <div class="col-12 col-sm-12 col-md-8 col-lg-8">
                                                    <input type="text" v-model="user.phone" class="form-control" id="inputpassword" required="">
                                                </div>
                                            </div> <br>
                                            <div class="form-group row">
                                                <label for="newpassword" class="col-12 col-sm-12 col-md-4 col-form-label">Mot de passe<span class="text-danger">*</span></label>
                                                <div class="col-12 col-sm-12 col-md-8 col-lg-8">
                                                    <input type="password" v-model="user.password" class="form-control" id="newpassword" required="">
                                                </div>
                                            </div> <br>
                                            <div class="form-group row">
                                                <label for="c-password" class="col-12 col-sm-12 col-md-4 col-form-label">Confirmation de Mot de passe<span class="text-danger">*</span></label>
                                                <div class="col-12 col-sm-12 col-md-8 col-lg-8">
                                                    <input type="password" v-model="user.password_confirmation"  class="form-control" id="c-password" required="">
                                                </div>
                                            </div> <br>
                                            <div class="register-box d-flex justify-content-end mt-20">
                                                <button type="submit" class="btn btn-secondary">Enregistrer</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div> <!-- end of user-login -->
                    </main> <!-- end of #primary -->
                </div>
            </div> <!-- end of row -->
        </div> <!-- end of container -->
    </div>
    <!-- End of Login Wrapper -->

   <!-- scroll to top -->
    <div class="scroll-top not-visible">
        <i class="fa fa-angle-up"></i>
    </div> <!-- /End Scroll to Top -->
    
</template>
<script>
import axios from 'axios'

export default {
    data(){
        return{
            user:{
                module:'E-commerce',
                url:window.location.protocol+'//'+window.location.host+'/'
            }
        }
    },
    methods:{
        createUser(){
            let url = 'https://igp-auth.lce-ci.com/api/auth/signup'
            // let url = 'http://192.168.1.8:8004/api/auth/signup'
            axios.post(url,this.user)
            .then(res => {
                if (res.data.status) {
                        this.$swal.fire({
                            icon: 'success',
                            title: 'Connexion',
                            text: 'Utilisateur crée avec succès, veuillez confirmer dans votre boite de reception ('+ this.user.email+ ') ! ',
                            showConfirmButton: false,
                            timer: 5000
                        }) 
                    // this.$router.push('/connexion')
                }else{
                        this.$swal.fire({
                            icon: 'error',
                            title: 'Erreur sur ces champs',
                            text: Object.values(res.data.message),
                            showConfirmButton: false,
                            timer: 5000
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