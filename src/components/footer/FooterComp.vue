<template>
  <!-- Footer -->
  <footer class="footer-comp contrast text-center text-lg-start text-muted p-0" id="footer">

    <!-- Grid container -->
    <div class="container subs-footer contrast p-2">

      <!-- Section: Form -->
      <section class="">
        <form action="">
          <!--Grid row-->
          <div class="row d-flex justify-content-around">

            <!--Grid column-->
            <div class="subscribe-offers col-lg-6">
              <h2 class="fw-bold pt-3">
                FIQUE ATUALIZADO SOBRE NOSSAS ÚLTIMAS OFERTAS
              </h2>
            </div>
            <!--Grid column-->

            <!--Grid column-->
            <div class="input-comp col-lg-3">
              <!-- Email input -->
              <span class="text-email">Digite seu e-mail</span>
              <div class="d-flex" role="email">
                <div class="form-control flex-nowrap mb-2">
                  <div class="input-group">
                    <span class="input-group-text" id="addon-wrapping"
                      style="background-color: white; border:none"><font-awesome-icon icon="envelope"
                        class="mail" /></span>
                    <input type="email" class="form-control" placeholder="Digite seu e-mail"
                      aria-label="Digite seu e-mail" aria-describedby="addon-wrapping" style="border:none">
                  </div>
                </div>
                <!-- <SearchInput v-model="searchVal" /> -->
              </div>
              <button type="" class="subs-button btn btn-outline-light mb-2">
                Inscreva-se e receba novidades
              </button>
            </div>
            <!--Grid column-->

          </div>
          <!--Grid row-->
        </form>
      </section>
      <!-- Section: Form -->
    </div>
    
    <!-- Section: Links  -->
    <section class="links-section contrast">
      <div class="container text-center text-md-start pt-5">
        <!-- Grid row -->
        <div class="row pt-3">
          <!-- Grid column -->
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <!-- Content -->
            <h3 class="brand text-uppercase fw-bold mb-4">
              ARTESANIA
            </h3>
            <p>
              Transformando sonhos em obras de arte, uma pincelada de cada vez, porque a vida é nossa tela em branco.
            </p>

            <!-- Section: Social media -->
            <section class="socialmedia-section d-flex justify-content-center p-4">

              <!-- Right -->
              <div alt="Redes Sociais" class="social-icons">
                <a href="" alt="Ir para Facebook" class="me-4 link-secondary">
                  <font-awesome-icon class="fa" icon="fa-brands fa-facebook-f" />
                </a>
                <a href="" alt="Ir para Instagram" class="me-4 link-secondary">
                  <font-awesome-icon class="fa" icon="fa-brands fa-instagram" />
                </a>
                <a href="" alt="Ir para Pinterest" class="me-4 link-secondary">
                  <font-awesome-icon class="fa" icon="fa-brands fa-pinterest" />
                </a>
                <a href="" alt="Ir para Twitter x" class="me-4 link-secondary">
                  <font-awesome-icon class="fa" icon="fa-brands fa-x-twitter" />
                </a>
                <a href="" lt="Ir para Google" class="me-4 link-secondary">
                  <font-awesome-icon class="fa" icon="fa-brands fa-google" />
                </a>

              </div>
              <!-- Right -->
            </section>
            <!-- Section: Social media -->
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
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
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
            <h6 class="link-name text-uppercase fw-bold mb-4">
              AJUDA
            </h6>
            <p>
              <a href="#!" class="text-reset">Suporte</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Detalhes da Entrega</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Termos e Condições</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Política de Privacidade</a>
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
            <h6 class="link-name text-uppercase fw-bold mb-4">
              FAQ
            </h6>
            <p>
              <a href="#!" class="text-reset">Conta</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Gerenciar Entregas</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Pedidos</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Pagamentos</a>
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
            <h6 class="link-name text-uppercase fw-bold mb-4">
              RECURSOS
            </h6>
            <p>
              <a href="#!" class="text-reset">EBook Gratuito</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Tutoriais de Uso</a>
            </p>
            <p>
              <a href="#!" class="text-reset">How to - Blog</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Playlist no Youtube</a>
            </p>
          </div>
          <!-- Grid column -->

        </div>
        <!-- Grid row -->
      </div>
    </section>
    <!-- Section: Links  -->
    <hr class="h-divider">
    <!-- Copyright -->
    <section class="row contrast d-flex justify-content-around m-0">

        <!-- Copyright -->
      <div class="col-lg text-center"> 
        Artesania © 2023, Todos os direitos reservados
      </div>
      <!-- Copyright -->

      <!-- Payments -->
      <div class="col-lg text-center">
        <img alt="Visa" src=@/assets/img/footer/BadgeVisa.svg>
        <img alt="MasterCard" src=@/assets/img/footer/BadgeMasterCard.svg>
        <img alt="PayPal" src=@/assets/img/footer/BadgePayPal.svg>
        <img alt="Apple Pay" src=@/assets/img/footer/BadgeApple.svg>
        <img alt="Google Pay" src=@/assets/img/footer/BadgeGooglePay.svg>
        <img alt="Boleto" src=@/assets/img/footer/BadgeBarCode.svg>
        <img alt="Pix" src=@/assets/img/footer/BadgePix.svg>
      </div>

      <!-- Security -->
      <div class="col-lg text-center">
        <img alt="Site 100% Seguro Google" src=@/assets/img/footer/site-seguro-google.svg>
      </div>
    </section>
    
  </footer>
  <!-- Footer -->
</template>

<script>
export default {
  name: 'FooterComp'
}
</script>

<style lang="scss" scoped>

.input-group-text {
  border-radius: 30px;
}

.footer-comp {
  background: linear-gradient(white 15%, 0%, $footer-color 85%);
}

.subs-footer {
  background-color: $footer-color2;
  border-radius: 20px;
}

.subscribe-offers {
  color: white;
}

.input-group-text {
  background-color: white;
  border: none;
}

.form-control:focus {
  outline: none;
  box-shadow: none;
}

.subs-button {
  border-radius: 30px;
  width: 100%;
}

.brand {
  display: flex;
  justify-content: center;
  color: #9D3207;
  font-size: 35px;
}

.social-icons {
  font-size: 25px;
  display: flex;
  justify-content: center;
  color: $letter-footer-color;
}

.link-name {
  color: #9D3207;
}

.text-email {
  display: flex;
  text-align: center;
  justify-content: center;
  width: 100%;
  padding-bottom: 15px;
  padding-top: 0px;
  margin: 0;
  color: #FFFFFF;
  font-weight: 900;
}

.mail {
  color: black;
}
.h-divider {
  margin: auto;
  padding: 10px;
  width: 90%;
  border-top: 1px solid gray;
}
.high-contrast {
  color: white;
  background: black;
}

.high-contrast-text {
  color: white;
}
</style>