<template>
    <div class="contrast">
        <div class="breadcrumbs">
            <BreadCrumbComponent></BreadCrumbComponent>
        </div>
        <FullProductCard :productId="productId"></FullProductCard>
    </div>
</template>
  
<script>
import BreadCrumbComponent from '@/components/breadcrumbs/BreadCrumbComponent.vue'
import FullProductCard from '@/components/cards/FullProductCard.vue'

export default {
    name: 'ProductPage',
    components: {
        BreadCrumbComponent,
        FullProductCard
    },
    data() {
        return {
            productId: this.$route.params.productId
        }
    }
}
</script>
<style lang="scss" scoped></style>