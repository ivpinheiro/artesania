<template>
  <div class="contrast">
    <hr class="divider">
    <div class="breadcrumbs">
      <BreadCrumbComponent></BreadCrumbComponent>
    </div>
    <OrderAgreementConfirmation></OrderAgreementConfirmation>
    <div v-if="loading">
      <div class="container contrast">
        <div class="row">
          <div class="col">
            <!-- <SpinnerLoader /> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ProductService } from '@/services/ProductService.ts'
import SpinnerLoader from '@/components/loaders/SpinnerLoader.vue'
import OrderAgreementConfirmation from '@/components/dashboard/OrderAgreementConfirmation.vue'
import BreadCrumbComponent from '@/components/breadcrumbs/BreadCrumbComponent.vue'

export default {
  name: 'OrderAgreementConfirmationPage',
  components: {
    ProductService,
    OrderAgreementConfirmation,
    SpinnerLoader,
    BreadCrumbComponent
  }
}
</script>
<style lang="scss" scoped>
.divider {
  height: 2px;
  background-color: rgba(0, 0, 0, 0.10);
  border: none;
  margin: 0px 8%;
}

.high-contrast {
  color: white;
  background: black;
}

.high-contrast-text {
  color: white;
}
</style>