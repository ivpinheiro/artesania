<template>
  <div class="home contrast">
    <BannerComponent></BannerComponent>
    <ArtistNames></ArtistNames>
    <CallToActionButtons></CallToActionButtons>

    <div class="home-showcase" id="acabou-de-chegar">
      <h3 class="new-products-text">ACABOU DE CHEGAR</h3>
      <div class="card-deck products-home new-products">
        <div v-if="loading">
          <div class="container">
            <div class="row">
              <div class="col">
                <SpinnerLoader/>
              </div>
            </div>
          </div>
        </div>
        <div class="card border-0" v-for="product in newProducts.slice(0, 4)" :key="product">
          <SimpleProductCard class="item-product" :productId="product.id" :productName="product.name"
            :productPrice="product.price" :rating="product.rating" :productSale="product.sale" :imgUrl="product.url">
          </SimpleProductCard>
        </div>
      </div>

      <RouterLink class="text-decoration-none" to="/gallery">
        <button type="button" class="btn btn-light btn-lg d-grid gap-2 col-4 mx-auto">
          Ver Tudo
        </button>
      </RouterLink>

      <hr class="h-divider">

      <h3 class="best-seller-text" id="mais-vendidos">MAIS VENDIDOS</h3>
      <div class="card-deck products-home best-seller">
        <div v-if="loading">
          <div class="container">
            <div class="row">
              <div class="col">
                <SpinnerLoader/>
              </div>
            </div>
          </div>
        </div>
        <div class="card border-0" v-for="product in bestSellerProducts.slice(0, 4)" :key="product">
          <SimpleProductCard class="item-product" :productId="product.id" :productName="product.name"
            :productPrice="product.price" :rating="product.rating" :productSale="product.sale" :imgUrl="product.url">
          </SimpleProductCard>
        </div>
      </div>
      <RouterLink class="text-decoration-none" to="/gallery">
        <button type="button" class="btn btn-light btn-lg d-grid gap-2 col-4 mx-auto">
          Ver Tudo
        </button>
      </RouterLink>
    </div>
    <hr class="h-divider">

    <OurArtists id="nossos-artistas"/>

    <hr class="h-divider">

    <h3 class="client-comment-text">NOSSOS CLIENTES</h3>

    <div class="card-deck client-comments-card comments">
      <div v-if="loading">
        <div class="container">
          <div class="row">
            <div class="col">
              <SpinnerLoader />
            </div>
          </div>
        </div>
      </div>
      <div class="card border-0" v-for="client in clientComments" :key="client">
        <CommentCard class="item-product" :cartTitle="client.name" :comment="client.comment" :rating="client.rating">
        </CommentCard>
      </div>
    </div>
  </div>
</template>

<script>
import { ProductService } from '@/services/ProductService.ts'
import SpinnerLoader from '@/components/loaders/SpinnerLoader.vue'
import SimpleProductCard from '@/components/cards/SimpleProductCard.vue'
import CommentCard from '@/components/cards/CommentCard.vue'
import BannerComponent from '@/components/banners/Banner.vue'
import ArtistNames from '@/components/sections/ArtistNamesSection.vue'
import CallToActionButtons from '@/components/sections/ButtonsSection.vue'
import OurArtists from '@/components/sections/OurArtistsSection.vue'
import { ProductUtils } from '@/utilities/ProductUtils.ts'

export default {
  name: 'HomePage',
  components: {
    SimpleProductCard,
    BannerComponent,
    ArtistNames,
    CallToActionButtons,
    SpinnerLoader,
    OurArtists,
    CommentCard,
    ProductUtils
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
      let responseProducts = await ProductService.getAllProducts()
      let responseComments = await ProductService.getAllClientComments()
      this.products = responseProducts.data
      this.clientComments = responseComments.data
      this.newProducts = this.products.filter(product => product["new-product"])
      this.bestSellerProducts = this.products.filter(product => product["best-seller"])
      this.newProducts = ProductUtils.ProductList.shuffleArray(this.newProducts.map(product => ({ ...product })))
      this.bestSellerProducts = ProductUtils.ProductList.shuffleArray(this.bestSellerProducts.map(product => ({ ...product })))
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
  border: 2px solid rgba(128, 128, 128, 0.097);
  height: 75px;
}

.btn:hover {
  background-color: white;  
}

.cards-conteiner {
  gap: 5px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25px, 1fr));
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
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  padding: 50px;
}

.client-comments-card {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  padding: 50px;
}

/*.comments{
  display: flex;
  flex-direction: row;
  align-items: center;
}*/


@media screen and (max-width: 990px) {
  .client-comments-card {
    flex-wrap: wrap;
  }
}

.high-contrast {
  color: white;
  background: black;
}

.high-contrast-text {
  color: white;
}
</style>