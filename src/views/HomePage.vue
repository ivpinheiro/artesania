<template>
  <div class="home">
    <ProductCard></ProductCard>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'

export default {
  name: 'HomeView',
  components: {
    ProductCard
  }
}
</script>
