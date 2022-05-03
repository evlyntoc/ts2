<template>
    <div class="container-fluid">
        <div class="row no-gutter">
            <!-- The image half -->
            <div class="col-md-6 d-none d-md-flex bg-image"><header class="header">
                <nav class="navbar navbar-expand-lg navbar-light py-3">
                    <div class="container">
                        <!-- Navbar Brand -->
                        <a href="#" class="navbar-brand">
                            <img src="img/Frame 1 (1).png" alt="logo" width="90">
                        </a>
                    </div>
                </nav>
            </header></div>
    
    
            <!-- The content half -->
            <div class="col-md-6  tb2">
                <div class="row d-flex align-items-center tm1">
                    <div class="col tb">
                        <img src="img/arrow_back_ios_24px.png" alt="logo" width="9.73px" height="16.5px" >  <router-link class="tb" to="/mb3">
                   Back
                </router-link>
                    </div>
                    <div class="col ts td">
                     <span>STEP03/03</span>  <P class="">Bank Verification</P>
                    </div>
                  </div>
                <div class="login d-flex align-items-center py-5 tp">
           
                    <form action="#">
                        
                          <div  class="th1">
                            <h2>
                                Complete Your Profile!
                            </h2>
                          </div>
                          <div class="tp1">
                              <p>For the purpose of industry regulations,your details are required.</p>
                          </div>
                          <div class="form-group t">
                                
                            <!-- <div class="form-group t"> -->
                              <label for="exampleInputPassword1">Bank verification number (BVN)</label>
                              
                            </div>
                          <div class="row">

                          
        
                            <!-- Phone Number -->
                            <div class="input-group col-lg-12 mb-4">
                                
                                <div class="input-group-prepend">
                                    <span class="input-group-text bg-white px-4 border-md border-right-0">
                                        <!-- <i class="fa fa-phone-square text-muted"></i> -->
                                        <img src="img/4 (1).png" alt="logo" width="35px" height="35px">
                                    </span>
                                </div>
                             
                                <input id="phoneNumber" type="tel" name="phone" placeholder="09091234567" class="form-control bg-white border-md border-left-0 pl-3">
                            </div>
        
                           
                        </div>
                  

                             
                              <button type="submit" class="tb1"><a class="tb1" href="/">Save & Continue</a></button>
        
                        
        
                            <!-- Divider Text -->
                            <div class=" tv2">
                                <!-- <div class="border-bottom w-100 ml-5"></div> -->
                                <img src="img/lock_24px.png" alt="logo" ><span>your info is safely secured</span>
                                <!-- <div class="border-bottom w-100 mr-5"></div> -->
                            </div>
        
                        <!-- </div> -->
                    </form>
                   
    
                </div>
            </div><!-- End -->
    
        </div>
    </div>
  
</template>

<script>
export default {

}
</script>

<style>

</style>