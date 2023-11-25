<template>
    <div class="card-content">
        <div class="method">
            <b>Detalhes da compra</b>
            <div class="detail-info">
                <div class="ml-3">
                    <label for="adress" class="form-label" id="lblAdress"><b>Endereço de entrega</b></label>
                    <input type="text" name="adress" class="input-resume" id="inputAdress" 
                        placeholder="Rua Teste, 100, Apto 10 São Carlos, São Paulo, CEP" disabled>
                </div>
                <div class="ml-3">
                    <label for="product" class="form-label" id="lblEntrega"><b>Produto</b></label>
                    <input type="text" name="product" class="input-resume" id="inputProduct" placeholder="Produto Personalizdado" disabled>
                </div>
                <div class="ml-3">
                    <label for="resumePayment" class="form-label" id="lblResume"><b>Resumo de Pagamento</b></label>
                    <input type="text" name="resumePayment" class="input-resume" id="inputRProduct" placeholder="Produtos: R$15.000,00" disabled>
                    <input type="text" name="resumePayment" class="input-resume" id="inputRFrete" placeholder="Frete: R$50,00" disabled>
                    <input type="text" name="resumePayment" class="input-resume" id="inputRTotal" placeholder="Total: R$15.050,00" disabled>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'PaymentDetail'
}

</script>


<style lang="css" scoped>

.card-content {
    background-color: #f0eeed;
    border-radius: 5%;
    width: 100%;
    height: 100%;
    padding: 1rem
}

.detail-info{
    padding-top: 1rem;
}

.input-resume{
    width: 100%;
    border-style: none;
    padding-left: 1rem;
}

.ml-3{
    padding-bottom: 3rem;
}

</style>