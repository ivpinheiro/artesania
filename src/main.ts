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
import FontAwesomeIcon from "@/utilities/fontawesome-icons.ts";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(bootstrap)
app.component("FontAwesomeIcon", FontAwesomeIcon)
app.mount('#app')

function fontSizeController() {
    const increaseFontButton = document.getElementById("increase-font-button");
    const decreaseFontButton = document.getElementById("decrease-font-button");
    increaseFontButton.addEventListener("click", function () {
      const elementsWithTextClass = document.querySelectorAll(
        "a, p, h1, h2, h3, h4, h5, h6, span, .badge, .buttonPrimary, .btn"
      );
      elementsWithTextClass.forEach(function (element) {
        const currentFontSize = window.getComputedStyle(element).fontSize;
        const currentSizeNumeric = parseFloat(currentFontSize);
        const newSize = currentSizeNumeric + 2;
        element.style.fontSize = newSize + "px";
      });
    });
  
    decreaseFontButton.addEventListener("click", function () {
      const elementsWithTextClass = document.querySelectorAll(
        "a, p, h1, h2, h3, h4, h5, h6, span, .badge, .buttonPrimary, .btn"
      );
      elementsWithTextClass.forEach(function (element) {
        const currentFontSize = window.getComputedStyle(element).fontSize;
        const currentSizeNumeric = parseFloat(currentFontSize);
        const newSize = currentSizeNumeric - 2;
        element.style.fontSize = newSize + "px";
      });
    });
  }
  
  fontSizeController();