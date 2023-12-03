<template>
    <div class="breadcrumbs">
        <BreadCrumbComponent></BreadCrumbComponent>
    </div>
    <div class="pay-conteudo">
        <PaymentMethodSection></PaymentMethodSection>
        <PaymentFormSection></PaymentFormSection>
        <PaymentDetailSection></PaymentDetailSection>
    </div>
    <div class="confirm-area">
        <RouterLink to="/order/payment/confirm" class="text-decoration-none">
            <button class="buttonPrimary-continue">Continuar</button>
        </RouterLink>
    </div>
</template>

<script>

import BreadCrumbComponent from '@/components/breadcrumbs/BreadCrumbComponent.vue'
import PaymentMethodSection from "@/components/sections/PaymentMethodSection.vue"
import PaymentFormSection from '@/components/sections/PaymentFormSection.vue'
import PaymentDetailSection from '@/components/sections/PaymentDetailSection.vue'


export default {
    name: 'paymentPage',
    components: {
        BreadCrumbComponent,
        PaymentMethodSection,
        PaymentFormSection,
        PaymentDetailSection
    }
}

</script>

<style lang="css" scoped>
.breadcrumbs {
    margin: 20px 8%;
    padding-bottom: 1rem;
}

.highlight {
    color: #9D3207;
}

.pay-conteudo {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 5rem;
    padding: 0rem 5rem;

    @media (max-width:768px) {
        display: flex;
        flex-direction: column;
        padding: 0 !important;
        margin: 0 5%;
    }

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

.buttonPrimary-continue {
    background-color: #9D3207;
    border: 0px;
    border-radius: 62px;
    width: 25vh;
    height: 40px;
    color: #fff;
    font-weight: 600;
}
</style>