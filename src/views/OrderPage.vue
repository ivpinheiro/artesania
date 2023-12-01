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
</style>