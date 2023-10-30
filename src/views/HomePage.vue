<template>
  <div class="home">
    <BannerComponent></BannerComponent>
    <ArtistNames></ArtistNames>
    <CallToActionButtons></CallToActionButtons>

    <div v-if="loading">
      <div class="container">
        <div class="row">
          <div class="col">
            <SpinnerLoader />
          </div>
        </div>
      </div>
    </div>

    <div class="products-home">
      <div class="col-md-0" v-for="product of products" :key="product">
        <ProductCard class="item-product" :productName="product.name" :productPrice="product.price"
          :rating="product.rating" :imgUrl="product.url"></ProductCard>
      </div>
    </div>
  </div>
</template>

<script>
import { ElementService } from '../services/ElementService.js'
import SpinnerLoader from '../components/SpinnerLoader.vue'
import ProductCard from '../components/ProductCard.vue'
import BannerComponent from '../components/Banner.vue'
import ArtistNames from '../components/ArtistNames.vue'
import CallToActionButtons from '../components/ButtonsSectionOriginal.vue'

export default {
  name: 'HomeView',
  components: {
    ProductCard,
    BannerComponent,
    ArtistNames,
    CallToActionButtons,
    SpinnerLoader
  },
  data: function () {
    return {
      loading: false,
      products: [],
      errorMessage: null
    }
  },
  created: async function () {
    try {
      this.loading = true;
      let response = await ElementService.getAllProducts();
      this.products = response.data;
      this.loading = false;
    } catch (error) {
      this.errorMessage = error;
      this.loading = false;
    }
  },
}
</script>
<style lang="scss" scoped>
.products-home {
  display:inline-flex;
  width: 100%;
  overflow: auto;
  padding: 50px;
}
.item-product {
  padding: 10px;
}
</style>
