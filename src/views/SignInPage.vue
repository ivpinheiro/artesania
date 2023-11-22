<template>
    <div class="sign-background">
        <div class="firstSection">
            <SignSection></SignSection>
        </div>
        <div class="secondSection">
            <AboutSection></AboutSection>
        </div>
    </div>
</template>

<script>

import SignSection from "@/components/sections/SignSection.vue"
import AboutSection from "@/components/sections/AboutSection.vue"

export default {
    name: 'signPage',
    components: {
        SignSection,
        AboutSection
    }
}
</script>
<style lang="scss">
.sign-background {
    background-image: url("./../assets/img/banner/login-background.svg");
    display: flex;
    align-items: center;
    overflow: auto;
}

.firstSection {
    width: 60%;

}

.secondSection {
    background-color: #Eab766;
    width: 35%;

    
}
</style>