<template>  
  <div class="dashboard">
    <div class="firstSection">
      <div class="circle">
        <img src="@/assets/img/artist-dashboard/profile-logo-artist.svg" alt="Meu Perfil">
      </div>
      <div class="buttonsGroup">
        <div class="button dark">Encomendas</div>
        <div class="button">Enviados</div>


        <div class="button">Chat</div>

        <div class="button">Configurações</div>

        <div class="button">Sair</div>
      </div>
    </div>
    <div class="firstSectionMobile">
      <div class="circle">
        <img src="@/assets/img/artist-dashboard/profile-logo-artist.svg" alt="Meu Perfil">
      </div>
      <div class="button dark"> ▼ Encomendas</div>
    </div>
    <div class="secondSection">
      <h1 class="title">Encomendas</h1>
      <h2 class="subtitle">Novas</h2>
      <table>
        <tr>
          <th>Hora</th>
          <th>Cliente</th>
          <th>Frete</th>
          <th>Ações</th>
        </tr>
        <tr>
          <td>11:21 PM</td>
          <td>Thamyres Silva</td>
          <td>Loggi</td>
          <td>
            <img class="artist-icon" src="@/assets/img/artist-dashboard/contact.svg" alt="Conversar">
            <img class="artist-icon" src="@/assets/img/artist-dashboard/trash.svg" alt="Cancelar">
          </td>
        </tr>
        <tr>
          <td>11:22 PM</td>
          <td>Juliana Santos</td>
          <td>Correios</td>
          <td>
            <img class="artist-icon" src="@/assets/img/artist-dashboard/contact.svg" alt="Conversar">
            <img class="artist-icon" src="@/assets/img/artist-dashboard/trash.svg" alt="Cancelar">
          </td>
        </tr>
        <tr>
          <td>11:23 PM</td>
          <td>Mateus Vinicius</td>
          <td>Fedex</td>
          <td>
            <img class="artist-icon" src="@/assets/img/artist-dashboard/contact.svg" alt="Conversar">
            <img class="artist-icon" src="@/assets/img/artist-dashboard/trash.svg" alt="Cancelar">
          </td>
        </tr>
      </table>
      <p class="see-more">Veja mais <img class="artist-icon" src="@/assets/img/artist-dashboard/seta-direita.svg"
          alt="Seta para Direita"></p>
      <h2 class="subtitle">Faturadas</h2>
      <table>
        <tr>
          <th>Hora</th>
          <th>Cliente</th>
          <th>Frete</th>
          <th>Ações</th>
        </tr>
        <tr id="highlight">
          <td>11:20 PM</td>
          <td>Luiz Benedetto</td>
          <td>Correios</td>
          <td>
            <RouterLink class="link-class-none" to="/dashboard/encomenda">
            <img class="artist-icon" src="@/assets/img/artist-dashboard/contact.svg" alt="Conversar">
            </RouterLink>
            <img class="artist-icon" src="@/assets/img/artist-dashboard/trash.svg" alt="Cancelar">
          </td>
        </tr>
        <tr>
          <td>11:24 PM</td>
          <td>Ivan Pinheiro</td>
          <td>Correios</td>
          <td>
            <img class="artist-icon" src="@/assets/img/artist-dashboard/contact.svg" alt="Conversar">
            <img class="artist-icon" src="@/assets/img/artist-dashboard/trash.svg" alt="Cancelar">
          </td>
        </tr>
      </table>
      <p class="see-more">Veja mais <img class="artist-icon" src="@/assets/img/artist-dashboard/seta-direita.svg"
          alt="Seta para Direita"></p>

      <h2 class="subtitle">Enviadas</h2>
      <table>
        <tr>
          <th>Hora</th>
          <th>Destino</th>
          <th>Status</th>
          <th>Ações</th>
        </tr>
        <tr>
          <td>10:30 PM</td>
          <td>São Paulo - SP</td>
          <td>A caminho</td>
          <td>
            <img class="artist-icon" src="@/assets/img/artist-dashboard/chat.svg" alt="Chat">
            <img class="artist-icon" src="@/assets/img/artist-dashboard/list.svg" alt="Mais opções">
          </td>
        </tr>
        <tr>
          <td>10:31 PM</td>
          <td>Ubatuba - SP</td>
          <td>A caminho</td>
          <td>
            <img class="artist-icon" src="@/assets/img/artist-dashboard/chat.svg" alt="Chat">
            <img class="artist-icon" src="@/assets/img/artist-dashboard/list.svg" alt="Mais opções">
          </td>
        </tr>
        <tr>
          <td>10:33 PM</td>
          <td>Montes Claros - MG</td>
          <td>A caminho</td>
          <td>
            <img class="artist-icon" src="@/assets/img/artist-dashboard/chat.svg" alt="Chat">
            <img class="artist-icon" src="@/assets/img/artist-dashboard/list.svg" alt="Mais opções">
          </td>
        </tr>
      </table>
      <p class="see-more">Veja mais <img class="artist-icon" src="@/assets/img/artist-dashboard/seta-direita.svg"
          alt="Seta para Direita"></p>


    </div>

  </div>
</template>

<script>
import BreadCrumbComponent from '@/components/breadcrumbs/BreadCrumbComponent.vue'

export default {
  name: 'DashboardComponent',
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

th,
td {
  border: none;
  padding: 8px;
  text-align: left;
}

th {
  width: 25%;
}

#highlight {
  background-color: #F8E1BE;
}

.artist-icon {
  margin-right: 18px;
  height: 22px;
  cursor: pointer;
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

  @media (max-width: 886px) {
    flex-direction: column;
  }
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
  font-size: 64px;
  font-weight: 700;
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
  margin: 0% 0% 3% 8%;
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