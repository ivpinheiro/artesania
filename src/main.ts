import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

/**
 * Bootstrap import  
 * */
import 'bootstrap/dist/css/bootstrap.css'
import { bootstrap } from 'bootstrap/dist/js/bootstrap.bundle.js'

/**
 * Font Awesome import  
 * */
import FontAwesomeIcon from "@/utilities/FontAwesomeIcons";

const app = createApp(App)

// Create a Pinia instance and use it with the app
const pinia = createPinia();

app.use(pinia)
app.use(router)
app.use(bootstrap)
app.component("FontAwesomeIcon", FontAwesomeIcon)
app.mount('#app')