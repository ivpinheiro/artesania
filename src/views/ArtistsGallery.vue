<template>
  <div class="contrast">
    <hr class="divider">
    <div class="breadcrumbs">
      <p>Home > Mira Maroni > <span class="highlight">Meu painel</span></p>
    </div>
    <div class="gallery">
      <div class="firstSection">
        <div class="filter-title filters">
          <h3>Filtros</h3>
          <font-awesome-icon class="f-icon-filter" icon="fa-solid fa-arrow-up-short-wide" />
        </div>

        <hr class="divider">

        <div class="filter-price filters">
          <h2>Preços</h2>
          <DoubleRangerSlider></DoubleRangerSlider>
        </div>

        <div class="filter-style filters">
          <p class="d-grid gap-2 d-md-flex justify-content-md-end">
            <font-awesome-icon :icon="isCollapsed ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down'"
              data-bs-toggle="collapse" href="#collapseExample" @click="toggleCollapse"
              :class="{ 'rotate-icon': isCollapsed }" />
          </p>
          <div class="collapse" id="collapseExample">
            <div class="card card-body border-0">
              <p>Abstrado</p>
              <p>Abstrado</p>
              <p>Abstrado</p>
              <p>Abstrado</p>
            </div>
          </div>
        </div>
      </div>
      <div class="secondSection">
        <p>A</p>
      </div>

    </div>
    <!-- <SpinnerLoader /> -->
  </div>
</template>

<script>
import { ProductService } from '@/services/ProductService.ts'
import SpinnerLoader from '@/components/loaders/SpinnerLoader.vue'
import DoubleRangerSlider from '@/components/rangers/DoubleRangerSlider.vue'

export default {
  name: 'ArtistsGallery',
  components: {
    SpinnerLoader,
    DoubleRangerSlider
  },
  data() {
    return {
      isCollapsed: true
    };
  },
  methods: {
    toggleCollapse() {
      this.isCollapsed = !this.isCollapsed;
    }
  }
}
</script>
<style lang="scss" scoped>
.filter-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.filters {
  padding: 10px;
}

.filter-title h3 {
  margin: 0;
}

.f-icon-filter {
  font-size: 25px;
  margin-left: auto;
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
  height: auto;
  width: 20%;
  padding: 10px 10px 10px 10px;
  overflow: hidden;
  margin: 3% 0% 3% 3%;
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
  height: 900px;
  width: 60%;
  margin: 3% 2%;
  border-radius: 3%;

  @media (max-width: 1060px) {
    height: 115px;
    background-position: top;
    width: 100%;
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
