<template>
        <!--breadcrumbs area start-->
    <div class="breadcrumbs_area mt-45">
        <div class="container">   
            <div class="row">
                <div class="col-12">
                    <div class="breadcrumb_content">
                        <ul>
                            <li><a href="">home</a></li>
                            <li>product details</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>         
    </div>
    <!--breadcrumbs area end-->
    
    <!--product details start-->
    <div class="product_details mt-45 mb-50">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6">
                    <div class="product-details-tab" v-if="article.images">
                        <div id="img-1" class="zoomWrapper single-zoom">
                            <a href="#">
                                <img     id="zoom1" :src="baseUrl+article.images[0]" data-zoom-image="assets/img/product/productbig5.jpg" alt="big-1">
                            </a>
                        </div>
                        <div class="single-zoom-thumb" >
                            <ul class="s-tab-zoom owl-carousel single-product-active loop" id="gallery_01">
                                <li v-for="(image,index) in article.images" :key="index">
                                    <a href="" class="elevatezoom-gallery active" data-update="" data-image="assets/img/product/productbig4.jpg" data-zoom-image="assets/img/product/productbig4.jpg">
                                        <img :src="baseUrl+image" alt="zo-th-1"/>
                                    </a>
                                </li>
                                <!-- <li >
                                    <a  class="elevatezoom-gallery active" data-update="" data-image="assets/img/product/productbig4.jpg" data-zoom-image="assets/img/product/productbig4.jpg">
                                        <img v-if="article.images" :src="baseUrl+article.images[0]" alt="zo-th-1"/>
                                    </a>
                                </li>
                                <li >
                                    <a  class="elevatezoom-gallery active" data-update="" data-image="assets/img/product/productbig1.jpg" data-zoom-image="assets/img/product/productbig1.jpg">
                                        <img v-if="article.images" :src="baseUrl+article.images[1]" alt="zo-th-1"/>
                                    </a>

                                </li>
                                <li >
                                    <a  class="elevatezoom-gallery active" data-update="" data-image="assets/img/product/productbig2.jpg" data-zoom-image="assets/img/product/productbig2.jpg">
                                        <img v-if="article.images" :src="baseUrl+article.images[2]" alt="zo-th-1"/>
                                    </a>

                                </li>
                                <li >
                                    <a  class="elevatezoom-gallery active" data-update="" data-image="assets/img/product/productbig3.jpg" data-zoom-image="assets/img/product/productbig3.jpg">
                                        <img v-if="article.images" :src="baseUrl+article.images[3]" alt="zo-th-1"/>
                                    </a>

                                </li> -->
                                <!-- <div class="owl-stage-outer">
                                    <div  class="owl-stage">
                                        <div  class="owl-item">
                                            <a class="nav-link" data-bs-toggle="tab"  href="#tab0" role="tab" aria-controls="tab0" aria-selected="false">
                                                <img v-if="article.images" src="/assets/img/product/productbig4.jpg" alt="">
                                            </a>
                                        </div>
                                        <div  class="owl-item">
                                            <a class="nav-link" data-bs-toggle="tab"  href="#tab1" role="tab" aria-controls="tab1" aria-selected="false">
                                                <img v-if="article.images" src="/assets/img/product/productbig4.jpg" alt="">
                                            </a>
                                        </div>
                                        <div  class="owl-item">
                                            <a class="nav-link" data-bs-toggle="tab" href="#tab2" role="tab" aria-controls="tab2" aria-selected="false">
                                                <img v-if="article.images" src="/assets/img/product/productbig4.jpg" alt="">
                                            </a>
                                        </div>
                                        <div  class="owl-item">
                                            <a class="nav-link" data-bs-toggle="tab"  href="#tab3" role="tab" aria-controls="tab3" aria-selected="false">
                                                <img v-if="article.images" src="/assets/img/product/productbig4.jpg" alt="">
                                            </a>
                                        </div>
                                    </div>
                                </div> -->
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="product_d_right">
                       <!-- <form action="#"> -->
                            <h3><a href="#">{{article.libelle}}</a></h3>
                            
                            <div class="product_rating">
                               <ul>
                                   <li v-for="rate in article.start" :key="rate"><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                               </ul>
                           </div>
                            <div class="price_box">
                                <span class="current_price">{{article.price}}</span>
                                <span class="old_price">{{Number(article.price-(article.price*article.discount)/100)}} Fcfa</span>
                                
                            </div>
                            <div class="product_desc">
                                <p>{{article.description}}</p>
                            </div>
                            
                            <div class="product_variant quantity">
                                <label>quantité</label>
                                <input min="1"  v-model="article.quantity" type="number">
                                <button class="button" type="submit" @click="addToPanier(article)">Ajouter au panier</button>  
                            </div>
                            <div class="product_meta" v-if="article.type">
                                <span>Categorie: <a href="#">{{article.type.libelle}}</a></span>
                            </div>
                        <!-- </form> -->
                    </div>
                </div>
            </div>
        </div>    
    </div>
    <!--product details end-->
    
    <!--product info start-->
    <div class="product_d_info mb-45">
        <div class="container">   
            <div class="row">
                <div class="col-12">
                    <div class="product_d_inner">   
                        <div class="product_info_button">    
                            <ul class="nav" role="tablist">
                                <li >
                                    <a class="active" data-bs-toggle="tab" href="#info" role="tab" aria-controls="info" aria-selected="false">Description</a>
                                </li>
                                <li>
                                     <a data-bs-toggle="tab" href="#sheet" role="tab" aria-controls="sheet" aria-selected="false">Specification</a>
                                </li>
                                <li>
                                   <a data-bs-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false">Avis (1)</a>
                                </li>
                            </ul>
                        </div>
                        <div class="tab-content">
                            <div class="tab-pane fade show active" id="info" role="tabpanel" >
                                <div class="product_info_content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.</p>
                                    <p>Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget.</p>
                                </div>    
                            </div>
                            <div class="tab-pane fade" id="sheet" role="tabpanel" >
                                <div class="product_d_table">
                                   <form action="#">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td class="first_child">Compositions</td>
                                                    <td>Polyester</td>
                                                </tr>
                                                <tr>
                                                    <td class="first_child">Styles</td>
                                                    <td>Girly</td>
                                                </tr>
                                                <tr>
                                                    <td class="first_child">Properties</td>
                                                    <td>Short Dress</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </form>
                                </div>
                                <div class="product_info_content">
                                    <p>Fashion has been creating well-designed collections since 2010. The brand offers feminine designs delivering stylish separates and statement dresses which have since evolved into a full ready-to-wear collection in which every item is a vital part of a woman's wardrobe. The result? Cool, easy, chic looks with youthful elegance and unmistakable signature style. All the beautiful pieces are made in Italy and manufactured with the greatest attention. Now Fashion extends to a range of accessories including shoes, hats, belts and more!</p>
                                </div>    
                            </div>

                            <div class="tab-pane fade" id="reviews" role="tabpanel" >
                                <div class="reviews_wrapper">
                                    <h2>1 review for Donec eu furniture</h2>
                                    <div class="reviews_comment_box" v-for="(art,index) in article.rate" :key="index">
                                        <div class="comment_thmb">
                                            <img src="assets/img/blog/comment2.jpg" alt="">
                                        </div>
                                        <div class="comment_text">
                                            <div class="reviews_meta">
                                                <div class="product_rating">
                                                   <ul>
                                                       <li v-for="n in Number(art.rate)" :key="n"><a href=""><i class="fa fa-star" aria-hidden="true"></i></a></li>
                                                   </ul>
                                                </div>
                                                <p><strong>admin </strong>- {{art.created_at}}</p>
                                                <span>{{art.message}}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="comment_title">
                                        <h2>Mettre un avis </h2>
                                        <p>Votre adresse email ne sera pas publiée. les champs requis sont indiqués </p>
                                    </div>
                                    <div class="product_rating mb-10">
                                       <h3>Vos notes</h3>
                                        <ul>
                                           <li><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                                           <li><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                                           <li><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                                           <li><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                                           <li><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                                       </ul>
                                    </div>
                                    <div class="product_review_form">
                                        <form action="#">
                                            <div class="row">
                                                <div class="col-12">
                                                    <label for="review_comment">Votre avis</label>
                                                    <textarea name="comment" id="review_comment" ></textarea>
                                                </div> 
                                                 
                                            </div>
                                            <button type="submit">Envoyer</button>
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
    <!--product info end-->
    
    <!--product area start-->
    <section class="product_area related_products">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section_title">
                        <h2>Produits connexes	</h2>
                    </div>
                </div>
            </div> 
            <div class="row" v-if="productConnexes.length > 0 ">
                <div class="product_carousel product_column4 owl-carousel loop">
                   <div class="col-lg-3" v-for="(productCo,index) in productConnexes" :key="index">
                        <article class="single_product">
                            <figure>
                               <div class="product_name">
                                   <h4><a href=""> {{productCo.libelle}} </a></h4>
                               </div>
                               <div class="product_rating">
                                   <ul>
                                        <li v-for="n in productCo.start" :key="n"><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                                    </ul>
                               </div>
                                <div class="product_thumb">
                                    <a class="primary_img" href=""><img :src="baseUrl+productCo.images[0]" alt=""></a>
                                    <div class="label_product">
                                        <span class="label_sale">Vente!</span>
                                    </div>
                                    <div class="quick_button">
                                        <a href="#" data-bs-toggle="modal" data-bs-target="#modal_box"  title="quick view"> Achat Rapide</a>
                                    </div>
                                </div>
                                <div class="product_footer">
                                    <div class="price_box"> 
                                        <span class="old_price">{{Number(productCo.price)}}</span> 
                                        <span class="current_price">{{Number(productCo.price - (productCo.price*productCo.discount)/100 )}}</span>
                                    </div>
                                    <div class="action_links">
                                         <ul>
                                            <li class="add_to_cart"><a @click="addToPanier(productCo)" title="Ajouter au panier">Ajouter au panier</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </figure>
                        </article> 
                    </div>
                </div>  
            </div>   
        </div>
    </section>
    <section class="product_area upsell_products">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section_title">
                        <h2>PRODUITS SUPPLÉMENTAIRES</h2>
                    </div>
                </div>
            </div> 
            <div class="row" v-if="bestseller.length>0">
                <div class="product_carousel product_column4 loop owl-carousel">
                    <div class="col-lg-3" v-for="(best,index) in bestseller" :key="index">
                        <article class="single_product">
                            <figure>
                               <div class="product_name">
                                   <h4><router-link :to="'/'+best.id+'/detail-produit'">{{best.libelle}}</router-link></h4>
                               </div>
                               <div class="product_rating">
                                   <ul>
                                        <li v-for="n in best.start" :key="n"><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>
                                    </ul>
                               </div>
                                <div class="product_thumb">
                                    <a class="primary_img" href=""><img :src="baseUrl+best.images[0]" alt=""></a>
                                    <div class="label_product">
                                        <span class="label_sale">Vente !</span>
                                    </div>
                                    <div class="quick_button">
                                        <a href="#" data-bs-toggle="modal" data-bs-target="#modal_box"  title="quick view"> Quick View</a>
                                    </div>
                                </div>
                                <div class="product_footer">
                                    <div class="price_box"> 
                                        <span class="old_price">{{Number(best.price)}}</span> 
                                        <span class="current_price">{{Number(best.price - (best.price*best.discount)/100 )}}</span>
                                    </div>
                                    <div class="action_links">
                                         <ul>
                                            <li class="add_to_cart"><a href="" title="Ajouter au panier">Ajouter au panier</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </figure>
                        </article>   
                    </div>
                </div> 
            </div>  
        </div>
    </section>
</template>
<script>

import axios from 'axios'

export default {

    components: {

    },
    data(){
        return {
            baseUrl: '',
            article: {},
            article_id: 0,
            cart:[],
            productConnexes:[],
            bestseller:[]
        }
    },
    mounted(){
        this.dataarticle_id = this.$route.params.id
        this.getArticle()
        this.getCart()
        this.getBestSeller()
        this.baseUrl = this.$store.state.baseUrl
    },
    methods: {
            getArticle(){
                let app =  this
                axios.get('products/'+this.$route.params.id)
                .then(res => {
                    console.log('yeyeyeyey',res.data)
                    this.getProduits(res.data.type.slug)
                    let article = res.data
                    let images = []
                    let photo = article.photo
                    images = photo.split(';')
                    app.article = article
                    app.article.quantity = 1
                    app.article.images = images.slice(0,images.length-1)
                })
                .catch(err => {
                    console.log(err)
                })
            },
            getCart(){
                    let app = this
                this.$store.dispatch('getCart').then((response)=>{
                    app.cart = response
                }).catch(()=>{
                    
                })
            },
            addToPanier(productCart){
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
            },
            getProduits(slug){

                axios.get('/products-type-slug/'+slug)
                .then(res => {
                    console.log(res.data)
                    this.productConnexes = res.data
                    this.productConnexes.forEach(product =>{
                        let images = []
                        product.quantity=1
                        let photo = product.photo
                        images = photo.split(';')
                        product.images = images.slice(0,images.length-1)
                    })

                })
                .catch(err =>{
                    console.log(err)
                })
            },
            getBestSeller(){
                let app = this
                axios.get('/bestseller')
                .then(res => {
                    console.log('best', res.data)
                    res.data.forEach(product =>{
                        let images = []
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
    }

}
</script>
