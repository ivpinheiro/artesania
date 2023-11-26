<template>
    <div class="constrat">
        <div class="breadcrumbs">
            <BreadCrumbComponent></BreadCrumbComponent>
        </div>
        <div class="chat-conteudo">
            <ChatWindow></ChatWindow>
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


export default {
    name: 'NegotiationChat',
    components: {
        BreadCrumbComponent,
        ChatWindow
    }
}

</script>

<style lang="css" scoped>
.breadcrumbs {
    margin: 20px 8%;
    padding-bottom: 1rem;
}

.highlight{
    color: #9D3207;        
}

.pay-conteudo {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 5rem;
    padding: 0rem 5rem;

    /*display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 0rem 5rem;
    margin: 1rem;*/
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