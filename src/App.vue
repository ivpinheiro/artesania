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
    }
  }
}

</script>

<style lang="scss" scoped>
</style>
