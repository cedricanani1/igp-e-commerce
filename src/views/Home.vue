<template>
  
    <section class="slider_section mb-50 mt-20">
        <div class="slider_area owl-carousel">
            <div class="single_slider d-flex align-items-center" style="background-image: url('/assets/img/slider/slider1.jpg');" data-bgimg="/assets/img/slider/slider1.jpg">
               <div class="container">
                   <div class="row">
                       <div class="col-12">
                           <div class="slider_content">
                                <h1>Meilleur materiel <br> 2022</h1>
                                <p>consectetur adipisicing elit. Itaque dolorem, aliquam quos. Molestias dolorum explicabo totam illum itaque sit</p> 
                                <a class="button" href="">Acheter maintenant</a>
                            </div>
                       </div>
                   </div>
               </div>
                
            </div>
            <div class="single_slider d-flex align-items-center" style="background-image: url('/assets/img/slider/slider2.jpg');" data-bgimg="/assets/img/slider/slider2.jpg">
                <div class="container">
                   <div class="row">
                       <div class="col-12">
                           <div class="slider_content">
                                <h1> Bonne collection <br> Collection 2021</h1>
                               <p>consectetur adipisicing elit. Itaque dolorem, aliquam quos. Molestias dolorum explicabo totam illum itaque sit </p>
                                <a class="button" href="">Acheter maintenant</a>
                            </div>
                       </div>
                   </div>
               </div>
            </div>
            <div class="single_slider d-flex align-items-center" style="background-image: url('/assets/img/slider/slider3.jpg');" data-bgimg="/assets/img/slider/slider3.jpg">
                <div class="container">
                   <div class="row">
                       <div class="col-12">
                           <div class="slider_content">
                                <h1>Des accessoires pro <br> ,Pocket , Dungle</h1>
                               <p>consectetur adipisicing elit. Itaque dolorem, aliquam quos. Molestias dolorum explicabo totam illum itaque sit </p>
                                 <a class="button" href="">Acheter maintenant</a>
                            </div>
                       </div>
                   </div>
               </div>
            </div>
        </div>
    </section>
    
    <!--slider area end-->
    
    <!--shipping area start-->
    <div class="shipping_area mb-50">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6">
                    <div class="single_shipping">
                        <div class="shipping_icone">
                            <img src="/assets/img/about/shipping1.png" alt="">
                        </div>
                        <div class="shipping_content">
                            <h4>Livraison gratuite</h4>
                            <p>Livraison gratuite sur toute commande</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="single_shipping">
                        <div class="shipping_icone">
                            <img src="/assets/img/about/shipping2.png" alt="">
                        </div>
                        <div class="shipping_content">
                            <h4>Assistance en ligne 24h/24 et 7j/7</h4>
                            <p>Assistance en ligne 24h/24</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="single_shipping">
                        <div class="shipping_icone">
                            <img src="/assets/img/about/shipping3.png" alt="">
                        </div>
                        <div class="shipping_content">
                            <h4>Retour d'argent</h4>
                            <p>Retour garanti sous 7 jours</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="single_shipping">
                        <div class="shipping_icone">
                            <img src="/assets/img/about/shipping4.png" alt="">
                        </div>
                        <div class="shipping_content">
                            <h4>Remise membre</h4>
                            <p>Une commande de plus de 120,000 Fcfa</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--shipping area end-->
    
    <!--banner area start-->
    <div class="banner_area mb-45">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <figure class="single_banner">
                        <div class="banner_thumb">
                            <a href=""><img src="/assets/img/bg/banner1.jpg" alt=""></a>
                        </div>
                    </figure>
                </div>
                <div class="col-lg-4 col-md-4">
                    <figure class="single_banner">
                        <div class="banner_thumb">
                            <a href=""><img src="/assets/img/bg/banner2.jpg" alt=""></a>
                        </div>
                    </figure>
                </div>
                <div class="col-lg-4 col-md-4">
                    <figure class="single_banner">
                        <div class="banner_thumb">
                            <a href=""><img src="/assets/img/bg/banner3.jpg" alt=""></a>
                        </div>
                    </figure>
                </div>
            </div>
        </div>
    </div>
    <!--banner area end-->
    
     <!--product area start-->
    <div class="product_area deals_product mb-50">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section_title">
                       <h2>Offre du jour</h2>
                    </div>
                </div>
            </div> 
            <div class="row" v-if="produits.length > 0">
                <div class="product_carousel product_column4 owl-carousel loop owl-theme owl-loaded " id="main-slider">
                        <div class="col-lg-3" v-for="(produit,index) in produits" :key="index">
                            <article class="single_product">
                                <figure>
                                    <div class="product_name">
                                    <h4><router-link :to="'/'+produit.id+'/detail-produit'">{{produit.libelle}}</router-link></h4>
                                    </div>
                                    <div class="product_rating">
                                        <ul>
                                            <li v-for="n in produit.start" :key="n"><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                                            
                                        </ul>
                                    </div>

                                    <div class="product_thumb">
                                        <a class="primary_img" ><img :src="baseUrl+produit.images[0]" alt=""></a>
                                        <div class="label_product">
                                            <span class="label_sale">Vente!</span>
                                        </div>
                                        <div class="quick_button">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#modal_box"  title="quick view" @click="modal(produit)"> Aperçu rapide</a>
                                        </div>
                                    </div>
                                    <div class="price_box"> 
                                        <span class="old_price">{{Number(produit.price)}}</span> 
                                        <span class="current_price">{{Number(produit.price - (produit.price*produit.discount)/100 )}}</span>
                                    </div>
                                </figure>
                            </article>
                        </div>
                </div>
            </div>
        </div>
    </div>
    <div class="banner_area mb-50">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6">
                    <figure class="single_banner">
                        <div class="banner_thumb">
                            <a href=""><img src="/assets/img/bg/banner4.jpg" alt=""></a>
                        </div>
                    </figure>
                </div>
                <div class="col-lg-6 col-md-6">
                    <figure class="single_banner">
                        <div class="banner_thumb">
                            <a href=""><img src="/assets/img/bg/banner5.jpg" alt=""></a>
                        </div>
                    </figure>
                </div>
            </div>
        </div>
    </div>
    <!--banner area end-->
    
    <!--product area start-->
    <div class="product_area product_bg mb-45">
        <div class="container">
            <div class="row">
                <div class="col-12">
                   <div class="product_header">
                        <div class="section_title">
                           <h2>Goodies & Materiels</h2>

                        </div>
                        <div class="product_tab_btn">
                            <ul class="nav" role="tablist">
                                <li v-for="(item,index) in categories" :key="index">
                                    <a class="" @click="clickShowTab(index)" :class="{ 'active': index == click }" data-bs-toggle="tab" :href="'#'+item.libelle" role="tab" :aria-controls="item.libelle" aria-selected="true"> 
                                        {{item.libelle}}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> 
            <div class="tab-content">
                <div class="tab-pane fade" v-for="(item,index) in categories" :key="index" :class="{ 'show active': index == click }" :id="item.libelle" role="tabpanel">
                    <div class="row">
                        <div class="product_carousel product_style product_column4 owl-carousel loop">
                            <div class="col-lg-3" v-for="(product,index) in item.product_child" :key="index">
                                <div class="product_items">
                                    <article class="single_product">
                                        <figure>
                                           <div class="product_name">
                                           <h4><router-link :to="'/'+product.id+'/detail-produit'">{{product.libelle}}</router-link></h4>
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
                                                <a class="primary_img" ><img :src="baseUrl+product.images[0]" alt=""></a>
                                                <div class="label_product">
                                                    <span class="label_sale">Vente!</span>
                                                </div>
                                                <div class="quick_button">
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#modal_box"  title="quick view" @click="modal(product)"> Achat Rapide</a>
                                                </div>
                                            </div>
                                            <div class="product_footer">
                                                <div class="price_box"> 
                                                    <span class="old_price">{{Number(product.price)}}</span> 
                                                    <span class="current_price">{{Number(product.price - (product.price*product.discount)/100 )}}</span>
                                                </div>
                                                <div class="action_links">
                                                     <ul>
                                                        <li class="add_to_cart"><a @click="addToPanier(product)" title="Ajouter au panier" style="color:white;">Ajouter au panier</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </figure>
                                    </article>
                                </div>
                            </div>
                        </div> 
                    </div>   
                </div>
                
            </div> 
        </div>
    </div>
    <!--product area end-->
    
    <!--Categories product area start-->
    <div class="categories_product_area mb-50" v-if="categories.length>0">
        <div class="container">
           <div class="row">
               <div class="col-12">
                    <div class="section_title">
                       <h2>Categories</h2>
                    </div>
                </div>
           </div>
            <div class="row categories_margin no-gutters">
                <div class="col-lg-3 col-md-6" v-for="(cat,index) in categories" :key="index">
                    <article class="single_categories_product column1">
                        <figure>
                            <div class="product_thumb">
                                <a  href=""></a>
                                <router-link class="primary_img" :to="'/shop/'+cat.slug"><img :src="'/assets/img/custom-p/product1.jpg'" alt=""></router-link>
                            </div>
                            <div class="categories_product_content">
                                <h4><router-link class="primary_img" :to="'/shop/'+cat.slug">{{cat.libelle}}</router-link></h4>
                                <ul>
                                    <li v-for="(chil,key) in cat.child" :key="key"><router-link class="primary_img" :to="'/shop/'+chil.slug">{{chil.libelle}}</router-link></li>
                                </ul>
                            </div>
                        </figure>
                    </article> 
                </div>
            </div>
        </div>
    </div>
    <!--Categories product area end-->
    
    <!--product area start-->
    <div class="small_product_area product_bg">
        <div class="container">
            <div class="row">
                <div class="col-12">
                   <div class="product_header">
                        <div class="section_title">
                           <h2>Best Seller</h2>
                        </div>
                        <div class="product_tab_btn">
                            
                        </div>
                    </div>
                </div>
            </div> 
            <div class="tab-content">
                <div class="tab-pane fade show active"  v-if="bestseller.length > 0 " id="Watches1" role="tabpanel">
                    <div class="row">
                        <div class="product_carousel small_p_container  product_column3 owl-carousel loop">
                            <div class="col-lg-3" v-for="(best,index) in bestseller" :key="index">
                                <div class="product_items">
                                    <article class="single_product">
                                        <figure>
                                            <div class="product_thumb">
                                                <a class="primary_img" ><img :src="baseUrl+best.images[0]" alt=""></a>
                                            </div>
                                            <div class="product_content">
                                                <div class="product_name">
                                                <h4><router-link :to="'/'+best.id+'/detail-produit'">{{best.libelle}}</router-link></h4>
                                                    </div>
                                                <div class="product_rating">
                                                    <ul>
                                                        <li v-for="n in best.start" :key="n"><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div class="price_box"> 
                                                    <span class="old_price">{{Number(best.price)}}</span> 
                                                    <span class="current_price">{{Number(best.price - (best.price*best.discount)/100 )}}</span>
                                                </div>
                                            </div>
                                        </figure>
                                    </article>
                                </div>
                            </div>
                        </div> 
                    </div>   
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
                <div class="modal_body" v-if="modalShow.images">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-5 col-md-5 col-sm-12">
                                <div class="modal_tab" >  
                                    <div class="tab-content product-details-large">
                                        <div v-for="(image,index) in modalShow.images" :key="index" class="tab-pane fade" :class="[index == Show ? 'active' : '']" :id="'tab'+index" role="tabpanel" >
                                            <div class="modal_tab_img">
                                                <a href="#"><img :src="baseUrl+image" alt=""></a>    
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal_tab_button"  v-if="modalShow.images.length > 0 " >    
                                        <ul class="nav product_navactive loop owl-carousel " role="tablist">
                                            <li v-for="(image,index) in modalShow.images" :key="index">
                                                <a class="nav-link" @click="clickShowModal(index)"  :class="[index == Show ? 'active' : '']" data-bs-toggle="tab" :href="'#tab'+index" role="tab" :aria-controls="'tab'+index" aria-selected="false"><img :src="baseUrl+image" alt=""></a>
                                            </li>
                                        </ul>
                                    </div>    
                                </div>  
                            </div> 
                            <div class="col-lg-7 col-md-7 col-sm-12">
                                <div class="modal_right">
                                    <div class="modal_title mb-10">
                                        <h2>{{modalShow.libelle}}</h2> 
                                    </div>
                                    <div class="modal_price mb-10">
                                        <span class="new_price"> {{modalShow.price}} Fcfa </span>    
                                        <span class="old_price" >{{Number(modalShow.price-(modalShow.price*modalShow.discount)/100)}} Fcfa </span>    
                                    </div>
                                    <div class="modal_description mb-15">
                                        <p>{{modalShow.description}}</p>    
                                    </div> 
                                    <div class="variants_selects">
                                        <div v-if="modalShow.type && modalShow.type.slug == 'goodies'">
                                            <div class="variants_size">
                                            <h2>image d'illustration</h2>
                                            <input type="file" name="" ref="photo" id="">
                                            </div>
                                            <div class="variants_color">
                                            <h2>Couleur</h2>
                                            <input type="text" class="form-control" v-model="modalShow.color" placeholder="couleur" id="">
                                            
                                        </div>
                                        </div>
                                        <div class="modal_add_to_cart form-inline">
                                            <input  v-model="modalShow.quantity" class="form-control col-md-6"  min="1" max="100" step="2" placeholder="Quantité" type="number" required>
                                            <button type="submit" @click="addToPanier(modalShow)" class="btn btn-info col-md-6" v-if="!loading">Ajouter au panier</button>
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
    <!-- <div class="modal fade" id="modal_box" tabindex="-1" role="dialog"  aria-hidden="true">
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
                                        <div class="tab-pane fade show active" role="tabpanel" >
                                            <div class="modal_tab_img">
                                                <a href="#"><img :src="baseUrl+imageshow" alt=""></a>    
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal_tab_button">    
                                        <ul class="nav product_navactive owl-carousel owl-theme owl-loaded loop" role="tablist">
                                            
                                            <div class="owl-stage-outer">
                                                <div  class="owl-stage">
                                                    <div  class="owl-item">
                                                        <a class="nav-link" data-bs-toggle="tab" @click="clickShow(images[0])" href="#tab0" role="tab" aria-controls="tab0" aria-selected="false">
                                                            <img v-if="productModal.images" :src="baseUrl+productModal.images[0]" alt="">
                                                        </a>
                                                    </div>
                                                    <div  class="owl-item">
                                                        <a class="nav-link" data-bs-toggle="tab" @click="clickShow(images[1])" href="#tab1" role="tab" aria-controls="tab1" aria-selected="false">
                                                            <img v-if="productModal.images" :src="baseUrl+productModal.images[1]" alt="">
                                                        </a>
                                                    </div>
                                                    <div  class="owl-item">
                                                        <a class="nav-link" data-bs-toggle="tab" @click="clickShow(images[2])" href="#tab2" role="tab" aria-controls="tab2" aria-selected="false">
                                                            <img v-if="productModal.images" :src="baseUrl+productModal.images[2]" alt="">
                                                        </a>
                                                    </div>
                                                    <div  class="owl-item">
                                                        <a class="nav-link" data-bs-toggle="tab" @click="clickShow(images[3])" href="#tab3" role="tab" aria-controls="tab3" aria-selected="false">
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
                                                <input  v-model="productModal.quantity" class="form-control"  min="1" max="100" step="2"  type="number">
                                                <button type="submit" @click="addToPanier(productModal)" class="btn btn-info">Ajouter au panier</button>
                                        </div>   
                                    </div>    
                                </div>    
                            </div>    
                        </div>     
                    </div>
                </div>    
            </div>
        </div>
    </div> -->
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            cart:[],
            produits:[],
            categories:[],
            baseUrl: '',
            productModal:{'quantity':1},
            imageshow:null,
            click:0,
            Show:0,
            bestseller:[],
            loading:false
        }
    },
    computed: {
        modalShow(){
            return this.productModal
        }
    },
    mounted(){
        this.baseUrl = this.$store.state.baseUrl
        this.getCart()
        this.getProduits()
        this.getProduitsByType()
        this.getBestSeller()
        
    },
    methods: {

        clickShowTab(id){
            this.click = id
        },
        clickShowModal(id){
            this.Show = id
        },
        getProduits(){
            let app = this
            axios.get('/bestrate')
            .then(res => {
                res.data.forEach(product =>{
                    let images = []
                    product.quantity = 1
                    let photo = product.photo
                    images = photo.split(';')
                    product.images = images.slice(0,images.length-1)
                })
                app.produits = res.data
            })
            .catch(err =>{
                console.log(err)
            })
        },
        getBestSeller(){
            let app = this
            axios.post('/bestproduct',{
                status: 'delivered'
            })
            .then(res => {
                res.data.forEach(product =>{
                    let images = []
                    product.quantity=1
                    let photo = product.photo
                    images = photo.split(';')
                    product.images = images.slice(0,images.length-1)
                })
                app.bestseller = res.data
            })
            .catch(err =>{
                console.log(err)
            })
        },
        getProduitsByType(){
            let app = this
            axios.get('/product-types')
            .then(res => {
                res.data.forEach(item =>{
                    item.product_child.forEach(product => {
                        let images = []
                        product.quantity=1
                        let photo = product.photo
                        images = photo.split(';')
                        product.images = images.slice(0,images.length-1)
                    });
                })
                app.categories = res.data
            })
            .catch(err =>{
                console.log(err)
            })
        },
        clickShow(id){
            this.imageshow = id
        },
        modal(produit){
            this.productModal = null
            this.imageshow = produit.images[0]
            this.productModal = produit
            
        },
        getCart(){
            return new Promise((resolve,reject) =>{
                let app = this
                this.$store.dispatch('getCart').then((response)=>{
                    app.cart = response
                    resolve(app.cart)
                }).catch((error)=>{
                    reject(error)
                })
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
                this.loading =  true
                productCart.panier = this.cart 
                if (this.$refs.photo) {
                    productCart.photo = this.$refs.photo.files[0]
                }     
                
                this.$store.dispatch('addToPanier',productCart).then((response)=>{
                    let cat =  this.getCart()
                    cat.then(function(result){
                        app.$emit('updateCart',result)
                    })
                    this.loading =  false
                    if (response.state) {
                        
                        app.$swal.fire({
                            icon: 'success',
                            title: 'Panier',
                            text: 'Article ajouté au panier avec succès !',
                            showConfirmButton: false,
                            timer: 3000
                        }) 
                        
                        
                    }else{
                        this.$swal.fire({
                            icon: 'Attention',
                            title: 'une erreur s`\'est produite',
                            text: response.data.message,
                            showConfirmButton: false,
                            timer: 3000
                        })
                    }
                        
                }).catch((error)=>{
                        console.log(error)
                        this.loading =  false
                        this.$swal.fire({
                            icon: 'warning',
                            title: 'Attention !',
                            text: error.message,
                            showConfirmButton: false,
                            timer: 3000
                        })
                     // this.$router.push('/connexion')
                })
            }
            
        },
    }
}

</script>
