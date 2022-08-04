require('./bootstrap')
import { createApp } from 'vue'
import router  from './routes/index';
import App from './layouts/App'

createApp(App).use(router).mount('#app');


