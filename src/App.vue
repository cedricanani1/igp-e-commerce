<template>
    <Header :cartUpdate="cartUpdate" />
      <router-view @update-cart="updateToCart($event)" :key="$route.path"/>
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
            cartUpdate:[]
        }
    },
  components: {
    Header,
    Footer
  },
  methods:{
    updateToCart(test){
      this.cartUpdate= test
      console.log(test)
    }
  }
}
</script>