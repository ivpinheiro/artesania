<template>
  <div class="home">
    <BannerComponent></BannerComponent>
    <div class="products-home">
      <ProductCard class="item-product" productName="Fragmentos da Realidade" productPrice="130,00" rating="4.5" imgUrl="../assets/img/products/product-1.png"></ProductCard>
      <ProductCard class="item-product" productName="Fragmentos da Realidade" productPrice="130,00" rating="4.5" imgUrl="../assets/img/products/product-1.png"></ProductCard>
      <ProductCard class="item-product" productName="Fragmentos da Realidade" productPrice="130,00" rating="4.5" imgUrl="../assets/img/products/product-1.png"></ProductCard>
      <ProductCard class="item-product" productName="Fragmentos da Realidade" productPrice="130,00" rating="4.5" imgUrl="../assets/img/products/product-1.png"></ProductCard>
      <ProductCard class="item-product" productName="Fragmentos da Realidade" productPrice="130,00" rating="4.5" imgUrl="../assets/img/products/product-1.png"></ProductCard>
    </div>
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
.products-home{
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 50px;
}
.item-product{
  padding: 10px;
}
</style>
