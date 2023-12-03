<template>
    <div class="login-section">
        <div class="firstSection">
            <div class="logo-mobile">
                <RouterLink to="/" class="text-decoration-none">
                    <img src="@/assets/img/navbar/artesania-logo-old.svg" alt="Artesania" class="image-about" />
                    <span class="logo-name contrast">ARTESANIA</span>
                </RouterLink>
            </div>
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
    display: grid;
    background-image: url("@/assets/img/banner/login-background.svg");
    grid-template-columns: 3fr 1fr;
    height: 100vh;
}

.logo-mobile{
    display: none;
}

.firstSection {
    padding: 1rem 1rem;
}


@media(max-width: 768px){
    .login-section{
        grid-template-columns: 1fr;
    }

    .image-about{
        margin-left: 25%;
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