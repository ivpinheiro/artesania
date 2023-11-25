<template>
    <div class="breadcrumbs">
        <p> ... > Meu Painel > Pedidos > <span class="highlight">Encomenda Nº123</span></p>
    </div>
    <div class="pay-conteudo">
        <PaymentMethodSection></PaymentMethodSection>
        <PaymentFormSection></PaymentFormSection>
        
        <div class="card-content">   
            <div class="details">
                <b>Detalhes de compra</b>
            </div>
        </div>
    </div>
    <div class="confirm-area">
        <button class="buttonPrimary-continue">Continuar</button>
    </div>
    

</template>

<script>

import PaymentMethodSection from "@/components/sections/PaymentMethodSection.vue"
import PaymentFormSection from '@/components/sections/PaymentFormSection.vue'


export default {
    name: 'paymentPage',
    components: {
        PaymentMethodSection,
        PaymentFormSection,
    }
}

</script>

<style lang="css" scoped>

.breadcrumbs {
    margin: 20px 8%;
}

.pay-conteudo{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 0rem 5rem;
    margin: 1rem;
}

.confirm-area{
    display: flex;
    justify-content: center;
    padding: 1rem 0 5rem 0;
}

.buttonPrimary-continue{
    background-color: #9D3207;
    border: 0px;
    border-radius: 62px;
    width: 25vh;
    height: 5vh;
    color: #fff;
    font-weight: 600;
}


</style>