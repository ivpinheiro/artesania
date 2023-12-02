<template>
    <div class="breadcrumbs">
        <BreadCrumbComponent></BreadCrumbComponent>
    </div>
    <div class="container">
        <div class="chat-container contrast" id="chat">
            <VideoChat></VideoChat>
            <ChatWindow></ChatWindow>
        </div>
        <div class="confirm-area">
                <RouterLink to="/order/payment" class="text-decoration-none">
                    <button class="buttonPrimary-aceitar contrast">Aceitar</button>
                </RouterLink>
                <button class="buttonPrimary-cancelar contrast">Cancelar</button>
        </div>
    </div>
</template>

<script>

import BreadCrumbComponent from '@/components/breadcrumbs/BreadCrumbComponent.vue'
import ChatWindow from "@/components/chat/ChatWindow.vue"
import VideoChat from "@/components/chat/VideoChat.vue"


export default {
    name: 'NegotiationChat',
    components: {
        BreadCrumbComponent,
        ChatWindow,
        VideoChat
    }
}

</script>

<style lang="css" scoped>
.breadcrumbs {
    margin: 20px 8%;
    padding-bottom: 1rem;
}

.container{
    display: flex;
    flex-direction: column;
}

.chat-container{
    display: grid;
    grid-template-columns: 1fr 3fr;
}

.confirm-area {
    margin: 2rem;
    display: flex;
    justify-content: space-evenly;

    @media (max-width: 1060px) {
        flex-direction: column;
        align-items: center;

    }
}

.buttonPrimary-aceitar {
    background-color: #9D3207;
    margin-top: 20px;
    border: 0px;
    border-radius: 62px;
    width: 210px;
    height: 52px;
    color: #fff;
    font-family: 'Inter';
    font-weight: 600;
    margin: 0 2rem;
}

.buttonPrimary-cancelar {
    background-color: #EDEDED;
    margin-top: 20px;
    border: 0px;
    border-radius: 62px;
    width: 210px;
    height: 52px;
    color: #000;
    font-family: 'Inter';
    font-weight: 600;
    margin: 0 2rem;
}

.high-contrast {
    color: white;
    background: black;
}

.high-contrast-text {
    color: white;
}
</style>