<template>
  <div>
    <div class="sticky-top">
      <AcessibilityMenu></AcessibilityMenu>
      <NavBar></NavBar>
    </div>    
    <div class="content-body">
      <router-view />
    </div>
    <FooterComp></FooterComp>
  </div>
</template>
<script>
import { GlobalUtils } from './utilities/GlobalUtils.ts'
import NavBar from './components/NavBar.vue'
import AcessibilityMenu from './components/AcessibilityMenu.vue'
import FooterComp from './components/FooterComp.vue'

export default {
  name: 'App',
  components: { GlobalUtils, NavBar, AcessibilityMenu, FooterComp },
  mounted () {
    GlobalUtils.FontSizeController.fontSizeController()
    GlobalUtils.HighContrastToggle.highContrast()
  }
}
</script>

<style lang="scss" scoped>
</style>
./utilities/GlobalUtils.js