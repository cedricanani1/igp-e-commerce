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
                        <form @submit="orderSubmit">
                            <p>   
                                <label>email <span>*</span></label>
                                <input v-model="user.email" type="text" required>
                             </p>
                             <p>   
                                <label>Mot de passe <span>*</span></label>
                                <input v-model="user.password" type="password" required>
                             </p>   
                            <div class="login_submit">
                               <a href="#">Lost your password?</a>
                                <label for="remember">
                                    <input id="remember" type="checkbox">
                                    Remember me
                                </label>
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
          user:{}
      }
  },
  methods:{

        orderSubmit(){
            axios.post('http://192.168.1.3:8004/api/auth/login',this.user)
            .then(res => {
                console.log(res.data)
                if (res.data.status) {
                    localStorage.setItem('token',res.data.access_token)
                    localStorage.setItem('user',JSON.stringify(res.data.user))
                    window.location.href = '/';
                }
            })
            .catch(err =>{
                console.log(err)
            })
        },
  }
}
</script>