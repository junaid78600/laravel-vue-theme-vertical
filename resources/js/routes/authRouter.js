
import Login from '../pages/Auth/login.vue';
import Register from '../pages/Auth/signup.vue';
import Forget from '../pages/Auth/forget.vue';

const routes = [
    {
        name:'Login',
        component: Login,
        path:"/login",
    },
    {
        name:'Register',
        component: Register,
        path:"/signup",
    },
    {
        name:'Forget',
        component: Forget,
        path:"/forget",
    },
]



export default routes;  
