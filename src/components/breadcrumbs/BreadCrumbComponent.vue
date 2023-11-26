<template>
    <ol class="breadcrumb contrast" v-if="showBreadCrumb">
        <li class="breadcrumb-item" v-for="(value, index) in listValues" :key="index"
            :class="{ 'active': index === (listValues.length - 1), 'breadcrumb-item-last': index === (listValues.length - 1) }"
            :aria-current="index === (listValues.length - 1) ? 'page' : null">
            <template v-if="index !== (listValues.length - 1)">
                <a class="text-decoration-none page-inactive" :href="value.path"
                    v-if="isProductBreadcrumb(value.meta.breadcrumb)">{{ product.name }}</a>
                <a v-else class="text-decoration-none page-inactive" :href="value.path">
                    {{ value.meta.breadcrumb }}
                </a>
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
import { useBreadcrumbStore } from '@/stores/breadcrumbStore'
import { ProductService } from '@/services/ProductService.ts'

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
        }
    },
    methods: {
        isProductBreadcrumb(breadcrumb) {
            return typeof breadcrumb === 'string' && breadcrumb.includes('Obra')
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
    padding: 10px;
}

.page-active {
    font-weight: bold;
    color: black;
}

.page-inactive {
    font-weight: bold;
    color: rgb(#000000, 0.6);
}

.high-contrast {
    color: white;
    background: black;
}

.high-contrast-text {
    color: white;
}
</style>