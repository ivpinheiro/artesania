<template>
    <div class="about-section contrast">
        <div class="about-content">
            <div class="about-acessibility contrast">
                <AcessibilityMenu></AcessibilityMenu>
            </div>
            <div class="about-content-text contrast text-center">
                <div class="about-logo">
                    <RouterLink to="/" class="text-decoration-none">
                        <img src="@/assets/img/navbar/artesania-logo-old.svg" alt="Artesania" class="image-about" />
                        <span class="logo-name contrast">ARTESANIA</span>
                    </RouterLink>
                </div>
                <div class="about-txt">
                    <p>
                        Transformando sonhos em obras de arte, uma pincelada de cada vez, porque a vida é nossa tela em
                        branco.
                    </p>
                </div>
                <div class="about-company">
                    <!-- Links -->
                    <h6 class="link-name text-uppercase fw-bold mb-4">
                        A EMPRESA
                    </h6>
                    <p>
                        <a href="#!" class="text-reset">Sobre Nós</a>
                    </p>
                    <p>
                        <a href="#!" class="text-reset">Features</a>
                    </p>
                    <p>
                        <a href="#!" class="text-reset">Works</a>
                    </p>
                    <p>
                        <a href="#!" class="text-reset">Carreira</a>
                    </p>
                </div>
                <div class="about-icons">
                    <a href="" class="me-4 link-secondary">
                        <font-awesome-icon class="fa" icon="fa-brands fa-x-twitter" />
                    </a>
                    <a href="" class="me-4 link-secondary">
                        <font-awesome-icon class="fa" icon="fa-brands fa-facebook-f" />
                    </a>
                    <a href="" class="me-4 link-secondary">
                        <font-awesome-icon class="fa" icon="fa-brands fa-instagram" />
                    </a>
                    <a href="" class="me-4 link-secondary">
                        <font-awesome-icon class="fa" icon="fa-brands fa-github" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AcessibilityMenu from '@/components/menus/AcessibilityMenu.vue';

export default {
    name: "AboutSection",
    components: { AcessibilityMenu }
}
</script>

<style lang="scss" scoped>
.about-section {
    width: 100%;
    height: auto;
}

.about-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #Eab766;
    width: 100%;
    min-height: 100vh;
    box-sizing: border-box;
}

.about-content-text {
    padding: 2em;
    text-align: center;
}

.about-acessibility {
    width: 100%;
    height: auto;
    box-sizing: border-box;
}

.about-logo {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.image-about {
    width: 150px;
    margin-left: 15%;
}

.logo-name {
    display: flex;
    font-family: Inter;
    font-weight: 1000;
    font-size: 38px;
    color: #9D3207;
    padding-left: 0;
}

.about-txt {
    padding-top: 5%;
}

.about-company {
    display: flex;
    padding-top: 30%;
    flex-direction: column;
    align-items: center;
}

.link-name {
    font-size: 18px;
    color: #9D3207;
}

.about-icons {
    padding-top: 25%;
    color: #9D3207;
}

.high-contrast {
    color: white;
    background: black;
}

.high-contrast-text {
    color: white;
}

@media(max-width: 768px) {
    .about {
        display: none;
    }
}
</style>