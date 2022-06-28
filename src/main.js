import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { Router } from './Router/Routers'
import { Store } from './State-manegement/Store'


createApp(App)
    .use(Router)
    .use(Store)
    .mount('#app')
