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
                    <button class="buttonPrimary contrast" id="btnAceitar">Aceitar</button>
                </RouterLink>
                <button class="buttonPrimary contrast" id="btnCancelar">Cancelar</button>
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
    @media (max-width:768px) {
        padding: 0 !important
    }
}

.chat-container{
    display: grid;
    grid-template-columns: 1fr 3fr;

    @media (max-width: 768px) {
        display: grid;
        grid-template-columns: 1fr;
        margin: 0 5%;        
    }
}

.confirm-area {
    margin: 2rem;
    display: flex;
    justify-content: space-evenly;

    @media (max-width: 1060px) {
        flex-direction: column;
        align-items: center;

    }

    @media (max-width: 768px) {
        display:flex;
        flex-direction: columns;
    }
}

.buttonPrimary{
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

    @media (max-width:768px) {
        margin: 1rem 0;
    }

    
}
#btnCancelar{
        background-color: #EDEDED;
        color: #000;
}

/* .buttonPrimary-cancelar {
    
    margin-top: 20px;
    border: 0px;
    border-radius: 62px;
    width: 210px;
    height: 52px;
    color: #000;
    font-family: 'Inter';
    font-weight: 600;
    margin: 0 2rem;
} */

.high-contrast {
    color: white;
    background: black;
}

.high-contrast-text {
    color: white;
}
</style>