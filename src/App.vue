<template>
    <Header :cartUpdate="cartUpdate" :userUpdate="user" />
      <router-view @update-cart="updateToCart($event)" @update-user="updateUser($event)" :key="$route.path"/>
    <Footer />
</template>
<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  data(){
        return{
            cartUpdate:[],
            user:null
        }
    },
  components: {
    Header,
    Footer
  },
  methods:{
    updateToCart(test){
      this.cartUpdate= test.data
    },
    updateUser(user){
      this.user= user
    }
  }
}
</script>