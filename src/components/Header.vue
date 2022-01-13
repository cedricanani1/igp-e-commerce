<template>
    <div class="off_canvars_overlay">
                
    </div>
    <div class="Offcanvas_menu">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="canvas_open">
                        <a href="javascript:void(0)"><i class="ion-navicon"></i></a>
                    </div>
                    <div class="Offcanvas_menu_wrapper">
                        <div class="canvas_close">
                              <a href="javascript:void(0)"><i class="ion-android-close"></i></a>  
                        </div>
                        <div class="header_support">
                           <p><i class="icon ion-android-alarm-clock"></i> Ordered before 17:30, shipped today - Support: <a href="tel:+0123456789">0123456789</a></p>
                        </div>
                        
                        <div class="header_account bottom">
                            <ul>
                                <li class="top_links"><a href="#"><i class="ion-gear-a"></i> Setting <i class="ion-chevron-down"></i></a>
                                    <ul class="dropdown_links">
                                        <li><a href="/order">Mes commandes </a></li>
                                        <li><a href="my-account.html">Mon compte</a></li>
                                        <li><a href="/panier">Panier</a></li>
                                    </ul>
                                </li>

                            </ul>
                        </div>
                        <div class="search_container">
                           <form action="#">
                               <div class="hover_category">
                                    <select class="select_option" name="select" id="categori1">
                                        <option selected value="1">All Categories</option>
                                        <option value="2">Accessories</option>
                                        <option value="3">Accessories & More</option>
                                        <option value="4">Butters & Eggs</option>
                                        <option value="5">Camera & Video </option>
                                        <option value="6">Mornitors</option>
                                        <option value="7">Tablets</option>
                                        <option value="8">Laptops</option>
                                        <option value="9">Handbags</option>
                                        <option value="10">Headphone & Speaker</option>
                                        <option value="11">Herbs & botanicals</option>
                                        <option value="12">Vegetables</option>
                                        <option value="13">Shop</option>
                                        <option value="14">Laptops & Desktops</option>
                                        <option value="15">Watchs</option>
                                        <option value="16">Electronic</option>
                                    </select>                        
                               </div>
                                <div class="search_box">
                                    <input placeholder="Search product..." type="text">
                                    <button type="submit">Search</button> 
                                </div>
                            </form>
                        </div>
                        <div class="mini_cart_wrapper">
                            <a href="javascript:void(0)">
                               <span class="cart_icon">
                                   <i class="ion-android-cart"></i>
                               </span>
                                <span class="cart_title">
                                    <span class="cart_quantity">2 items	</span>
                                    <span class="cart_price">$152.00</span>
                                </span>
                            </a>
                            <!--mini cart-->
                             <div class="mini_cart">
                                <div class="mini_cart_inner">
                                    <div class="cart_item">
                                       <div class="cart_img">
                                           <a href="#"><img src="assets/img/s-product/product.jpg" alt=""></a>
                                       </div>
                                        <div class="cart_info">
                                            <a href="#">Sit voluptatem rhoncus sem lectus</a>
                                            <p>Qty: 1 X <span> $60.00 </span></p>    
                                        </div>
                                        <div class="cart_remove">
                                            <a href="#"><i class="ion-android-close"></i></a>
                                        </div>
                                    </div>
                                    <div class="cart_item">
                                       <div class="cart_img">
                                           <a href="#"><img src="assets/img/s-product/product2.jpg" alt=""></a>
                                       </div>
                                        <div class="cart_info">
                                            <a href="#">Natus erro at congue massa commodo</a>
                                            <p>Qty: 1 X <span> $60.00 </span></p>   
                                        </div>
                                        <div class="cart_remove">
                                            <a href="#"><i class="ion-android-close"></i></a>
                                        </div>
                                    </div>
                                    <div class="mini_cart_table">
                                        <div class="cart_total">
                                            <span>Sub total:</span>
                                            <span class="price">$138.00</span>
                                        </div>
                                        <div class="cart_total mt-10">
                                            <span>total:</span>
                                            <span class="price">$138.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="mini_cart_footer">
                                   <div class="cart_button">
                                        <a href="cart.html">View cart</a>
                                    </div>
                                    <div class="cart_button">
                                        <a href="checkout.html">Checkout</a>
                                    </div>

                                </div>

                            </div>
                            <!--mini cart end-->
                        </div>
                        <div id="menu" class="text-left ">
                            <ul class="offcanvas_main_menu">
                                <li class="menu-item-has-children active">
                                    <a href="/">Accueil</a>
                                    <ul class="sub-menu">
                                        <li><a href="">Home 1</a></li>
                                        <li><a href="index-2.html">Home 2</a></li>
                                        <li><a href="index-3.html">Home 3</a></li>
                                        <li><a href="index-4.html">Home 4</a></li>
                                        <li><a href="index-5.html">Home 5</a></li>
                                    </ul>
                                </li>
                                <li class="menu-item-has-children">
                                    <a href="#">Shop</a>
                                    <ul class="sub-menu">
                                        <li class="menu-item-has-children">
                                            <a href="#">Shop Layouts</a>
                                            <ul class="sub-menu">
                                                <li><a href="">shop</a></li>
                                                <li><a href="shop-fullwidth.html">Full Width</a></li>
                                                <li><a href="shop-fullwidth-list.html">Full Width list</a></li>
                                                <li><a href="shop-right-sidebar.html">Right Sidebar </a></li>
                                                <li><a href="shop-right-sidebar-list.html"> Right Sidebar list</a></li>
                                                <li><a href="shop-list.html">List View</a></li>
                                            </ul>
                                        </li>
                                        <li class="menu-item-has-children">
                                            <a href="#">other Pages</a>
                                            <ul class="sub-menu">
                                                <li><a href="cart.html">cart</a></li>
                                                <li><a href="wishlist.html">Wishlist</a></li>
                                                <li><a href="checkout.html">Checkout</a></li>
                                                <li><a href="my-account.html">my account</a></li>
                                                <li><a href="404.html">Error 404</a></li>
                                            </ul>
                                        </li>
                                        <li class="menu-item-has-children">
                                            <a href="#">Product Types</a>
                                            <ul class="sub-menu">
                                                <li><a href="product-details.html">product details</a></li>
                                                <li><a href="product-sidebar.html">product sidebar</a></li>
                                                <li><a href="product-grouped.html">product grouped</a></li>
                                                <li><a href="variable-product.html">product variable</a></li>
                                                <li><a href="product-countdown.html">product countdown</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li class="menu-item-has-children">
                                    <a href="#">blog</a>
                                    <ul class="sub-menu">
                                        <li><a href="blog.html">blog</a></li>
                                        <li><a href="blog-details.html">blog details</a></li>
                                        <li><a href="blog-fullwidth.html">blog fullwidth</a></li>
                                        <li><a href="blog-sidebar.html">blog sidebar</a></li>
                                        <li><a href="blog-no-sidebar.html">blog no sidebar</a></li>
                                    </ul>

                                </li>
                                <li class="menu-item-has-children">
                                    <a href="#">pages </a>
                                    <ul class="sub-menu">
                                        <li><a href="about.html">About Us</a></li>
                                        <li><a href="services.html">services</a></li>
                                        <li><a href="faq.html">Frequently Questions</a></li>
                                        <li><a href="">contact</a></li>
                                        <li><a href="login.html">login</a></li>
                                        <li><a href="404.html">Error 404</a></li>
                                        <li><a href="compare.html">compare</a></li>
                                        <li><a href="coming-soon.html">coming soon</a></li>
                                    </ul>
                                </li>
                                <li class="menu-item-has-children">
                                    <a href="my-account.html">my account</a>
                                </li>
                                <li class="menu-item-has-children">
                                    <a href="portfolio.html">portfolio</a>
                                </li>
                                <li class="menu-item-has-children">
                                    <a href=""> Contact Us</a> 
                                </li>
                            </ul>
                        </div>
                        <div class="Offcanvas_footer">
                            <span><a href="#"><i class="fa fa-envelope-o"></i> info@yourdomain.com</a></span>
                            <ul>
                                <li class="facebook"><a href="#"><i class="fa fa-facebook"></i></a></li>
                                <li class="twitter"><a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li class="pinterest"><a href="#"><i class="fa fa-pinterest-p"></i></a></li>
                                <li class="google-plus"><a href="#"><i class="fa fa-google-plus"></i></a></li>
                                <li class="linkedin"><a href="#"><i class="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--Offcanvas menu area end-->
    
    <header>
        <div class="main_header" >
            <!--header top start-->
            <div class="header_top" style="background-color:#eb6435; color:white">
                <div class="container">  
                    <div class="row align-items-center">
                        <div class="col-lg-4 col-md-4">
                            <div class="header_account">
                                <ul>
                                    
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-8 col-md-9">
                            <div class="top_right text-right">
                                <div class="header_support">
                                   <p><i class="icon ion-android-alarm-clock"></i> Commandé avant 19h, expédié aujourd'hui - Support: <a href="tel:+0123456789">0123456789</a></p>
                                </div>
                                <div class="header_account">
                                    <ul>
                                        <li class="top_links"><i class="ion-gear-a"></i><a href="#" v-if="user"> {{user.prenoms}} {{user.nom}}</a> <i class="ion-chevron-down"></i>
                                            <ul class="dropdown_links">
                                                <li v-if="user != null"><router-link to="/mon-compte">Mon compte</router-link></li>
                                                <li v-if="user == null"><router-link to="/connexion">Se connecter</router-link></li>
                                                <li v-if="user == null"><router-link to="/inscription">S'inscrire</router-link></li>
                                                <li v-if="user != null"><a @click="deconnexion">Se deconnecter</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>   
                        </div>
                    </div>
                </div>
            </div>
            <!--header top start-->
            <!--header middel start-->
            <div class="header_middle sticky-header" >
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-3 col-md-6">
                            <div class="logo">
                                <a href=""><img src="assets/logo1.jpg" width="180" alt=""></a>
                            </div>
                        </div>
                        <div class="col-lg-9 col-md-12">
                            <div class="main_menu menu_position text-right"> 
                                <nav>  
                                    <ul>
                                        <li><a class="active"  href="/">Accueil</a>
                                        </li>
                                        <li class="mega_items"><a @click="$router.push('/shop/'+categories[0].slug)">Produits<i class="fa fa-angle-down"></i></a> 
                                            <div class="mega_menu">
                                                <ul class="mega_menu_inner">
                                                    <li v-for="(categorie,index) in categories" :key="index" style="color:black" ><a @click="$router.push('/shop/'+categorie.slug)">{{categorie.libelle}}</a>
                                                        <ul>
                                                            <li v-for="(child,index) in categorie.child" :key="index" style="color:black" ><router-link :to="'/shop/'+child.slug">{{child.libelle}}</router-link></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <!-- <li><router-link to="/portfolio">Portfolio</router-link></li> -->
                                        <li><router-link to="/contact"> Contacts</router-link></li>
                                    </ul>  
                                </nav> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="header_bottom">
                <div class="container" >
                    <div class="row align-items-center" >
                        <div class="col-lg-3 col-md-12">
                        </div>
                        <div class="col-lg-9 col-md-9">
                            <div class="bottom_right">
                                <div class="search_container">
                                   <form @submit="$router.push('/shop/materiel-informatique')" >
                                       <div class="hover_category" >
                                            <select class="select_option" @change="$router.push('/shop/'+choosecat)" v-model="choosecat" name="select" id="categori2">
                                                <option selected value="1">Toutes categories</option>
                                                <option v-for="(categorie,index) in categories" :key="index" :value="categorie.slug">{{categorie.libelle}}</option>
                                            </select>                        
                                       </div>
                                        <div class="search_box">
                                            <input placeholder="Recherche produit..." type="text">
                                            <button type="submit" style="background-color:#eb6435; color:white">Recherche</button> 
                                        </div>
                                    </form>
                                </div>
                                <div class="mini_cart_wrapper">
                                    <router-link to="/panier" class="p-0" style="background-color:#eb6435; color:white">
                                    <!-- <a href="javascript:void(0)" > -->
                                       <span class="cart_icon p-1">
                                           <i class="ion-android-cart"></i>
                                       </span>
                                        <span class="cart_title">
                                            <span class="cart_quantity">{{cartUpdate.length}} Produits 	</span>
                                            <span class="cart_price">{{totalRequest}} cfa</span>
                                        </span>
                                    <!-- </a> -->
                                    </router-link> 
                                    <!--mini cart-->
                                     <div class="mini_cart">
                                        <div class="mini_cart_inner" >
                                            <div v-for="(item,index) in cartUpdate" :key="index" class="cart_item">
                                               <div class="cart_img">
                                                   <a href="#" ><img :src="baseUrl+item.product.images[0]" alt=""></a>
                                               </div>
                                                <div class="cart_info">
                                                    <a href="#">{{item.libelle}} </a>
                                                    <p>Qte: {{item.quantity}} X <span> {{item.price}} Fcfa </span></p>    
                                                </div>
                                                <div class="cart_remove">
                                                    <a href="#" @click="removeItem(item.id)"><i class="ion-android-close"></i></a>
                                                </div>
                                            </div>
                                            <div class="mini_cart_table">
                                               
                                                <div class="cart_total mt-10">
                                                    <span>total:</span>
                                                    <span class="price">{{totalRequest}} Fcfa</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mini_cart_footer">
                                           <div class="cart_button">
                                                <router-link to="/panier">Voir panier</router-link> 
                                            </div>
                                            <div class="cart_button">
                                                <router-link to="/caisse">Commander</router-link>
                                            </div>

                                        </div>

                                    </div>
                                    <!--mini cart end-->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </header>
</template>
<script>
import axios from 'axios'
export default {
    name: 'Header', 
    props:['cartUpdate'],
    data(){
        return{
            choosecat:1,
            panier: [],
            categories:[],
            baseUrl:'',
            user:null
        }
    },
    computed: {
        totalRequest() {
            console.log('header', this.cartUpdate)
            if (this.cartUpdate && this.cartUpdate.length > 0) {
                return this.cartUpdate.reduce((acc, item) => acc + (item.price * item.quantity), 0);
            }else{
                return 0
            }

        }
    },
    mounted(){
        
        this.getCart()
        this.baseUrl = this.$store.state.baseUrl
        this.user = JSON.parse(localStorage.getItem('user'))
        this.getCategories()
        
    },
    methods:{
        getCart(){
            let app = this
            this.$store.dispatch('getCart').then((response)=>{
                console.log('cart',response)
                if (response.state) {
                    app.panier = response
                }
                
                console.log('cart',response)
            }).catch(()=>{
                
            })

            this.$emit('updateCart',app.panier)
        },

        getCategories(){
            axios.get('/product-types-parent')
            .then(res =>{
                this.categories = res.data
            })
        },
        removeItem(id){
            axios.delete('/remove-cart-item/'+id)
            .then(res => {
                console.log('product Type',res)
                this.getCart()
            })
            .catch(err =>{
                console.log(err)
            })
        },
        deconnexion(){
            axios.get('https://igp-auth.lce-ci.com/api/auth/logout')
            .then(res =>{
                if (res.data.status) {
                    localStorage.removeItem('token')
                    localStorage.setItem('user',null)
                    window.location.href = '/';
                }
            })
            this.user = JSON.parse(localStorage.getItem('user'))
        },
    }
}

</script>
<style scoped>

</style>