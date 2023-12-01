<template>
    <BreadCrumbComponent></BreadCrumbComponent>
    <OrderOptionsTable></OrderOptionsTable>
</template>

<script>

import BreadCrumbComponent from '@/components/breadcrumbs/BreadCrumbComponent.vue'
import  OrderOptionsTable from '@/components/tables/OrderOptionsTable.vue';

export default {
    name: 'OrderPage',
    components: {
        OrderOptionsTable,
        BreadCrumbComponent
    }
}

</script>

<style lang="css" scoped>
</style>