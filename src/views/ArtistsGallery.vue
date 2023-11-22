<template>
  <div class="contrast">
    <!-- <SpinnerLoader /> -->
  </div>
</template>

<script>
import { ProductService } from '@/services/ProductService.ts'
import SpinnerLoader from '@/components/loaders/SpinnerLoader.vue'

export default {
  name: 'ArtistsGallery',
  components: {
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
