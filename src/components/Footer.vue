<template>
    <footer class="footer_widgets">

        <div class="footer_top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-8 col-sm-12">
                        <div class="widgets_container contact_us">
                           <h3>Contactez nous</h3>
                            <div class="footer_contact">
                                <p><span>Addresse:</span> Riviera BONOUMIN LAURIER 6 VILLA N°151 – Cocody</p>
                                <p><span>Phone:</span> <a href="tel:0123456789">+225 27 22 49 95 04</a></p>
                                <p><span>Fax:</span> <a href="tel:0123456789">+225 27 22 49 95 04</a></p>
                                <p><span>Email:</span> <a href="#">info@igp.ci</a></p>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-6">
                        <div class="widgets_container widget_menu">
                            <h3>Informations</h3>
                            <div class="footer_menu">
                                <ul>
                                    <li><router-link to="/">Accueil</router-link></li>
                                    <li><router-link to="/shop/materiel-informatique"> Produits</router-link></li>
                                    <li><router-link to="/portfolio">Portfolio</router-link></li>
                                    <li><router-link to="/contact"> Contacts</router-link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-6">
                        <div class="widgets_container widget_menu">
                            <h3>Mon compte</h3>
                            <div class="footer_menu">
                                <ul>
                                    <li><router-link to="/cart">Panier</router-link></li>
                                    <li><router-link to="/caisse">Commande</router-link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer_bottom">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6">
                        <div class="copyright_area">
                          <p>&copy; 2021 <span class="text-uppercase"></span>Developped by <a target="_blank" href="https://www.lce-ci.com/">LCE</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
    </footer>
</template>