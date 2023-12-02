<template>
  <div>
    <div class="sticky-top">
      <AcessibilityMenu v-if="isHidden" :hiddenFullElements='[this.hiddenElementsLogin, this.hiddenElementsSignin]' />
      <NavBar v-if="isHidden"></NavBar>
    </div>
    <div class="content-body">
      <router-view />
    </div>
    <FooterComp v-if="isHidden" id="rodape"></FooterComp>
  </div>
</template>
<script>
import { GlobalUtils } from '@/utilities/GlobalUtils.ts'
import NavBar from '@/components/menus/NavBar.vue'
import AcessibilityMenu from '@/components/menus/AcessibilityMenu.vue'
import FooterComp from '@/components/footer/FooterComp.vue'
import { useBreadcrumbStore } from '@/stores/main'

export default {
  name: 'App',
  data() {
    return {
      hiddenElementsLogin: '/login',
      hiddenElementsSignin: '/sign',
    }
  },
  components: { GlobalUtils, NavBar, AcessibilityMenu, FooterComp },
  mounted() {
    GlobalUtils.FontSizeController.fontSizeController()
    GlobalUtils.HighContrastToggle.highContrast()
  },
  computed: {
    isHidden() {
      return GlobalUtils.HiddenElementsByPath.hiddenElements(this.$route, [this.hiddenElementsLogin, this.hiddenElementsSignin])
    }
  },
  watch: {
    '$route': {
      immediate: true,
      handler(newRoute, oldRoute) {
        const routeHistoryStore = useBreadcrumbStore()
        if (newRoute.meta && newRoute.meta.breadcrumb) {
          const breadcrumbExists = routeHistoryStore.previousRouteMetaBreadcrumbs.some(breadcrumb => breadcrumb.path === newRoute.path)
          if (!breadcrumbExists) {
            routeHistoryStore.addPreviousRouteMetaBreadcrumb(newRoute)
          }
        }
      },
    },
  }
}
</script>

<style lang="scss" scoped></style>