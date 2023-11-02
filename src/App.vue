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
  components: { NavBar, AcessibilityMenu, FooterComp }
}
</script>

<style lang="scss" scoped>
</style>
