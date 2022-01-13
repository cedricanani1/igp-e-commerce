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
                                        <form @submit="createUser">
                                            <div class="login-info mb-20">
                                                <p>Vous avez déjà un compte? <a href="">Connectez-vous plutôt!</a></p>
                                            </div>
                                            <div class=" row">
                                                <label for="f-name" class="col-12 col-sm-12 col-md-4 col-form-label">Nom</label>
                                                <div class="col-12 col-sm-12 col-md-4 col-lg-4">
                                                    <input type="text" v-model="user.nom" class="form-control" id="f-name" required="">
                                                </div>
                                            </div> <br>
                                            <div class="form-group row">
                                                <label for="l-name" class="col-12 col-sm-12 col-md-4 col-form-label">Prenoms</label>
                                                <div class="col-12 col-sm-12 col-md-8 col-lg-8">
                                                    <input type="text" v-model="user.prenoms" class="form-control" id="l-name" required="">
                                                </div>
                                            </div> <br>
                                            <div class="form-group row">
                                                <label for="email" class="col-12 col-sm-12 col-md-4 col-form-label">Email</label>
                                                <div class="col-12 col-sm-12 col-md-8 col-lg-8">
                                                    <input type="text" v-model="user.email" class="form-control" id="email" required="">
                                                </div>
                                            </div> <br>

                                            <div class="form-group row">
                                                <label for="inputpassword" class="col-12 col-sm-12 col-md-4 col-form-label">Contact</label>
                                                <div class="col-12 col-sm-12 col-md-8 col-lg-8">
                                                    <input type="text" v-model="user.phone" class="form-control" id="inputpassword" required="">
                                                </div>
                                            </div> <br>
                                            <div class="form-group row">
                                                <label for="newpassword" class="col-12 col-sm-12 col-md-4 col-form-label">Mot de passe</label>
                                                <div class="col-12 col-sm-12 col-md-8 col-lg-8">
                                                    <input type="password" v-model="user.password" class="form-control" id="newpassword" required="">
                                                </div>
                                            </div> <br>
                                            <div class="form-group row">
                                                <label for="c-password" class="col-12 col-sm-12 col-md-4 col-form-label">Confirmation de Mot de passe</label>
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
            user:{}
        }
    },
    methods:{
        createUser(){
            axios.post('https://igp-auth.lce-ci.com/api/auth/signup',this.user)
            .then(res => {
                console.log(res.data)
                if (res.data.status) {
                    this.$router.push('/login')
                }
            })
            .catch(err =>{
                console.log(err)
            })
        },
    }
}
</script>