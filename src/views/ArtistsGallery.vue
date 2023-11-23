<template>
  <div class="contrast">
    <hr class="divider">
    <div class="breadcrumbs">
      <p>Home > Mira Maroni > <span class="highlight">Meu painel</span></p>
    </div>
    <div class="gallery">
      <div class="firstSection contrast">
        <div class="filter-title-div filters">
          <h3 class="filter-title">Filtros</h3>
          <font-awesome-icon class="f-icon-filter filter-title contrast" icon="fa-solid fa-arrow-up-short-wide" />
        </div>

        <hr class="divider">

        <div class="filter-price filters">
          <div class="filter-title-div">
            <h3 class="filter-title">Preços</h3>
            <p class="d-grid gap-2 d-md-flex justify-content-md-end">
              <font-awesome-icon class="fa-chevron"
                :icon="collapseFilterPrice ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down'"
                data-bs-toggle="collapse" href="#collapse-filter-price" @click="toggleCollapse('collapseFilterPrice')"
                :class="{ 'rotate-icon': collapseFilterPrice }" />
            </p>
          </div>
          <div class="collapse show" id="collapse-filter-price">
            <div class="card card-body border-0 contrast">
              <DoubleRangerSlider></DoubleRangerSlider>
            </div>
          </div>
        </div>

        <hr class="divider">

        <div class="filter-style filters contrast">
          <div class="filter-title-div">
            <h3 class="filter-title">Estilos</h3>
            <p class="d-grid gap-2 d-md-flex justify-content-md-end">
              <font-awesome-icon class="fa-chevron"
                :icon="collapseFilterStyle ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down'"
                data-bs-toggle="collapse" href="#collapse-filter-style" @click="toggleCollapse('collapseFilterStyle')"
                :class="{ 'rotate-icon': collapseFilterStyle }" />
            </p>
          </div>

          <div class="collapse show" id="collapse-filter-style">
            <div class="card card-body border-0 contrast">
              <p class="art-styles">Abstrado<font-awesome-icon icon="fa-solid fa-chevron-right" /></p>
              <p class="art-styles">Brasilidade<font-awesome-icon icon="fa-solid fa-chevron-right" />
              </p>
              <p class="art-styles">Decoração<font-awesome-icon icon="fa-solid fa-chevron-right" /></p>
              <p class="art-styles">Desenho<font-awesome-icon icon="fa-solid fa-chevron-right" /></p>
              <p class="art-styles">Escultura<font-awesome-icon icon="fa-solid fa-chevron-right" /></p>
              <p class="art-styles">Arte Social<font-awesome-icon icon="fa-solid fa-chevron-right" />
              </p>
              <p class="art-styles">Natureza Morta<font-awesome-icon icon="fa-solid fa-chevron-right" /></p>
            </div>
          </div>
        </div>

        <hr class="divider">

        <div class="btn-filter filters">
          <button class="btn buttonPrimary">Aplicar Filtro</button>
          <button class="btn buttonPrimary">Fazer Encomenda</button>
        </div>
      </div>
      <div class="secondSection contrast">
        <div class="card-deck products">
          <div class="card border-0" v-for="product in products" :key="product">
            <ProductCard class="item-product" :productName="product.name" :productPrice="product.price"
              :rating="product.rating" :productSale="product.sale" :imgUrl="product.url"></ProductCard>
          </div>
        </div>
      </div>

    </div>
    <!-- <SpinnerLoader /> -->
  </div>
</template>

<script>
import { ProductService } from '@/services/ProductService.ts'
import SpinnerLoader from '@/components/loaders/SpinnerLoader.vue'
import DoubleRangerSlider from '@/components/rangers/DoubleRangerSlider.vue'
import ProductCard from '@/components/cards/ProductCard.vue'

export default {
  name: 'ArtistsGallery',
  components: {
    SpinnerLoader,
    DoubleRangerSlider,
    ProductCard
  },
  data() {
    return {
      collapseFilterPrice: true,
      collapseFilterStyle: true,
      products: []
    };
  },
  methods: {
    toggleCollapse(componentCollapsed) {
      if (componentCollapsed === 'collapseFilterPrice') {
        this.collapseFilterPrice = !this.collapseFilterPrice
      } else if (componentCollapsed === 'collapseFilterStyle') {
        this.collapseFilterStyle = !this.collapseFilterStyle
      }
    }
  },
  created: async function () {
    try {
      this.loading = true
      let responseProducts = await ProductService.getAllProducts()
      this.products = responseProducts.data
      this.loading = false
    } catch (error) {
      this.errorMessage = error
      this.loading = false
    }
  }
}
</script>
<style lang="scss" scoped>
.filter-title {
  font-family: Inter;
  font-weight: 1000;
  color: $filter-title;
}

.filter-title-div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.filters {
  margin-top: 20px;
  padding: 5px;
}

.filter-title-div h3 {
  margin: 0;
}

.f-icon-filter {
  font-size: 25px;
  margin-left: auto;
  justify-content: center;
  align-items: center;
}

.fa-chevron {
  margin-top: 10px;
}

.gallery {
  display: flex;
}

.divider {
  height: 2px;
  background-color: rgba(0, 0, 0, 0.10);
  border: none;
  margin: 0px 8%;
}

.breadcrumbs {
  margin: 20px 8%;

  p {
    font-weight: 500;
    font-size: 16px;
  }
}

.firstSection {
  background-color: #ffff;
  max-height: 900px;
  height: auto;
  width: 20%;
  padding: 15px 15px 15px 15px;
  overflow: hidden;
  margin: 2% 0% 2% 2%;
  border-radius: 25px;
  border: 2px solid #e6e6e6;

  @media (max-width: 1060px) {
    width: 100%;
    margin: 20px 0px;
  }
}

.rotate-icon {
  transition: transform 0.9s ease;
}

.secondSection {
  background-color: #fff;
  height: auto;
  width: 60%;
  margin: 3% 2%;
  border-radius: 3%;

  @media (max-width: 1060px) {
    height: auto;
    background-position: top;
    width: 100%;
  }
}

.art-styles {
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  font-weight: bold;
}

.high-contrast {
  color: white;
  background: black;
}

.buttonPrimary {
  background-color: #9D3207;
  margin-bottom: 10%;
  border-radius: 50px;
  width: 90%;
  height: 50px;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
}

.products {
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  padding: 20px;
  /* Reduzir o padding */
}

.high-contrast-text {
  color: white;
}

.btn-filter {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>