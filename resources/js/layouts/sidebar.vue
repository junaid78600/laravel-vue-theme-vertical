<template >
   <div class="vertical-menu">

    <div data-simplebar class="h-100">

        <!--- Sidemenu -->
        <div id="sidebar-menu">
            <!-- Left Menu Start -->
            <ul class="metismenu list-unstyled" id="side-menu">
                <li class="menu-title">Menu</li>

                <li>
                    <router-link to="/dashboard">
                        <i class="bx bx-home-circle"></i><span class="badge badge-pill badge-info float-right">3</span>
                        <span>Dashboard</span>
                   </router-link>
                </li>


                <li class="menu-title">Apps</li>


                <li>
                    <a href="javascript: void(0);" class="has-arrow waves-effect">
                        <i class="bx bx-store"></i>
                        <span>Ecommerce</span>
                    </a>
                    <ul class="sub-menu" aria-expanded="false">
                        <li><a href="ecommerce-products.html">Products</a></li>
                        <li><a href="ecommerce-product-detail.html">Product Detail</a></li>
                    </ul>
                </li>

              

                <li class="menu-title">Pages</li>

                <li>
                    <a href="javascript: void(0);" class="has-arrow waves-effect">
                        <i class="bx bx-user-circle"></i>
                        <span>Authentication</span>
                    </a>
                    <ul class="sub-menu" aria-expanded="false">
                        <li> <router-link to="/login">Login </router-link></li>
                        <li> <router-link to="/signup">Register </router-link></li>
                     
                    </ul>
                </li>



            </ul>
        </div>
        <!-- Sidebar -->
    </div>
</div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>