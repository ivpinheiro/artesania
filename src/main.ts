import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

/**
 * Bootstrap import  
 * */ 
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

/**
 * Font Awesome import  
 * */ 
import FontAwesomeIcon from "@/utilities/FontAwesomeIcons";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(bootstrap)
app.component("FontAwesomeIcon", FontAwesomeIcon)
app.mount('#app')