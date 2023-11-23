<template>
    <div class="login-background">
        <div class="firstSection">
            <LoginSection></LoginSection>
        </div>
            <AboutSection></AboutSection>
    </div>
</template>

<script>

import LoginSection from "@/components/sections/LoginSection.vue"
import AboutSection from "@/components/sections/AboutSection.vue"

export default {
    name: 'loginPage',
    components: {
        LoginSection,
        AboutSection
    }
}
</script>
<style lang="scss" scoped>
.login-background {
    background-image: url("./../assets/img/banner/login-background.svg");
    display: grid;
    grid-template-columns: 3fr 1fr;
    width: 100vw;
}

.firstSection {
    padding: 10rem 10rem;
}


</style>