<template>
    <div class="container-fluid">
        <div class="row no-gutter">
            <!-- The image half -->
            <div class="col-md-6 d-none d-md-flex bg-image"><header class="header">
                <nav class="navbar navbar-expand-lg navbar-light py-3">
                    <div class="container">
                        <!-- Navbar Brand -->
                        <a href="#" class="navbar-brand">
                            <!-- <img src="img/Frame 1 (1).png" alt="logo" width="90"> -->
                        </a>
                    </div>
                </nav>
            </header></div>
    
    
            <!-- The content half -->
            <div class="col-md-6  tb2">
                <div class="row d-flex align-items-center tm1">
                    <div class="col tb">
                        <img src="img/arrow_back_ios_24px.png" alt="logo" width="9.73px" height="16.5px" > <router-link class="tb" to="/">
                   Back
                </router-link> 
                    </div>
                    <div class="col ts td">
                     <span>STEP01/03</span>  <P class="">Personal Info.</P>
                    </div>
                  </div>
                <div class="login d-flex align-items-center py-5 tp">
           
                    <form action="#">
                        
                          <div  class="th1">
                            <h2>
                                Register Individual Account!
                            </h2>
                          </div>
                          <div class="tp1">
                              <p>For the purpose of industry regulations,your details are required.</p>
                          </div>
                          
        
                            <div class="form-group t">
                                <label for="exampleInputEmail1">Your Fullname*</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="invictus innocent">
                              </div>
                              <div class="form-group t">
                                <label for="exampleInputPassword1">Email Address*</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter Email Address">
                              </div>
                              <div class="form-group t">
                                <label for="exampleInputPassword1">Create password*</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                              </div>
                             
                             <div class="form-check t">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                <label class="form-check-label" for="exampleCheck1">I agree to terms and condition</label>
                              </div>
                              <button type="submit" class="tb1"><a  class="tb1" href="/mb3">Register Account </a></button>
        
                        
        
                            <!-- Divider Text -->
                            <div class="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                                <div class="border-bottom w-100 ml-5"></div>
                                <span class="px-2 small text-muted font-weight-bold text-muted tv1"  >or</span>
                                <div class="border-bottom w-100 mr-5"></div>
                            </div>
        
                            <!-- Social Login -->
                            <div class="tb31">
                                <button class=" tb3 "> <img src="img/google.png" alt="logo" width="24px" height="24px" >Register with Google</button>
                                
                                
                            </div>
        
                          
                        <!-- </div> -->
                    </form>
                   
    
                </div>
            </div><!-- End -->
    
        </div>
    </div>
  
</template>