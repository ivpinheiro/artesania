<template>
  <div class="home contrast">
    <DashboardComponent></DashboardComponent>
    
    <div v-if="loading">
      <div class="container">
        <div class="row">
          <div class="col">
            <SpinnerLoader />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ElementService } from '../services/ElementService.ts'
import SpinnerLoader from '../components/SpinnerLoader.vue'
import DashboardComponent from '../components/MyDashboardGroup.vue'

export default {
  name: 'HomeView',
  components: {
    DashboardComponent,
    SpinnerLoader,
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
