<template>
  <BannerComponent></BannerComponent>
  <div class="home">
    <ProductCard productName="Fragmentos da Realidade" productPrice="130" rating="4.5" imgUrl="../assets/img/products/product-1.png"></ProductCard>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'
import BannerComponent from '../components/Banner.vue'

export default {
  name: 'HomeView',
  components: {
    ProductCard,
    BannerComponent
  }
}
</script>
<style lang="scss" scoped>

</style>
