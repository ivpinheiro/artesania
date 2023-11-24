<template>
    <div class="sign-background">
        <div class="firstSection">
            <div class="logo-mobile">
                <img src="../assets/img/navbar/artesania-logo-old.svg" alt="Artesania" class="image-about" />
                <span class="logo-name contrast">ARTESANIA</span>
            </div>
            <SignSection></SignSection>
        </div>      
        <AboutSection></AboutSection>
    </div>
</template>

<script>

import SignSection from "@/components/sections/SignSection.vue"
import AboutSection from "@/components/sections/AboutSection.vue"
import { GlobalUtils } from '@/utilities/GlobalUtils.ts'

export default {
    name: 'signPage',
    components: {
        SignSection,
        AboutSection
    }, mounted() {
        GlobalUtils.FontSizeController.fontSizeController()
        GlobalUtils.HighContrastToggle.highContrast()
    }
}
</script>

<style lang="scss" scoped>

.sign-background {
    background-image: url("./../assets/img/banner/login-background.svg");
    display: grid;
    grid-template-columns: 3fr 1fr;
    width: 100vw;
}

.logo-mobile{
    display: none;
}
.firstSection{
    padding: 10rem 5rem;
}

@media(max-width: 768px){
    .sign-background{
        grid-template-columns: 1fr;
    }
    .card{
        margin: 0.5rem;
    }
    .logo-mobile{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: whitesmoke;
        img{
          width: 8rem;  
        }
    }

    .logo-name {
        display: flex;
        font-family: Inter;
        font-weight: 1000;
        font-size: 38px;
        color: #9D3207;
        padding-left: 0;
    }
    .firstSection{
        
        padding: 0;
    }
}

</style>