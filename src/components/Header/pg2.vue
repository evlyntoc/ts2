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
                     <p>   <img src="img/arrow_back_ios_24px.png" alt="logo" width="9.73px" height="16.5px" > <router-link class="tb" to="/mb2">
                   Back
                </router-link> </p>
                    </div>
                    <div class="col ts td">
                     <span>STEP02/03</span>  <P class="">Residency Info.</P>
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
                            <label >Phone number</label>
                            
                          </div>
                          <div class="row">

                          
        
                            <!-- Phone Number -->
                            <div class="input-group col-lg-12 mb-4">
                                <div class="input-group-prepend">
                                    <span class="input-group-text bg-white px-4 border-md border-right-0">
                                        <!-- <i class="fa fa-phone-square text-muted"></i> -->
                                        <img src="img/Vector (1).png" alt="logo" width="24px" height="24px">
                                    </span>
                                </div>
                                <select id="countryCode" name="countryCode" style="max-width: 80px" class="custom-select form-control bg-white border-left-0 border-md h-100 font-weight-bold text-muted">
                                    <option value="">+234</option>
                                    <option value="">+10</option>
                                    <option value="">+15</option>
                                    <option value="">+18</option>
                                </select>
                                <input id="phoneNumber" type="tel" name="phone" placeholder="09091234567" class="form-control bg-white border-md border-left-0 pl-3">
                            </div>
        
                           
                        </div>
                            <div class="form-group t">
                                
                              <div class="form-group t">
                                <label for="exampleInputPassword1">Your Address</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Please enter address">
                              </div>
                              <div class="t">
                              <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Country of residence</label>
                              <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                <option selected>Please select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                              <button type="submit" class="tb1"><a class="tb1" href="/mb4">Save & Continue</a></button>
        
                        
        
                            <!-- Divider Text -->
                            <div class=" tv2">
                                <!-- <div class="border-bottom w-100 ml-5"></div> -->
                                <img src="img/lock_24px.png" alt="logo" ><span>your info is safely secured</span>
                                <!-- <div class="border-bottom w-100 mr-5"></div> -->
                            </div>
        
                        </div>
                    </form>
                   
    
                </div>
            </div><!-- End -->
    
        </div>
    </div>
  
<!-- </div> -->
</template>

<script>
export default {

}
</script>

<style>

</style>