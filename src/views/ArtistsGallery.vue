<template>
  <div class="contrast">
    <hr class="divider">
    <div class="breadcrumbs">
      <BreadCrumbComponent></BreadCrumbComponent>
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
              <font-awesome-icon :icon="collapseFilterPrice ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down'"
                data-bs-toggle="collapse" href="#collapse-filter-price" :class="{ 'rotate-icon': collapseFilterPrice }"
                class="fa-chevron" />
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
              <font-awesome-icon :icon="collapseFilterStyle ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down'"
                data-bs-toggle="collapse" href="#collapse-filter-style" :class="{ 'rotate-icon': collapseFilterStyle }"
                class="fa-chevron" />
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
          <div v-if="loading">
            <div class="container">
              <div class="row">
                <div class="col">
                  <SpinnerLoader />
                </div>
              </div>
            </div>
          </div>
          <div class="card border-0" v-for="product in pagedElements" :key="product">
            <SimpleProductCard class="item-product" :productId="product.id" :productName="product.name"
              :productPrice="product.price" :rating="product.rating" :productSale="product.sale" :imgUrl="product.url">
            </SimpleProductCard>
          </div>
        </div>
        <PaginationTable :total-pages="totalPages" :current-page="currentPage" :change-page="changePage">
        </PaginationTable>
      </div>

    </div>
    <!-- <SpinnerLoader /> -->
  </div>
</template>

<script>
import { ProductService } from '@/services/ProductService.ts'
import SpinnerLoader from '@/components/loaders/SpinnerLoader.vue'
import DoubleRangerSlider from '@/components/rangers/DoubleRangerSlider.vue'
import SimpleProductCard from '@/components/cards/SimpleProductCard.vue'
import PaginationTable from '@/components/tables/PaginationTable.vue'
import BreadCrumbComponent from '@/components/breadcrumbs/BreadCrumbComponent.vue'

export default {
  name: 'ArtistsGallery',
  components: {
    SpinnerLoader,
    DoubleRangerSlider,
    SimpleProductCard,
    PaginationTable,
    BreadCrumbComponent
  },
  data() {
    return {
      loading: false,
      collapseFilterPrice: true,
      collapseFilterStyle: true,
      products: [],
      pageSize: 6,
      currentPage: 1,
      chevronElement: Object,
      inTransition: false
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.products.length / this.pageSize);
    },
    pagedElements() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.products.slice(startIndex, endIndex);
    }
  },
  methods: {
    changePage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
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
  },
  mounted() {
    const collapseFilterPrice = document.getElementById('collapse-filter-price');
    collapseFilterPrice.addEventListener('show.bs.collapse', () => {
      this.collapseFilterPrice = !this.collapseFilterPrice
    });
    collapseFilterPrice.addEventListener('hide.bs.collapse', () => {
      this.collapseFilterPrice = !this.collapseFilterPrice
    });
    const collapseFilterStyle = document.getElementById('collapse-filter-style');
    collapseFilterStyle.addEventListener('show.bs.collapse', () => {
      this.collapseFilterStyle = !this.collapseFilterStyle
    });
    collapseFilterStyle.addEventListener('hide.bs.collapse', () => {
      this.collapseFilterStyle = !this.collapseFilterStyle
    });
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
  font-size: 20px;
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
  width: 65%;
  margin: 2% 0% 2% 2%;
  border-radius: 3%;
  padding: 15px 15px 15px 15px;
  overflow: hidden;
  margin: 2% 0% 2% 2%;

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