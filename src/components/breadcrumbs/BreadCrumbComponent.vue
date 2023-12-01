<template>
    <div class="breadcrumb-area">
        <ol class="breadcrumb contrast" v-if="showBreadCrumb">
            <li class="breadcrumb-item" v-for="(value, index) in listValues" :key="index"
                :class="{ 'active': index === (listValues.length - 1), 'breadcrumb-item-last': index === (listValues.length - 1) }"
                :aria-current="index === (listValues.length - 1) ? 'page' : null">
                <template v-if="index !== (listValues.length - 1)">
                    <router-link class="text-decoration-none page-inactive" :to="value.path"
                        v-if="isProductBreadcrumb(value.meta.breadcrumb)" @click="handleBreadcrumbClick(item, index)">{{
                            product.name }}
                    </router-link>
                    <router-link v-else class="text-decoration page-inactive" :to="value.path"
                        @click="handleBreadcrumbClick(item, index)">
                        {{ value.meta.breadcrumb }}<span class="text-decoration page-inactive"
                            v-if="value.meta.breadcrumb.includes('Galeria') && listValues[1].path.includes('gallery/artist')">{{
                                ': ' +
                                this.artist.name }}</span>
                    </router-link>
                </template>
                <template v-else>
                    <p class="d-flex page-active" v-if="isProductBreadcrumb(value.meta.breadcrumb)">{{ value.meta.breadcrumb
                        +
                        ': ' + product.name }}</p>
                    <p class="d-flex page-active" v-else>{{ value.meta.breadcrumb }}</p>
                </template>
            </li>
            <template v-if="this.$route.path.includes('gallery/artist')">
                <p class="d-flex page-active">{{ ': ' + this.artist.name }}</p>
            </template>
        </ol>
    </div>
</template>

<script>
import { useBreadcrumbStore } from '@/stores/main'
import { ProductService } from '@/services/ProductService'

export default {
    name: 'BreadCrumbComponent',
    data() {
        return {
            newValue: '',
            product: {},
            artist: {},
            showBreadCrumb: false
        }
    },
    computed: {
        listValues() {
            return useBreadcrumbStore().previousRouteMetaBreadcrumbs
        },
        breadcrumbItems() {
            return useBreadcrumbStore().previousRouteMetaBreadcrumbs
        }
    },
    methods: {
        isProductBreadcrumb(breadcrumb) {
            return typeof breadcrumb === 'string' && breadcrumb.includes('Obra')
        },
        handleBreadcrumbClick(item, index) {
            const store = useBreadcrumbStore()
            if (index < this.breadcrumbItems.length - 1) {
                const slicedBreadcrumbs = this.breadcrumbItems.slice(0, index + 1)
                store.clearPreviousRouteMetaBreadcrumbs()
                slicedBreadcrumbs.forEach(metaBreadcrumb => {
                    store.addPreviousRouteMetaBreadcrumb(metaBreadcrumb)
                })
            }
        }
    },
    created: async function () {
        try {
            if (this.$route.path.includes('gallery/artist')) {
                let responseArtist = await ProductService.getAllArtist(this.$route.params.artistId)
                this.artist = responseArtist.data
                this.showBreadCrumb = true
            }
            if (this.$route.path.includes('products')) {
                let reponseProduct = await ProductService.getProduct(this.$route.params.productId)
                let responseArtist = await ProductService.getAllArtist(reponseProduct.data["artist-id"])
                this.product = reponseProduct.data
                this.artist = responseArtist.data
                this.showBreadCrumb = true
            } else {
                this.showBreadCrumb = true
            }
        } catch (error) {
            this.errorMessage = error
        }
    }
}
</script>

<style lang="scss" scoped>
.breadcrumb-area {
    padding: 0 7rem;
}

.breadcrumb {
    padding: 0px 0px;
    white-space: pre;
    cursor: pointer;
    margin: 0px 0%;
}


.page-active {
    font-weight: bold;
    color: #9D3207;
}

.page-inactive {
    font-weight: bold;
    color: #000
}

.high-contrast {
    color: white;
    background: black;
}

.high-contrast-text {
    color: white;
}
</style>