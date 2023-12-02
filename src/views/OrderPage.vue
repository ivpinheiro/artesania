<template>
    <div>
        <hr class="divider">
        <div class="breadcrumbs">
            <BreadCrumbComponent></BreadCrumbComponent>
        </div>
        <OrderOptionsTable></OrderOptionsTable>
        <div class="orderDetails-area">
            <h1 class="title">Detalhes do pedido</h1>
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
                <div class="conversation-area">
                    <input type="text" name="txtArtistIput" id="txtArtistInput">
                    <div class="conversationButton-area">
                        <button class="sendImg">
                            <img src="@/assets/img/chat/chat_image_upload.svg" alt="Enviar Imagem" class="buttonSend">
                        </button>
                        <button class="mic-conversation">
                            <img src="@/assets/img/chat/chat_microfone.svg" alt="Enviar Audio" class="buttonSend">
                        </button>
                    </div>
                </div>
            </div>
            <div class="submitOrder">
                <button class="buttonPrimary">
                    <RouterLink class="link-class-none" to="/order/shipping">Finalizar</RouterLink>
                </button>
            </div>
        </div>
    </div>
</template>

<script>

import BreadCrumbComponent from '@/components/breadcrumbs/BreadCrumbComponent.vue'
import OrderOptionsTable from '@/components/tables/OrderOptionsTable.vue';

export default {
    name: 'OrderPage',
    components: {
        OrderOptionsTable,
        BreadCrumbComponent
    }
}

</script>

<style lang="css" scoped>
.orderDetails-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0% 15%;
}

.title {
    color: #9D3207;
    font-family: Inter;
    font-size: 32px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    margin-top: 20px;
    padding: 1rem;
    align-self: self-start;

    @media (max-width: 1060px) {
        font-size: 26px;
    }
}

.chat-container {
    /* margin: 0 auto; */
    background-color: #f0f0f0;
    border-radius: 15px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
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
    width: 45%;
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