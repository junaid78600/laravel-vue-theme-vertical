<template>
        <div >
            <body>
              
                <div class="account-pages my-5 pt-sm-5">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-md-8 col-lg-6 col-xl-5">
                                <div class="card overflow-hidden">
                                    <div class="bg-soft-primary">
                                        <div class="row">
                                            <div class="col-7">
                                                <div class="text-primary p-4">
                                                    <h5 class="text-primary">Welcome Back !</h5>
                                                    <p>Sign in to continue to Notension.</p>
                                                </div>
                                            </div>
                                            <div class="col-5 align-self-end">
                                                <img src="theme_assets/images/profile-img.png" alt="" class="img-fluid">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-body pt-0"> 
                                        <div>
                                            <a href="index.html">
                                                <div class="avatar-md profile-user-wid mb-4">
                                                    <span class="avatar-title rounded-circle bg-light">
                                                        <img src="theme_assets/images/logo.svg" alt="" class="rounded-circle" height="34">
                                                    </span>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="p-2">
                                            <form class="form-horizontal" action="https://themesbrand.com/skote/layouts/vertical/index.html">
                
                                                <div class="form-group">
                                                    <label for="username">Username</label>
                                                    <input type="text" class="form-control" id="username" placeholder="Enter username">
                                                </div>
                        
                                                <div class="form-group">
                                                    <label for="userpassword">Password</label>
                                                    <input type="password" class="form-control" id="userpassword" placeholder="Enter password">
                                                </div>
                        
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" id="customControlInline">
                                                    <label class="custom-control-label" for="customControlInline">Remember me</label>
                                                </div>
                                                
                                                <div class="mt-3">
                                                    <button class="btn btn-primary btn-block waves-effect waves-light" type="submit">Log In</button>
                                                </div>
                    
                                                <div class="mt-4 text-center">
                                                    <router-link to="/forget"><i class="mdi mdi-lock mr-1"></i> Forgot your password?</router-link>
                                                </div>
                                            </form>
                                        </div>
                    
                                    </div>
                                </div>
                                <div class="mt-5 text-center">
                                    <p>Don't have an account ? <router-link to="/signup"> Signup now </router-link> </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </body>
        </div>
</template>
