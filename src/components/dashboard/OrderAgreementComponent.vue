<template>  
  <div class="dashboard">
    <h1 class="title no-margin">Encomenda</h1> 
    <div class="tabs">
      <div class="tab">
        <span>Meio e Suporte</span>
      </div>
      <div class="tab">
        <span>Técnica</span>
      </div>
      <div class="tab">
        <span>Composição</span>
      </div>
      <div class="tab">
        <span>Estilo</span>
      </div>
      <div class="tab">
        <span>Textura</span>
      </div>
    </div>
    <div class="options-group">
      <div class="checkbox-group">
        <div>
          <input type="checkbox" id="oleo" value="Óleo">
          <label for="oleo">Óleo</label>
        </div>
        <div>
          <input type="checkbox" id="acrilico" value="Acrílico">
          <label for="acrilico">Acrílico</label>
        </div>
        <div>
          <input type="checkbox" id="aquarela" value="Aquarela">
          <label for="aquarela">Aquarela</label>
        </div>
        <div>
          <input type="checkbox" id="lapis" value="Lápis">
          <label for="lapis">Lápis</label>
        </div>
      </div>
      
      <div class="checkbox-group">
        <div>
          <input type="checkbox" id="suave" value="Suave">
          <label for="suave">Suave</label>
        </div>
        <div>
          <input type="checkbox" id="detalhado" value="Detalhado">
          <label for="detalhado">Detalhado</label>
        </div>
        <div>
          <input type="checkbox" id="expressivo" value="Expressivo">
          <label for="expressivo">Expressivo</label>
        </div>
        <div>
          <input type="checkbox" id="espatulagem" value="Espatulagem">
          <label for="espatulagem">Espatulagem</label>
        </div>
      </div>
      
      <div class="checkbox-group">
        <div>
          <input type="checkbox" id="tercos" value="Terços">
          <label for="tercos">Terços</label>
        </div>
        <div>
          <input type="checkbox" id="equilibrio" value="Equilíbrio">
          <label for="equilibrio">Equilíbrio</label>
        </div>
        <div>
          <input type="checkbox" id="padroes" value="Padrões">
          <label for="padroes">Padrões</label>
        </div>
        <div>
          <input type="checkbox" id="contraste" value="Contraste">
          <label for="contraste">Contraste</label>
        </div>
      </div>
      
      <div class="checkbox-group">
        <div>
          <input type="checkbox" id="realista" value="Realista">
          <label for="realista">Realista</label>
        </div>
        <div>
          <input type="checkbox" id="impressionista" value="Impressionista">
          <label for="impressionista">Impressionista</label>
        </div>
        <div>
          <input type="checkbox" id="abstrato" value="Abstrato">
          <label for="abstrato">Abstrato</label>
        </div>
        <div>
          <input type="checkbox" id="cubista" value="Cubista">
          <label for="cubista">Cubista</label>
        </div>
      </div>
      
      <div class="checkbox-group">
        <div>
          <input type="checkbox" id="uniforme" value="Uniforme">
          <label for="uniforme">Uniforme</label>
        </div>
        <div>
          <input type="checkbox" id="aspera" value="Áspera">
          <label for="aspera">Áspera</label>
        </div>
        <div>
          <input type="checkbox" id="texturizada_aspera" value="Texturizada áspera">
          <label for="texturizada_aspera">Texturizada áspera</label>
        </div>
        <div>
          <input type="checkbox" id="texturizada_suave" value="Texturizada suave">
          <label for="texturizada_suave">Texturizada suave</label>
        </div>
      </div>
    </div>
    <h1 class="title">Detalhes do pedido</h1>
    <div class="chat-container">
      <div class="indicator-container">
        <div class="indicator"></div>
        <div class="chat-bubble">Olá, como vai? Eu gostaria que minha pintura fosse abstrata com elementos em preto e branco</div>
      
      </div>
      <div class="indicator-container">
        <div class="indicator"></div>
        <div class="chat-bubble">Além disso, gostaria que a moldura fosse preta</div>
      </div>
      <div class="audio-player">
        <button class="play-button">►</button>
        <span class="time">0:01</span>
        <div class="progress-bar"></div>
        <span class="time">12:52</span>
        <button class="mic-icon">   
          <img src="./../../assets/img/artist-dashboard/microfone.svg" alt="Microphone" />
        </button>
      </div>
      
    </div>
    <h1 class="title">Qual o valor da encomenda?</h1>
    <div class="value-container">
      <p class="title-value">Valor em R$</p>
      <p class="content-value">R$ 15.000,00</p>
    </div>
    <div class="button-group">
      <button class="buttonPrimary">
        Enviar Orçamento
      </button>
      <button class="buttonSecondary">
        Recusar Pedido
      </button>
    </div>
  </div>
</template>

<script>
import BreadCrumbComponent from '@/components/breadcrumbs/BreadCrumbComponent.vue'

export default {
  name: 'OrderAgreementComponent',
  components: {
    BreadCrumbComponent
  }
}
</script>

<style lang="scss" scoped>
table {
  width: 100%;
  border-collapse: collapse;
  font-family: 'Inter';

}
.value-container{
  background-color: #f0f0f0;
  width: 45%;
  padding: 15px;
  border-radius: 20px;
  margin-bottom: 20px;
}
th,
td {
  border: none;
  padding: 8px;
  text-align: left;
}

th {
  width: 25%;
}
.buttonPrimary{
  background-color: #EAB766;
    margin-top: 20px;
    border: 0px;
    border-radius: 62px;
    width: 210px;
    height: 52px;
    color: #fff;
    font-family: 'Inter';
    font-weight: 600;
}
.buttonSecondary{
  background-color: #b3b3b3;
    margin-top: 20px;
    border: 0px;
    border-radius: 62px;
    width: 210px;
    height: 52px;
    color: #fff;
    font-family: 'Inter';
    font-weight: 600;
}
.button-group{
  margin: 10px;
  padding: 20px;
  display: flex;
  justify-content: space-evenly;

}
.chat-container {
  //width: 300px; /* Ajuste conforme necessário */
  margin: 0 auto;
  background-color: #f0f0f0;
  border-radius: 15px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: baseline;
}
.chat-bubble {
  background-color: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 5px; /* Ajuste o espaçamento como necessário */
  max-width: 100%;
  word-wrap: break-word;
}
.indicator-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
}
.audio-player {
  display: flex;
  align-items: center;
  background: url('path-to-your-grid-background.png') no-repeat center center;
  background-size: cover; /* ou 'contain', dependendo de como você quer que o fundo apareça */
  border-radius: 18px;
    width: 45%;
    padding: 9px;
    background-color: #fff;
}
.title-value{
  color: #333;
  font-family: Inter;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
}
.content-value{
  color: var(--gray-900, #001246);
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
}

.play-button {
  background-color: #ffffff;
  color: #7D7E7E;
  font-size: xx-large;
  border: none;
  border-radius: 50%;
  padding: 10px;
  margin-right: 10px;
  cursor: pointer;
}

.progress-bar {
  flex-grow: 1;
  height: 10px;
  background-color: #e0e0e0;
  border-radius: 5px;
  position: relative;
}

.progress-bar::after {
  content: '';
  height: 10px;
  width: 30%; /* Valor de exemplo para representar o progresso */
  background-color: #35B7EF; /* Cor da sua escolha para o progresso */
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 5px;
}

.time {
  font-size: 12px;
  color: #333;
  margin: 0 10px;
}

.mic-icon {
  background-color: #9D3207; /* ou a cor de sua escolha */
  border: none;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  width: 40px;
}
.indicator {
  height: 20px;
  width: 20px;
  background-color: #b24a00;
  border-radius: 50%;
  margin: 0 5px;
}
#highlight {
  background-color: #F8E1BE;
}
.tabs{
  display: flex;
  justify-content: space-between;
}
.tab{
  width: 200px;
}
.tab span{
    color: #9D3207;
    text-align: center;
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
}

.artist-icon {
  margin-right: 18px;
  height: 22px;
  cursor: pointer;
}
.options-group{
  background-color: #f0f0f0;
    margin-top: 5px;
    margin-bottom: 8px;
    border-radius: 15px;
    padding: 30px;
    display: flex;
    justify-content: space-between;
}

.see-more {
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.4px;
  margin-bottom: 40px;
  margin-top: 10px;
  margin-left: 10px;
  cursor: pointer;
}

.dashboard {
  display: flex;
  flex-direction: column;
  margin: 0% 15%;
}

.button {
  width: 80%;
  height: fit-content;
  background-color: #9D3207;
  margin: 3%;
  border-radius: 25px;
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  padding: 2%;
}

.button.dark {
  background-color: #000;
}

.highlight {
  color: #9D3207;
}

.title {
  color: #9D3207;
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  margin-top: 20px;
}
.no-margin{
  margin:0px !important;
}

.subtitle {
  color: #000;
  font-size: 32px;
  font-weight: 700;
}

.circle {
  display: flex;
  justify-content: center;
  margin-top: 20%;
}

.buttonsGroup {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40%;
}

.firstSection {
  background-color: #EAB766;
  height: auto;
  width: 20%;
  padding: 10px 10px 10px 10px;
  overflow: hidden;
  margin: 3% 0% 3% 8%;
  border-radius: 25px;

  @media (max-width: 1260px) {
    width: 30%;
  }

  @media (max-width: 1060px) {
    width: 50%;
  }

  @media (max-width: 886px) {
    display: none;
  }
}

.firstSectionMobile {
  display: none;

  @media (max-width: 886px) {
    width: 90%;
    background-color: #EAB766;
    height: auto;
    padding: 10px 10px 10px 10px;
    overflow: hidden;
    margin: 0% 0% 3% 8%;
    border-radius: 25px;
    display: flex;
    align-items: end;
    justify-content: space-between;
    cursor: pointer;

    .circle {
      display: flex;
      justify-content: center;
      margin-top: 0;
      height: 75px;
    }

    .button {
      width: 220px;
      padding: 0px 10px;
      float: left;
      align-items: center;
      margin-top: 0;

    }
  }

}

.secondSection {
  background-color: #fff;
  height: fit-content;
  width: 60%;
  margin: 3% 2%;
  border-radius: 3%;

  @media (max-width: 1060px) {
    height: fit-content;
    background-position: top;
    width: 90%;
    margin: 3% 7%;
  }
}
</style>