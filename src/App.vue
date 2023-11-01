<template>
  <div>
    <div class="sticky-top">
      <AcessibilityMenu></AcessibilityMenu>
      <NavBar></NavBar>
    </div>    
    <div class="content">
      <router-view />
    </div>
    <FooterComp></FooterComp>
  </div>
</template>
<script>
import NavBar from './components/NavBar.vue'
import AcessibilityMenu from './components/AcessibilityMenu.vue'
import FooterComp from './components/FooterComp.vue'

export default ({
  name: 'App',
  components: { NavBar, AcessibilityMenu, FooterComp }
})
</script>

<style lang="scss" scoped>
</style>
