<template>
  <div>
    <AcessibilityMenu></AcessibilityMenu>
    <NavBar></NavBar>
    <BannerComponent></BannerComponent>
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
import BannerComponent from './components/Banner.vue'

export default ({
  name: 'App',
  components: { NavBar, AcessibilityMenu, FooterComp, BannerComponent }
})
</script>

<style scoped>
.content {
  margin-top: 100px;
}
</style>
