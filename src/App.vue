<template>
  <div>
    <NavBar></NavBar>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>
<script>
import NavBar from './components/NavBar.vue'
export default ({
  name: 'App',
  components: { NavBar }
})
</script>

<style scoped>
.content {
  margin-top: 100px;
}
</style>
