<template>
  <OrderOptionsTable></OrderOptionsTable>
  <div class="dashboard">
    <h1 class="title" id="detalhes-do-pedido">Detalhes do pedido</h1>
    <div class="chat-container">
      <div class="indicator-container">
        <div class="indicator"></div>
        <div class="chat-bubble">Olá, como vai? Eu gostaria que minha pintura fosse abstrata com elementos em preto e
          branco</div>

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

    <div class="order-value">
      <h1 class="title" id="qual-o-valor-da-encomenda">Qual o valor da encomenda?</h1>
      <div class="value-container">
        <p class="title-value">Valor em R$</p>
        <input type="number" name="txtOrderValue" id="txtOrderValue">
      </div>
    </div>
    <div class="button-group">
      <RouterLink class="link-class-none" to="/chat">
        <button class="buttonPrimary">
          Enviar Orçamento
        </button>
      </RouterLink>
      <RouterLink class="link-class-none" to="/dashboard">
        <button class="buttonSecondary">
          Recusar Pedido
        </button>
      </RouterLink>
    </div>
  </div>
</template>

<script>
import BreadCrumbComponent from '@/components/breadcrumbs/BreadCrumbComponent.vue'
import OrderOptionsTable from '@/components/tables/OrderOptionsTable.vue'

export default {
  name: 'OrderAgreementComponent',
  components: {
    BreadCrumbComponent,
    OrderOptionsTable
  }
}
</script>

<style lang="scss" scoped>
table {
  width: 100%;
  border-collapse: collapse;
  font-family: 'Inter';

}

.order-value {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.value-container {
  background-color: #f0f0f0;
  width: 45%;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 20px;
  margin-bottom: 20px;

  @media (max-width: 1060px) {
    width: 100%;
    margin-bottom: 0px;
  }
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

#txtOrderValue{
  border: none;
  border-bottom: 1px solid #000;
  background-color: #f0f0f0;
  outline: none;

  font-size: 26px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 20px;
  }
}

.buttonPrimary {
  background-color: #9D3207;
  margin-top: 20px;
  border: 0px;
  border-radius: 62px;
  width: 210px;
  height: 52px;
  color: #fff;
  font-family: 'Inter';
  font-weight: 600;
}

.buttonSecondary {
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

.button-group {
  margin: 10px;
  padding: 20px;
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 1060px) {
    flex-direction: column;
    align-items: center;

  }
}

.checkbox-group label {
  padding-left: 10px;

  @media (max-width: 1060px) {
    font-size: 12px;
  }

  @media (max-width: 780px) {
    font-size: 10px;
  }
}

.chat-container {
  margin: 0 auto;
  background-color: #f0eeed;
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
  margin-bottom: 5px;
  /* Ajuste o espaçamento como necessário */
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
  background-size: cover;
  /* ou 'contain', dependendo de como você quer que o fundo apareça */
  border-radius: 18px;
  width: 45%;
  padding: 9px;
  background-color: #fff;

  @media (max-width: 1060px) {
    width: 80%;
  }
}

.title-value {
  color: #333;
  font-family: Inter;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;

  align-self: self-start;
}

.content-value {
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
  width: 30%;
  /* Valor de exemplo para representar o progresso */
  background-color: #35B7EF;
  /* Cor da sua escolha para o progresso */
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
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #9D3207;
  /* ou a cor de sua escolha */
  border: none;
  border-radius: 100%;
  cursor: pointer;
  width: 40px;
  height: 40px;
}

.indicator {
  height: 20px;
  width: 20px;
  background-color: #b24a00;
  border-radius: 50%;
  margin: 0 5px;
  min-width: 20px;
}

#highlight {
  background-color: #F8E1BE;
}

.tabs {
  display: flex;
  justify-content: space-between;
}

.tab {
  width: 200px;
}

.tab span {
  color: #9D3207;
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;

  @media (max-width: 1060px) {
    font-size: 14px;
  }

  @media (max-width: 780px) {
    font-size: 12px;
  }
}

.options-group {
  background-color: #f0f0f0;
  margin-top: 5px;
  margin-bottom: 8px;
  border-radius: 15px;
  padding: 30px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1060px) {
    flex-wrap: wrap;
  }
}

.dashboard {
  display: flex;
  flex-direction: column;
  margin: 0% 15%;

  @media (max-width: 768px) {
    margin: 0% 5%;
    overflow: hidden;
  }

  @media (max-width: 580px) {
    margin: 0% 2%;
  }
}

.title {
  color: #9D3207;
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  padding: 2rem 0;
  align-self: self-start;

  @media (max-width: 1060px) {
    font-size: 26px;
  }

  @media (max-width:768px){
    margin: 0 !important;
    padding: 1rem 0 0.5rem 0;
  }
}

/* .no-margin{
  margin:0px !important;
} */
</style>