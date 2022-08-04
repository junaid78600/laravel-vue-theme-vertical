import Auth from './authRouter'
import Dashboard from './dashboardRouter'
import { createRouter, createWebHistory} from 'vue-router';


const routes = [
    ...Auth,
    ...Dashboard
]

const router = createRouter({
    history:createWebHistory(),
    routes
 
});

export default router;  