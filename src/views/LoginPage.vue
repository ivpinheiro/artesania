<template>
    <div class="login-background">
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

export default {
    name: 'loginPage',
    components: {
        LoginSection,
        AboutSection
    }
}
</script>
<style lang="scss">
.login-background {
    background-image: url("./../assets/img/banner/login-background.svg");
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
}

.firstSection {
    width: 60%;
    padding: 1% 5% 20% 5%;
    margin: 0 10% 0 10%;
}

.secondSection {
    width: 35%;
}
</style>