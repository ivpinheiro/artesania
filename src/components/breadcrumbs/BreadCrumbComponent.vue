<template>
    <ol class="breadcrumb contrast" v-if="showBreadCrumb">
        <li class="breadcrumb-item" v-for="(value, index) in listValues" :key="index"
            :class="{ 'active': index === (listValues.length - 1), 'breadcrumb-item-last': index === (listValues.length - 1) }"
            :aria-current="index === (listValues.length - 1) ? 'page' : null">
            <template v-if="index !== (listValues.length - 1)">
                <router-link class="text-decoration-none page-inactive" :to="value.path"
                    v-if="isProductBreadcrumb(value.meta.breadcrumb)" @click="handleBreadcrumbClick(item, index)">{{
                        product.name }}</router-link>
                <router-link v-else class="text-decoration-none page-inactive" :to="value.path"
                    @click="handleBreadcrumbClick(item, index)">
                    {{ value.meta.breadcrumb }}
                </router-link>
            </template>
            <template v-else>
                <p class="d-flex page-active" v-if="isProductBreadcrumb(value.meta.breadcrumb)">{{ value.meta.breadcrumb +
                    ': ' + product.name }}</p>
                <p class="d-flex page-active" v-else>{{ value.meta.breadcrumb }}</p>
            </template>
        </li>
    </ol>
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
            if (this.$route.path.includes('products')) {
                let response = await ProductService.getProduct(this.$route.params.productId)
                this.product = response.data
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
    color: rgba(0, 0, 0, 0.80);
}

.high-contrast {
    color: white;
    background: black;
}

.high-contrast-text {
    color: white;
}
</style>