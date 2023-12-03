<template>
    <hr class="divider">
    <div class="breadcrumbs">
        <BreadCrumbComponent></BreadCrumbComponent>
    </div>
    <div class="content" id="obrigado">
        <div class="confirm-icon">
            <img src="@/assets/confirmPayIcon.svg" alt="Icone de Confirmação de Pedido">
        </div>
        <div class="confirm-text">
            <h3>Obrigado</h3><br>
            <p>A sua encomenda foi efetuada e enviada para o Artista!</p>
        </div>
        <h1 class="title" id="resumo-da-encomenda">Resumo da encomenda:</h1>

        <div class="bigger-container">
            <OrderOptionsTableVertical></OrderOptionsTableVertical>
            <div class="chat-container">
                <div class="indicator-container">
                    <div class="chat-bubble">Olá, como vai? Eu gostaria que minha pintura fosse abstrata com elementos em
                        preto e branco</div>
                    <div class="indicator"></div>
                </div>
                <div class="indicator-container">
                    <div class="chat-bubble">Além disso, gostaria que a moldura fosse preta</div>
                    <div class="indicator"></div>
                </div>
                <div class="audio-player">
                    <button class="play-button">►</button>
                    <span class="time">0:01</span>
                    <div class="progress-bar"></div>
                    <span class="time">12:52</span>
                    <button class="mic-icon">
                        <img src="@/assets/img/artist-dashboard/microfone.svg" alt="Microfone">
                    </button>
                </div>
                <div class="indicator-container">
                    <div class="chat-bubble imgs">
                        <img src="@/assets/img/products/ImageSent-1.svg" alt="imagem enviada 1">
                        <img src="@/assets/img/products/ImageSent-2.svg" alt="imagem enviada 2">
                        <img src="@/assets/img/products/ImageSent-3.svg" alt="imagem enviada 3">
                        <div class="more-imgs">
                            <img src="@/assets/img/products/ImageSent-4.svg" alt="Mais duas imagens">
                            <div class="moreImgs-text">
                                <span>+2</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button class="buttonPrimary">
            <RouterLink to="/chat"
              class="d-flex justify-content-center align-items-center text-decoration-none router-link">
              Ver Resposta
            </RouterLink>
        </button>
    </div>
</template>

<script>

import BreadCrumbComponent from '@/components/breadcrumbs/BreadCrumbComponent.vue'
import OrderOptionsTable from '@/components/tables/OrderOptionsTable.vue';
import OrderOptionsTableVertical from '@/components/tables/OrderOptionsTableVertical.vue';

export default {
    name: 'orderShipping',
    components: {
        BreadCrumbComponent,
        OrderOptionsTable,
        OrderOptionsTableVertical
    }
}

</script>
<style lang="css" scoped>
.breadcrumbs {
    margin: 20px 8%;
    padding-bottom: 1rem;
}

.content {
    color: #5a5a5a;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
}

.bigger-container {
    background-color: #f0f0f0;
    border-radius: 15px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5rem;
    padding: 0rem 2rem;
    top: 50%;
    margin: 0% 15%;
    /* align-items: center;
    justify-items: center; */

    @media (max-width: 780px) {
        margin: 0% 5%;
        overflow: hidden;
    }

    @media (max-width: 580px) {
        margin: 0% 2%;
    }
}

.chat-container {
    /* margin: 0 auto; */
    align-items: flex-end;
    padding: 2rem;
    display: flex;
    flex-direction: column;
}

.confirm-text {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}

/* .orderDetails-area{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0% 15%;
} */
.title {
    color: #9D3207;
    font-family: Inter;
    font-size: 32px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    margin-top: 20px;
    margin: 0% 15%;
    padding: 1rem;
    align-self: self-start;

    @media (max-width: 1060px) {
        font-size: 26px;
    }
}

.indicator-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
}

.indicator {
    height: 20px;
    width: 20px;
    background-color: #b24a00;
    border-radius: 50%;
    margin: 0 5px;
    min-width: 20px;
}

.chat-bubble {
    background-color: white;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    max-width: 100%;
    word-wrap: break-word;
}

.audio-player {
    display: flex;
    align-items: center;
    background-size: cover;
    border-radius: 18px;
    width: 100%;
    padding: 9px;
    background-color: #fff;

    @media (max-width: 1060px) {
        width: 80%;
    }
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

.time {
    font-size: 12px;
    color: #333;
    margin: 0 10px;
}

.progress-bar {
    flex-grow: 1;
    height: 10px;
    background-color: #e0e0e0;
    border-radius: 5px;
    position: relative;
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

.imgs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 5px;
    row-gap: 5px;
}

.more-imgs {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
}

.moreImgs-text {
    position: absolute;
    color: #fff;
    font-family: 'Inter';
    font-size: 32px;
    font-style: normal;
    font-weight: 400;

}

.conversation-area {
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 1rem 0 0 0;
}

#txtArtistInput {
    background-color: rgba(51, 51, 51, 35%);
    border-style: none;
    border-radius: 1rem;
    width: 100%;
    padding: 0rem 1rem;
    margin: 0rem 1rem;
}

.conversationButton-area {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 30%;

    color: rgba(51, 51, 51, 80%);
}

.sendImg {
    border-style: none;
}

.mic-conversation {
    border-style: none;
    background-color: none;
}

.submitOrder {
    padding: 2rem 0;
}

.buttonPrimary {
    background-color: #9D3207;
    border: 0px;
    border-radius: 62px;
    width: 200px;
    height: auto;
    color: #fff;
    font-weight: 600;
    font-size: 20px;
}
</style>