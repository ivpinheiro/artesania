<template>
  <div>
    <AcessibilityMenu></AcessibilityMenu>
    <NavBar></NavBar>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>
<script>
import NavBar from './components/NavBar.vue'
import AcessibilityMenu from './components/AcessibilityMenu.vue'

export default ({
  name: 'App',
  components: { NavBar, AcessibilityMenu }
})
</script>

<style scoped>
.content {
  margin-top: 100px;
}
</style>
