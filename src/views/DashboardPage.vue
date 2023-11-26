<template>
  <div class="contrast">
    <DashboardComponent></DashboardComponent>

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
import DashboardComponent from '@/components/dashboard/MyDashboardGroup.vue'

export default {
  name: 'DashboardPage',
  components: {
    DashboardComponent,
    SpinnerLoader,
  }
}
</script>
<style lang="scss" scoped>
.high-contrast {
  color: white;
  background: black;
}

.high-contrast-text {
  color: white;
}
</style>