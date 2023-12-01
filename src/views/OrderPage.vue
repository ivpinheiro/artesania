<template>
    <div class="breadcrumbs">
        <BreadCrumbComponent></BreadCrumbComponent>
    </div>
    <OrderOptionsTable></OrderOptionsTable>
    <Div class="Chat">
        <h1 class="title no-margin">Detalhes da Encomenda</h1> 
        <ChatWindow></ChatWindow>
    </Div>


    <div class="confirm-area">
            <button class="buttonPrimary-confirmar contrast">Confirmar</button>
    </div>
</template>

<script>

import BreadCrumbComponent from '@/components/breadcrumbs/BreadCrumbComponent.vue'
import OrderOptionsTable from '@/components/tables/OrderOptionsTable.vue';
import ChatWindow from '@/components/chat/ChatWindowOrder.vue';

export default {
    name: 'OrderPage',
    components: {
        OrderOptionsTable,
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
.confirm-area {
    display: flex;
    justify-content: center;
    padding: 1rem 0 5rem 0;
}

.buttonPrimary-confirmar {
    background-color: #9D3207;
    border: 0px;
    border-radius: 62px;
    width: 25vh;
    height: 40px;
    color: #fff;
    font-weight: 600;
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
.no-margin{
    margin:0px !important;
}

.Chat {
    display: flex;
    flex-direction: column;
    margin: 0% 15%;
    @media (max-width: 780px) {
        margin: 0% 5%;
        overflow: hidden;   
    }
    @media (max-width: 580px) {
        margin: 0% 2%;
    }
}
</style>