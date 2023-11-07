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

import LoginSection from "../components/LoginSection.vue"
import AboutSection from "../components/AboutSection.vue"

export default {
    name: 'loginPage',
    components:{
        LoginSection,
        AboutSection
    }
}
</script>
<style lang="scss">
    
.login-background{
    background-image: url("./../assets/img/banner/login-background.svg");
    width: 100%;
    height: 816px;
    display: flex;
    align-items: center;
}

.firstSection{
    height: 100%;
    width: 60%;
    padding: 8% 5% 8% 5%;
}

.secondSection{
    height: 100%;
    width: 40%;
    
}

</style>