<template>
    <div class="content">
        <div class="confirm-icon">
            <img src="@/assets/confirmPayIcon.svg" alt="Icone de Confirmação de compra">
        </div>
        <div class="confirm-text">
            <h3>Pagamento Confirmado</h3><br>
            <p>Sua compra foi efetuada com sucesso!</p>
            Um email foi enviado para meuemail@gmeuemail.com com detalhees do pedido
        </div>
    </div>
</template>

<script>

export default {
    name: 'confirmPayment'
}

</script>
<style lang="css" scoped>

.content{
    color: #5a5a5a;
    display: flex;
    flex-direction: column;
    align-items: center;

}

.confirm-text{
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}

</style>