<template>
  <div>
    <div class="sticky-top">
      <AcessibilityMenu v-if="isHidden" :hiddenFullElements="[this.hiddenElementsLogin, this.hiddenElementsSignin]">
      </AcessibilityMenu>
      <NavBar v-if="isHidden"></NavBar>
    </div>
    <div class="content-body">
      <BreadCrumbComponent></BreadCrumbComponent>
      <router-view />
    </div>
    <FooterComp v-if="isHidden"></FooterComp>
  </div>
</template>
<script>
import { GlobalUtils } from '@/utilities/GlobalUtils.ts'
import NavBar from '@/components/menus/NavBar.vue'
import AcessibilityMenu from '@/components/menus/AcessibilityMenu.vue'
import FooterComp from '@/components/footer/FooterComp.vue'
import BreadCrumbComponent from '@/components/breadcrumbs/BreadCrumbComponent.vue'

export default {
  name: 'App',
  data() {
    return {
      hiddenElementsLogin: '/login',
      hiddenElementsSignin: '/sign',
    }
  },
  components: { GlobalUtils, NavBar, AcessibilityMenu, FooterComp, BreadCrumbComponent },
  mounted() {
    GlobalUtils.FontSizeController.fontSizeController()
    GlobalUtils.HighContrastToggle.highContrast()
  },
  computed: {
    isHidden() {
      return GlobalUtils.HiddenElementsByPath.hiddenElements(this.$route, [this.hiddenElementsLogin, this.hiddenElementsSignin])
    }
  }
}
</script>

<style lang="scss" scoped></style>