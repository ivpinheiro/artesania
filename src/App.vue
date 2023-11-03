<template>
  <div>
    <div class="sticky-top">
      <AcessibilityMenu></AcessibilityMenu>
      <NavBar></NavBar>
    </div>    
    <div class="content">
      <router-view />
    </div>
    <div>
      <FooterComp></FooterComp>
    </div>
  </div>
</template>
<script>
import NavBar from './components/NavBar.vue'
import AcessibilityMenu from './components/AcessibilityMenu.vue'
import FooterComp from './components/FooterComp.vue'

export default {
  name: 'App',
  components: { NavBar, AcessibilityMenu, FooterComp },
  mounted () {
    this.fontSizeController()
    this.highContrast()
  },
  methods: {
    fontSizeController() {
      const increaseFontButton = document.getElementById("increase-font-button")
      const decreaseFontButton = document.getElementById("decrease-font-button")
      increaseFontButton.addEventListener("click", function () {
        const elementsWithTextClass = document.querySelectorAll(
          "a, p, h1, h2, h3, h4, h5, h6, span, .badge, .buttonPrimary, .btn"
        )
        elementsWithTextClass.forEach(function (element) {
          const currentFontSize = window.getComputedStyle(element).fontSize
          const currentSizeNumeric = parseFloat(currentFontSize)
          const newSize = currentSizeNumeric + 2
          element.style.fontSize = newSize + "px"
        })
      })

      decreaseFontButton.addEventListener("click", function () {
        const elementsWithTextClass = document.querySelectorAll(
          "a, p, h1, h2, h3, h4, h5, h6, span, .badge, .buttonPrimary, .btn"
        )
        elementsWithTextClass.forEach(function (element) {
          const currentFontSize = window.getComputedStyle(element).fontSize
          const currentSizeNumeric = parseFloat(currentFontSize)
          const newSize = currentSizeNumeric - 2
          element.style.fontSize = newSize + "px"
        })
      })
    },
    highContrast() {
      // Get the toggle button
      const toggleButton = document.getElementById("toggle-high-contrast")

      // Add a click event listener to the toggle button
      toggleButton.addEventListener("click", function() {
        // Get all elements in the document
        const elements = document.getElementsByClassName("contrast")
        const textElements = document.querySelectorAll(
          "a, p, h1, h2, h3, h4, h5, h6, span, .badge, .buttonPrimary, .btn")

        // Iterate through all elements using forEach
        Array.from(elements).forEach(function(body) {
          // Toggle the "high-contrast" class on each element
          body.classList.toggle("high-contrast")
        })
        Array.from(textElements).forEach(function (text){
          text.classList.toggle("high-contrast-text")
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
