<template>
    <div class="breadcrumbs">
        <p> ... > Meu Painel > Pedidos > <span class="highlight">Encomenda Nº123</span></p>
    </div>
    <div class="pay-conteudo">
        <PaymentMethodSection></PaymentMethodSection>
    </div>
</template>

<script>

import PaymentMethod from "@/components/sections/PaymentMethodSection.vue"

export default {
    name: 'paymentPage',
    components: {
        PaymentMethod,
    }
}

</script>

<style lang="css" scoped>

.breadcrumbs {
    margin: 20px 8%;
}

.pay-conteudo{
    height: 100%;
    width: 100%;
}

</style>