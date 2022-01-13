<template>
  
    <div class="breadcrumbs_area mt-45">
        <div class="container">   
            <div class="row">
                <div class="col-12">
                    <div class="breadcrumb_content">
                        <ul>
                            <li><a href="/">Accueil</a></li>
                            <li>contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>         
    </div>
    <!--breadcrumbs area end-->
    
    <!--contact map start-->
    <div class="contact_map mt-45">
       <div class="map-area">
       </div>
    </div>
    <!--contact map end-->
    
    <!--contact area start-->
    <div class="contact_area">
        <div class="container">   
            <div class="row">
                <div class="col-lg-6 col-md-12">
                   <div class="contact_message content">
                        <h3>Contact</h3>    
                         <p>Soumettez nous votre besoin, notre équipe se chargera de traiter votre demande dans un bref delai.</p>
                        <ul>
                            <li><i class="fa fa-fax"></i>  Address : Riviera BONOUMIN LAURIER 6 VILLA N°151 – Cocody</li>
                            <li><i class="fa fa-phone"></i> <a href="tel:+2252722499504">+225 27 22 49 95 04</a></li>
                            <li><i class="fa fa-envelope-o"></i> <a href="mailto:demo@example.com">info@igp.ci</a></li>
                        </ul>             
                    </div> 
                </div>
                <div class="col-lg-6 col-md-12">
                   <div class="contact_message form">
                        <h3>Ecrivez-nous</h3>   
                        <form id="contact-form" method="POST"  action="https://template.hasthemes.com/rusu/rusu/assets/mail.php">
                            <p>  
                               <label> Nom (requis)</label>
                                <input name="name" placeholder="Name *" type="text"> 
                            </p>
                            <p>       
                               <label>  Email</label>
                                <input name="email" placeholder="Email *" type="email">
                            </p>
                            <p>          
                               <label>  Object</label>
                                <input name="subject" placeholder="Subject *" type="text">
                            </p>    
                            <div class="contact_textarea">
                                <label>  Votre Message</label>
                                <textarea placeholder="Message *" name="message"  class="form-control2" ></textarea>     
                            </div>   
                            <button type="submit"> Envoyer</button>  
                            <p class="form-messege"></p>
                        </form> 

                    </div> 
                </div>
            </div>
        </div>    
    </div>

    
</template>
