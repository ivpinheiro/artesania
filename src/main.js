import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/** 
 * Font Awesome Icon
 */
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'

/** 
 * Bootstrap CSS, JS
 */
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'

import './styles.css'

createApp(App).use(store).use(router).mount('#app')

function fontSizeController() {
    const increaseFontButton = document.getElementById("increase-font-button")
    const decreaseFontButton = document.getElementById("decrease-font-button")
    increaseFontButton.addEventListener("click", function () {
        const elementsWithTextClass = document.querySelectorAll("p, h1, h2, h3, h4, span, .badge, .buttonPrimary, .btn")
        elementsWithTextClass.forEach(function (element) {
            const currentFontSize = window.getComputedStyle(element).fontSize
            const currentSizeNumeric = parseFloat(currentFontSize)
            const newSize = currentSizeNumeric + 2
            element.style.fontSize = newSize + "px"
        })
    })

    decreaseFontButton.addEventListener("click", function () {
        const elementsWithTextClass = document.querySelectorAll("p, h1, h2, h3, h4, span, .badge, .buttonPrimary, .btn")
        elementsWithTextClass.forEach(function (element) {
            const currentFontSize = window.getComputedStyle(element).fontSize
            const currentSizeNumeric = parseFloat(currentFontSize)
            const newSize = currentSizeNumeric - 2
            element.style.fontSize = newSize + "px"
        })
    })
}

fontSizeController()