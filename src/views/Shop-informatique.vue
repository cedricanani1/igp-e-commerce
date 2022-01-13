<template>
      <div class="shop_banner_area mt-50 mb-45">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="shop_banner_thumb">
                        <img src="/assets/img/bg/banner16.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="breadcrumbs_area">
        <div class="container">   
            <div class="row">
                <div class="col-12">
                    <div class="breadcrumb_content">
                        <ul>
                            <li><a href="">Accueil</a></li>
                            <li>produits</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>         
    </div>
    <div class="shop_area mt-45 mb-50">
        <div class="container">
            <div class="row">
                <div class="col-lg-9 col-md-12">
                    
                    <div class="shop_toolbar_wrapper">
                        
                        <div class=" niceselect_option">
                            <form class="select_option" action="#">
                                <select name="orderby" @change="sortBy(trier.key)" v-model="trier.key" class="form-control" id="short">
                                    <option  :value="0" selected>Trier Par:</option>
                                    <option  :value="1">Prix croissant</option>
                                    <option  :value="2">Prix decroissant</option>
                                    <option :value="3">Nouveautés</option>
                                    <option :value="4">Les plus achetés</option>
                                    <option :value="5">Les plus notés</option>
                                </select>
                            </form>
                        </div>
                    </div>
                    
                    <!--shop toolbar end-->
                    <div v-if="produits.length >0" class="row shop_wrapper">
                        <div v-for="(produit,index) in produits" :key="index" class="col-lg-4 col-md-4 col-12 ">
                            <article class="single_product">
                                <figure>
                                    <div class="product_name">
                                        
                                       <h4><router-link :to="'/'+produit.id+'/detail-produit'">{{produit.libelle}}</router-link></h4>
                                    </div>
                                   <div class="product_rating">
                                       <ul>
                                           <li><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                                           <li><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                                           <li><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                                           <li><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                                           <li><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                                       </ul>
                                   </div>
                                    <div class="product_thumb">
                                        <router-link class="primary_img" :to="'/'+produit.id+'/detail-produit'"><img :src="baseUrl+produit.images[0]" alt=""></router-link>
                                        <div class="label_product">
                                            <span class="label_sale">En Vente!</span>
                                        </div>
                                        <div class="quick_button">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#modal_box" @click="modal(produit)"  title="quick view"> Achat Rapide</a>
                                        </div>
                                    </div>
                                    <div class="product_footer product_content grid_content">
                                        <div class="price_box"> 
                                            <span v-if="produit.discount > 0" class="old_price">{{produit.price}} Fcfa</span> 
                                            <span class="current_price">{{Number(produit.price - (produit.price*produit.discount)/100 )}} Fcfa</span>
                                        </div>
                                        <div class="action_links">
                                             <ul>
                                                <li class="add_to_cart"><a @click="addToPanier(produit)" title="Ajouter au panier" style="color:white;">Ajouter au panier</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product_content list_content">
                                        <div class="product_name">
                                               <h4><a href="product-details.html">Nostrum exercitationem itae neque nulla nec posuere sem</a></h4>
                                        </div>
                                        <div class="product_rating">
                                           <ul>
                                               <li><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                                               <li><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                                               <li><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                                               <li><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                                               <li><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                                           </ul>
                                        </div>
                                        <div class="price_box"> 
                                            <span class="old_price">$86.00</span> 
                                            <span class="current_price">$79.00</span>
                                        </div>
                                        <div class="product_desc">
                                            <p>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ..</p>
                                        </div>
                                        <div class="action_links">
                                             <ul>
                                                <li class="add_to_cart"><a href="cart.html" title="Ajouter au panier">Addss to cart</a></li>

                                                <li class="wishlist"><a href="wishlist.html"  title="Add to Wishlist"><i class="ion-android-favorite-outline"></i></a></li>

                                                <li class="compare"><a href="#" title="Add to Compare"><i class="ion-shuffle"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </figure>
                            </article>
                        </div>
                    </div>
                    <div v-else>
                        <div class="alert alert-danger text-center">
                            pas d'article  de cette categorie
                        </div>
                    </div> 

                    <!-- <div class="">
                        <jw-pagination  :pageSize="10" :items="exampleItems" @changePage="onChangePage" />
                    </div> -->
                </div>
                <div class="col-lg-3 col-md-12">
                   <!--sidebar widget start-->
                    <aside class="sidebar_widget">
                        <div class="widget_list widget_categories">
                            <h3>Categories de produit</h3>
                            <ul>
                                <li class="widget_sub_categories" v-for="(cat,index) in categories" :key="index"><router-link :to="'/shop/'+cat.slug">{{cat.libelle}}</router-link>
                                    <ul class="widget_dropdown_categories">
                                        <li v-for="(cat,index) in cat.child" :key="index"><router-link :to="'/shop/'+cat.slug">{{cat.libelle}}</router-link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="widget_list">
                            <h3>Compare Products</h3>
                            <div class="recent_product_container">
                                <article class="recent_product_list">
                                    <figure>
                                        <div class="product_thumb">
                                            <a href="product-details.html"><img src="/assets/img/product/product1.jpg" alt=""></a>
                                        </div>
                                        <div class="product_content">
                                            <h4><a href="product-details.html">Aliquam lobortis pellentesque nisi</a></h4>
                                            <div class="product_rating">
                                               <ul>
                                                   <li><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                                                   <li><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                                                   <li><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                                                   <li><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                                                   <li><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                                               </ul>
                                           </div>
                                            <div class="price_box">
                                                <span class="old_price">$70.00</span> 
                                                <span class="current_price">$65.00</span> 
                                            </div>
                                        </div>
                                    </figure>
                                </article>
                                <article class="recent_product_list">
                                    <figure>
                                        <div class="product_thumb">
                                            <a href="product-details.html"><img src="/assets/img/product/product2.jpg" alt=""></a>
                                        </div>
                                        <div class="product_content">
                                            <h4><a href="product-details.html">Convallis quam sit vitae sodales neque</a></h4>
                                            <div class="product_rating">
                                               <ul>
                                                   <li><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                                                   <li><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                                                   <li><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                                                   <li><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                                                   <li><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                                               </ul>
                                           </div>
                                            <div class="price_box">
                                                <span class="old_price">$70.00</span> 
                                                <span class="current_price">$65.00</span> 
                                            </div>
                                        </div>
                                    </figure>
                                </article>
                                <article class="recent_product_list">
                                    <figure>
                                        <div class="product_thumb">
                                            <a href="product-details.html"><img src="/assets/img/product/product3.jpg" alt=""></a>
                                        </div>
                                        <div class="product_content">
                                            <h4><a href="product-details.html">Cillum dolore tortor nisl fermentum</a></h4>
                                            <div class="product_rating">
                                               <ul>
                                                   <li><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                                                   <li><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                                                   <li><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                                                   <li><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                                                   <li><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                                               </ul>
                                           </div>
                                            <div class="price_box">
                                                <span class="old_price">$70.00</span> 
                                                <span class="current_price">$65.00</span> 
                                            </div>
                                        </div>
                                    </figure>
                                </article>
                            </div>
                        </div>
                        
                    </aside>
                    <!--sidebar widget end-->
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="modal_box" tabindex="-1" role="dialog"  aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                <div class="modal_body">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-5 col-md-5 col-sm-12">
                                <div class="modal_tab">  
                                    <div class="tab-content product-details-large">
                                        <div v-for="(image,index) in productModal.images" :key="index" class="tab-pane fade" :class="{ ' show active': index == click }" :id="'tab'+index" role="tabpanel" >
                                            <div class="modal_tab_img">
                                                <a href="#"><img :src="baseUrl+image" alt=""></a>    
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div class="modal_tab_button">    
                                        <ul class="nav product_navactive owl-carousel owl-theme owl-loaded loop" role="tablist">
                                            <!-- <li v-for="(image,index) in productModal.images" :key="index">
                                                <a class="nav-link" data-bs-toggle="tab" :href="'#tab'+index" role="tab" :aria-controls="'tab1'+index" aria-selected="false"><img :src="baseUrl+image" alt=""></a>
                                            </li> -->
                                            <!-- <li>
                                                 <a class="nav-link" data-bs-toggle="tab" href="#tab2" role="tab" aria-controls="tab2" aria-selected="false"><img src="/assets/img/product/product6.jpg" alt=""></a>
                                            </li>
                                            
                                               <a class="nav-link button_three" data-bs-toggle="tab" href="#tab3" role="tab" aria-controls="tab3" aria-selected="false"><img src="/assets/img/product/product7.jpg" alt=""></a>
                                            </li>
                                            <li>
                                               <a class="nav-link" data-bs-toggle="tab" href="#tab4" role="tab" aria-controls="tab4" aria-selected="false"><img src="/assets/img/product/product5.jpg" alt=""></a>
                                            </li> -->
                                            <div class="owl-stage-outer">
                                                <div  class="owl-stage">
                                                    <div  class="owl-item">
                                                        <a class="nav-link" data-bs-toggle="tab" @click="clickShow(0)" href="#tab3" role="tab" aria-controls="tab3" aria-selected="false">
                                                            <img v-if="productModal.images" :src="baseUrl+productModal.images[0]" alt="">
                                                        </a>
                                                    </div>
                                                    <div  class="owl-item">
                                                        <a class="nav-link" data-bs-toggle="tab" @click="clickShow(1)" href="#tab3" role="tab" aria-controls="tab3" aria-selected="false">
                                                            <img v-if="productModal.images" :src="baseUrl+productModal.images[1]" alt="">
                                                        </a>
                                                    </div>
                                                    <div  class="owl-item">
                                                        <a class="nav-link" data-bs-toggle="tab" @click="clickShow(2)" href="#tab3" role="tab" aria-controls="tab3" aria-selected="false">
                                                            <img v-if="productModal.images" :src="baseUrl+productModal.images[2]" alt="">
                                                        </a>
                                                    </div>
                                                    <div  class="owl-item">
                                                        <a class="nav-link" data-bs-toggle="tab" @click="clickShow(3)" href="#tab3" role="tab" aria-controls="tab3" aria-selected="false">
                                                            <img v-if="productModal.images" :src="baseUrl+productModal.images[3]" alt="">
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="owl-nav">
                                                <div class="owl-prev"></div>
                                                <div class="owl-next"></div>
                                            </div>

                                        </ul>
                                    </div>    
                                </div>  
                            </div> 
                            <div class="col-lg-7 col-md-7 col-sm-12">
                                <div class="modal_right">
                                    <div class="modal_title mb-10">
                                        <h2>{{productModal.libelle}}</h2> 
                                    </div>
                                    <div class="modal_price mb-10">
                                        <span class="new_price"> {{productModal.price}} Fcfa </span>    
                                        <span class="old_price" >{{Number(productModal.price-(productModal.price*productModal.discount)/100)}} Fcfa </span>    
                                    </div>
                                    <div class="modal_description mb-15">
                                        <p>{{productModal.description}}</p>    
                                    </div> 
                                    <div class="variants_selects">
                                        <div v-if="this.$route.params.slug === 'goodies'">
                                            <div class="variants_size">
                                            <h2>image d'illustration</h2>
                                            <input type="file" name="" ref="photo" id="">
                                            </div>
                                            <div class="variants_color">
                                            <h2>Couleur</h2>
                                            <input type="text" class="form-control" v-model="productModal.color" name="" id="">
                                            
                                            </div>
                                        </div>
                                        <div class="modal_add_to_cart">
                                            <!-- <form action="#"> -->
                                                <input  v-model="productModal.quantity" class="form-control"  min="1" max="100" step="2"  type="number">
                                                <button type="submit" @click="addToPanier(productModal)" class="btn btn-info">Ajouter au panier</button>
                                            <!-- </form> -->
                                        </div>   
                                    </div>    
                                </div>    
                            </div>    
                        </div>     
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
    return {
        /* Pagination Start*/
 
        article: {},
        quantite: 1,
        /* Pagination End*/
        baseUrl: '',
        produits: [],
        categories: [],	
        productModal:{'quantity':1},
        click:0,
        cart:[],
        trier:{},
        sort:{},
        exampleItems:[],
        pageOfItems: [],
    }
  },
  mounted(){
      this.getProduits()
      this.baseUrl = this.$store.state.baseUrl
      this.getCategories()
      this.getCart()
  },
  methods: {
    onChangePage(pageOfItems) {
        // update page of items
        this.pageOfItems = pageOfItems;
    },
    sortBy(trier){
        this.trier.key = trier
        axios.post('/product-filter',this.trier)
        .then(res =>{
            res.data.forEach(product =>{
                let images = []
                product.quantity=1
                let photo = product.photo
                images = photo.split(';')
                product.images = images.slice(0,images.length-1)
            })
            this.produits = res.data
            this.exampleItems = this.produits
            console.log('type',res.data)
        })
    },
    getCategories(){
            axios.get('/product-types')
            .then(res =>{
                this.categories = res.data
                console.log('type',this.categories)
            })
    },
    clickShow(id){
        console.log(id)
        this.click = id
    },
    getProduits(){
        axios.get('/products-type-slug/'+this.$route.params.slug)
        .then(res => {
            this.produits = res.data
            this.trier.key=0
            this.trier.type=this.produits[0].product_type_id
            console.log(this.produits)
            this.produits.forEach(product =>{
                let images = []
                product.quantity=1
                let photo = product.photo
                images = photo.split(';')
                product.images = images.slice(0,images.length-1)
            })
            this.exampleItems = this.produits
            console.log(this.posts)
        })
        .catch(err =>{
            console.log(err)
        })
    },
    articledetail(article){
        this.article = article
    },
    modal(produit){
        this.productModal = produit
    },
    getCart(){
        let app = this
        this.$store.dispatch('getCart').then((response)=>{
            app.cart = response
        }).catch(()=>{
            
        })
    },
    addToPanier(productCart){
        if (!productCart.quantity) {
            this.$swal.fire({
                icon: 'warning',
                title: 'Quantité non defini',
                text: 'Veuillez ajouter une quantité!',
                showConfirmButton: false,
                timer: 1000
            })
        }else{

            let app = this
            productCart.panier = this.cart 
            if (this.$refs.photo) {
                productCart.photo = this.$refs.photo.files[0]
            }     
            
            this.$store.dispatch('addToPanier',productCart).then((response)=>{
                this.getCart()
                if (response.state) {
                    app.$swal.fire({
                            icon: 'success',
                            title: 'Panier',
                            text: 'Article ajouté au panier avec succès !',
                            showConfirmButton: false,
                            timer: 3000
                        }) 
                }
                    
            }).catch(()=>{
                this.$swal.fire({
                        icon: 'warning',
                        title: 'Produit existant',
                        text: 'Ce Produit est deja dans votre panier!',
                        showConfirmButton: false,
                        timer: 3000
                    })
            })
        }
        
    },

  },

}
</script>