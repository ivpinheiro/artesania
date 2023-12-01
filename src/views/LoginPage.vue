<template>
    <div class="login-section">
        <div class="firstSection">
            <LoginSection></LoginSection>
        </div>

        <div class="secondSection">
            <AboutSection></AboutSection>
        </div>
    </div>
</template>

<script>

import LoginSection from "@/components/sections/LoginSection.vue"
import AboutSection from "@/components/sections/AboutSection.vue"
import { GlobalUtils } from '@/utilities/GlobalUtils.ts'

export default {
    name: 'loginPage',
    components: {
        LoginSection,
        AboutSection
    }, mounted() {
        GlobalUtils.FontSizeController.fontSizeController()
        GlobalUtils.HighContrastToggle.highContrast()
    }
}
</script>
<style lang="scss" scoped>
.login-section {
    display: flex;
    background-image: url("@/assets/img/banner/login-background.svg");
    overflow: hidden;
}

.firstSection {
    width: 70%;
}

.secondSection {
    width: 30%;
}

.firstSection {
    padding: 10rem 10rem;
}
</style>