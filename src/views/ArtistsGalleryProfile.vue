<template>
  <div class="contrast">
    <hr class="divider">
    <div class="breadcrumbs">
      <BreadCrumbComponent></BreadCrumbComponent>
    </div>
    <div class="gallery" id="galeria">
      <div class="firstSection contrast">
        <div class="filter-title-div filters">
          <h3 class="filter-title">Filtros</h3>
          <font-awesome-icon class="f-icon-filter filter-title contrast" icon="fa-solid fa-arrow-up-short-wide" />
        </div>

        <hr class="divider">

        <div class="filter-style filters contrast">
          <div class="filter-title-div">
            <h3 class="filter-title">Estilos</h3>
            <p class="d-grid gap-2 d-md-flex justify-content-md-end">
              <font-awesome-icon :icon="collapseFilterStyle ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down'"
                data-bs-toggle="collapse" href="#collapse-filter-style" :class="{ 'rotate-icon': collapseFilterStyle }"
                class="fa-chevron-collapse" />
            </p>
          </div>

          <div class="collapse show" id="collapse-filter-style">
            <div class="card card-body border-0 contrast">
              <p class="art-styles">Abstrado<font-awesome-icon class="fa-chevron-item" icon="fa-solid fa-chevron-right" />
              </p>
              <p class="art-styles">Brasilidade<font-awesome-icon class="fa-chevron-item"
                  icon="fa-solid fa-chevron-right" />
              </p>
              <p class="art-styles">Decoração<font-awesome-icon class="fa-chevron-item"
                  icon="fa-solid fa-chevron-right" /></p>
              <p class="art-styles">Desenho<font-awesome-icon class="fa-chevron-item" icon="fa-solid fa-chevron-right" />
              </p>
              <p class="art-styles">Escultura<font-awesome-icon class="fa-chevron-item"
                  icon="fa-solid fa-chevron-right" /></p>
              <p class="art-styles">Arte Social<font-awesome-icon class="fa-chevron-item"
                  icon="fa-solid fa-chevron-right" />
              </p>
              <p class="art-styles">Natureza Morta<font-awesome-icon class="fa-chevron-item"
                  icon="fa-solid fa-chevron-right" /></p>
            </div>
          </div>
        </div>

        <hr class="divider">

        <div class="btn-filter filters">
          <button class="btn btnOrder buttonPrimary">Aplicar Filtro</button>
          <RouterLink to="/order/page"
            class="d-flex justify-content-center align-items-center text-decoration-none router-link button-container-link">
          </RouterLink>
        </div>
      </div>
      <div class="secondSection contrast">
        <div class="artist-name-and-filter">
          <p class="artist-name">{{ artist.name }}</p>
          <p class="cards-items">
            Mostrando {{ getStartIndex() }} - {{ getEndIndex() }} de {{ artists.length }} Perfis /
            <span>
              <div class="btn-group">
                <button class="btn btn-sm dropdown-toggle border-0 m-0 cards-items" type="button"
                  data-bs-toggle="dropdown" aria-expanded="false">
                  Ordenar por:
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <p class="dropdown-item cards-items">Populares</p>
                  </li>
                  <li>
                    <p class="dropdown-item cards-items">Mais vendas</p>
                  </li>
                  <li>
                    <p class="dropdown-item cards-items">Mais avaliados</p>
                  </li>
                </ul>
              </div>
            </span>
          </p>
        </div>
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
          <div class="card border-0" v-for="artist in pagedElements" :key="artist">
            <SimpleProfileCard class="item-product" :artistId="artist.id" :artistName="artist.name"
              :rating="artist.rating" :imgUrl="artist['artist-profile-url']">
            </SimpleProfileCard>
          </div>
        </div>
        <PaginationTable :total-pages="totalPages" :current-page="currentPage" :change-page="changePage">
        </PaginationTable>
      </div>
    </div>
  </div>
</template>

<script>
import { ProductService } from '@/services/ProductService.ts'
import SpinnerLoader from '@/components/loaders/SpinnerLoader.vue'
import DoubleRangerSlider from '@/components/rangers/DoubleRangerSlider.vue'
import SimpleProfileCard from '@/components/cards/SimpleProfileCard.vue'
import PaginationTable from '@/components/tables/PaginationTable.vue'
import BreadCrumbComponent from '@/components/breadcrumbs/BreadCrumbComponent.vue'

export default {
  name: 'ArtistsGallery',
  components: {
    SpinnerLoader,
    DoubleRangerSlider,
    SimpleProfileCard,
    PaginationTable,
    BreadCrumbComponent
  },
  data() {
    return {
      loading: false,
      collapseFilterPrice: true,
      collapseFilterStyle: true,
      artists: [],
      pageSize: 6,
      currentPage: 1,
      chevronElement: Object,
      inTransition: false,
      artist: '',
      startIndex: Number,
      endIndex: Number
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.artists.length / this.pageSize);
    },
    pagedElements() {
      this.startIndex = (this.currentPage - 1) * this.pageSize;
      this.endIndex = this.startIndex + this.pageSize;
      return this.artists.slice(this.startIndex, this.endIndex);
    }
  },
  methods: {
    changePage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
    getStartIndex() {
      return this.startIndex + 1;
    },
    getEndIndex() {
      return Math.min(this.endIndex, this.artists.length);
    }
  },
  created: async function () {
    try {
      if (this.$route.path.includes('/artists/gallery/profiles/independent')) {
        this.loading = true
        let responseArtists = await ProductService.getAllArtists()
        this.artists = responseArtists.data.filter(artist => { if (artist['independent-artist']) { return artist } })
        this.loading = false
      } else {
        this.loading = true
        let responseArtists = await ProductService.getAllArtists()
        this.artists = responseArtists.data
        this.loading = false
      }
    } catch (error) {
      this.errorMessage = error
      this.loading = false
    }
  },
  mounted() {
    const collapseFilterPrice = document.getElementById('collapse-filter-price');
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

.button-container-link {
  width: 100%;
}

.f-icon-filter {
  font-size: 25px;
  margin-left: auto;
  justify-content: center;
  align-items: center;
}

.fa-chevron-item {
  cursor: pointer;
}

.fa-chevron-collapse {
  margin-top: 10px;
  font-size: 20px;
  cursor: pointer;
}

.gallery {
  display: flex;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
}

.divider {
  height: 2px;
  background-color: rgba(0, 0, 0, 0.10);
  border: none;
  margin: 0px 8%;
}

.firstSection {
  background-color: #ffff;
  max-height: 600px;
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

.artist-name-and-filter {
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 980px) {
    display: flex;
    flex-direction: column;
  }
}

.artist-name {
  color: $artist-gallery-name;
  font-weight: bold;
  font-size: 32px;
}

.cards-items {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
}

.art-styles {
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  font-weight: bold;
  cursor: pointer;
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
  padding: 0;
}

.buttonPrimary:hover {
  color: black;
}

.buttonPrimary:focus {
  color: black;
}

.router-link:hover {
  color: black;
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

@media (max-width: 768px) {
  .btnOrder {
    height: 50px;
    border-style: none;
  }
}

.dropdown-menu {
  --bs-dropdown-zindex: 1000;
  --bs-dropdown-min-width: 10rem;
  --bs-dropdown-padding-x: 0;
  --bs-dropdown-padding-y: 0.5rem;
  --bs-dropdown-spacer: 0.125rem;
  --bs-dropdown-font-size: 1rem;
  --bs-dropdown-color: var(--bs-body-color);
  --bs-dropdown-bg: var(--bs-body-bg);
  --bs-dropdown-border-color: var(--bs-border-color-translucent);
  --bs-dropdown-border-radius: var(--bs-border-radius);
  --bs-dropdown-border-width: var(--bs-border-width);
  --bs-dropdown-inner-border-radius: calc(var(--bs-border-radius) - var(--bs-border-width));
  --bs-dropdown-divider-bg: var(--bs-border-color-translucent);
  --bs-dropdown-divider-margin-y: 0.5rem;
  --bs-dropdown-box-shadow: var(--bs-box-shadow);
  --bs-dropdown-link-color: var(--bs-body-color);
  --bs-dropdown-link-hover-color: var(--bs-body-color);
  --bs-dropdown-link-hover-bg: var(--bs-tertiary-bg);
  --bs-dropdown-link-active-color: #fff;
  --bs-dropdown-link-active-bg: rgba(157, 50, 7, 0.3);
  --bs-dropdown-link-disabled-color: var(--bs-tertiary-color);
  --bs-dropdown-item-padding-x: 1rem;
  --bs-dropdown-item-padding-y: 0.25rem;
  --bs-dropdown-header-color: #6c757d;
  --bs-dropdown-header-padding-x: 1rem;
  --bs-dropdown-header-padding-y: 0.5rem;
  position: absolute;
  z-index: var(--bs-dropdown-zindex);
  display: none;
  min-width: var(--bs-dropdown-min-width);
  padding: var(--bs-dropdown-padding-y) var(--bs-dropdown-padding-x);
  margin: 0;
  font-size: var(--bs-dropdown-font-size);
  color: var(--bs-dropdown-color);
  text-align: left;
  list-style: none;
  background-color: var(--bs-dropdown-bg);
  background-clip: padding-box;
  border: var(--bs-dropdown-border-width) solid var(--bs-dropdown-border-color);
  border-radius: var(--bs-dropdown-border-radius);
}
</style>