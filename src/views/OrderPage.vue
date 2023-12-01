<template>
    <BreadCrumbComponent></BreadCrumbComponent>
    <OrderOptionsTable></OrderOptionsTable>
    <div class="orderDetails-area">
        <h1 class="title">Detalhes do pedido</h1>
        <div class="chat-container">
            <div class="indicator-container">
                <div class="chat-bubble">Olá, como vai? Eu gostaria que minha pintura fosse abstrata com elementos em preto e branco</div>
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
                    <img src="./../assets/img/artist-dashboard/microfone.svg" alt="Microfone">
                </button>
            </div>
            <div class="indicator-container">
                <div class="chat-bubble img">
                    <img src="@/assets/img/products/Image Sent.svg" alt="imagem enviada 1">
                    <img src="@/assets/img/products/Image Sent-1.svg" alt="imagem enviada 2">
                    <img src="@/assets/img/products/Image Sent-2.svg" alt="imagem enviada 3">
                    <div class="more-imgs">
                        <img src="@/assets/img/products/Image Sent-4.svg" alt="Mais duas imagens">
                            <img src="@/assets/img/products/moreImgs.svg" alt="Mais duas imagens" class="sopreposeImg">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import BreadCrumbComponent from '@/components/breadcrumbs/BreadCrumbComponent.vue'
import  OrderOptionsTable from '@/components/tables/OrderOptionsTable.vue';

export default {
    name: 'OrderPage',
    components: {
        OrderOptionsTable,
        BreadCrumbComponent
    }
}

</script>

<style lang="css" scoped>

.orderDetails-area{
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
    background: url('path-to-your-grid-background.png') no-repeat center center;
    background-size: cover; /* ou 'contain', dependendo de como você quer que o fundo apareça */
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
    background-color: #9D3207; /* ou a cor de sua escolha */
    border: none;
    border-radius: 100%;
    cursor: pointer;
    width: 40px;
    height: 40px;
}

.img{
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 5px;
    row-gap: 5px;
}

.more-imgs{
    display: flex;
    flex-direction: column;
}

</style>