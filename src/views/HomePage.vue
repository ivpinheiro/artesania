<template>
  <div class="home contrast">
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
    <div class="home-showcase" id="acabou-chegar">
      <h3 class="new-products-text">ACABOU DE CHEGAR</h3>
      <div class="products-home new-products ">
        <div class="col-md-0" v-for="product in newProducts" :key="product">
          <ProductCard class="item-product" :productName="product.name" :productPrice="product.price"
            :rating="product.rating" :productSale="product.sale" :imgUrl="product.url"></ProductCard>
        </div>
      </div>

      <button type="button" class="btn btn-light btn-lg d-grid gap-2 col-2 mx-auto">Ver Tudo</button>

      <hr class="h-divider">

      <h3 class="best-seller-text" id="mais-vendidos">MAIS VENDIDOS</h3>
      <div class="products-home best-seller">
        <div class="col-md-0" v-for="product in bestSellerProducts" :key="product">
          <ProductCard class="item-product" :productName="product.name" :productPrice="product.price" :rating="product.rating" :productSale="product.sale" :imgUrl="product.url"></ProductCard>
        </div>
      </div>

      <button type="button" class="btn btn-light btn-lg d-grid gap-2 col-2 mx-auto">Ver Tudo</button>

    </div>
    <hr class="h-divider">

    <OurArtists id="nossos_artistas" />

    <hr class="h-divider">

    <h3 class="client-comment-text">NOSSOS CLIENTES</h3>

    <div class="products-home comments">
      <div class="col-sm-3" v-for="client in clientComments" :key="client">
        <CommentCard class="item-product" :cartTitle="client.name" :comment="client.comment" :rating="client.rating">
        </CommentCard>
      </div>
    </div>
  </div>
</template>

<script>
import { ElementService } from '../services/ElementService.ts'
import SpinnerLoader from '../components/SpinnerLoader.vue'
import ProductCard from '../components/ProductCard.vue'
import CommentCard from '../components/CommentCard.vue'
import BannerComponent from '../components/Banner.vue'
import ArtistNames from '../components/ArtistNames.vue'
import CallToActionButtons from '../components/ButtonsSection.vue'
import OurArtists from '../components/OurArtists.vue'

export default {
  name: 'HomeView',
  components: {
    ProductCard,
    BannerComponent,
    ArtistNames,
    CallToActionButtons,
    SpinnerLoader,
    OurArtists,
    CommentCard
  },
  data: function () {
    return {
      loading: false,
      products: [],
      newProducts: [],
      bestSellerProducts: [],
      clientComments: [],
      errorMessage: null
    }
  },
  created: async function () {
    try {
      this.loading = true
      let responseProducts = await ElementService.getAllProducts()
      let responseComments = await ElementService.getAllClientComments()
      this.products = responseProducts.data
      this.clientComments = responseComments.data
      this.newProducts = this.products.filter(product => product["new-product"])
      this.bestSellerProducts = this.products.filter(product => product["best-seller"])
      this.newProducts = this.newProducts.map(product => ({ ...product })); // Clone the objects
      this.bestSellerProducts = this.bestSellerProducts.map(product => ({ ...product })); // Clone the objects
      this.loading = false
    } catch (error) {
      this.errorMessage = error
      this.loading = false
    }
  }
}
</script>
<style lang="scss" scoped>
.new-products-text,
.best-seller-text,
.client-comment-text {
  color: $home-show-case-title;
  width: 100%;
  padding: 50px;
  text-align: center;
  font-size: 40px;
  font-weight: bolder;
}


.btn {
  color: $home-show-case-title !important;
  font-weight: bolder;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background-color: white;
  border: 1px solid rgba(128, 128, 128, 0.097);
  height: 75px;
}

.btn:hover {
  background-color: white;
}

.h-divider {
  margin: 50px auto;
  height: 1px;
  width: 90%;
  border-top: 1px solid gray;
  padding: 5px 0;
}


.products-home {
  display: inline-flex;
  width: 100%;
  overflow: inherit;
  padding: 50px;
  justify-content: center;
  flex-direction: row;
}
.item-product {
  padding: 10px;
}
.high-contrast {
  color: white;
  background: black;
}
.high-contrast-text {
  color: white;
}
</style>
