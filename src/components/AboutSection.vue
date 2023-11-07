<template>
    <div class="about text-center">
        <div class="about-logo">
            <img src="../assets/img/navbar/artesania-logo-old.svg" alt="Artesania" class="image-about"/>
            <span id="logo-name">ARTESANIA</span>
        </div>
        <div class="about-txt">
            <p>
            Transformando sonhos em obras de arte, uma pincelada de cada vez, porque a vida é nossa tela em branco.
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
    
</template>

<script>
    export default{
        name: 'AboutSection'
    }
</script>

<style lang="scss" scoped>
.about{
    background-color: #Eab766;
    height: 100%;
    padding: 10% 20% 10% 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.about-logo{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.image-about{

    width: 150px;
}

#logo-name{
    font-family: Inter;
    font-weight: 1000;
    font-size: 38px;
    color: #9D3207;
    padding-left: 1em;
}

.about-txt{
    padding-top: 5%;
}

.about-company{
    display: flex;
    padding-top: 30%;
    flex-direction: column;
    align-items: flex-start;
}

.link-name {
    font-size: 18px;
    color: #9D3207;
}

.about-icons{
    padding-top: 25%;
    color: #9D3207;
}
</style>