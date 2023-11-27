<template>
    <div class="constrat">
        <div class="breadcrumbs">
            <BreadCrumbComponent></BreadCrumbComponent>
        </div>
        <div class="container">
            <div class="chat-area">
                <ChatWindow></ChatWindow>
            </div>
            <div class="video-area">
                <VideoChat></VideoChat>
            </div>
        </div>
        <div class="confirm-area">
            <button class="buttonPrimary-aceitar">Aceitar</button>
            <button class="buttonPrimary-cancelar">Cancelar</button>
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

.confirm-area {
    display: flex;
    justify-content: center;
    padding: 1rem 0 5rem 0;
}

.buttonPrimary-aceitar {
    background-color: #EAB766;
    border: 0px;
    border-radius: 62px;
    width: 25vh;
    height: 40px;
    color: #fff;
    font-weight: 600;
}

.buttonPrimary-cancelar {
    background-color: #EDEDED;
    border: 0px;
    border-radius: 62px;
    width: 25vh;
    height: 40px;
    color: #333;
    font-weight: 600;
}

.high-contrast {
  color: white;
  background: black;
}

.high-contrast-text {
  color: white;
}
</style>