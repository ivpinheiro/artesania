<template>
    <div class="content" id="pagamento-confirmado">
        <div class="confirm-icon">
            <img src="@/assets/confirmPayIcon.svg" alt="Icone de Confirmação de compra">
        </div>
        <div class="confirm-text">
            <h3>Pagamento Confirmado</h3><br>
            <p>Sua compra foi efetuada com sucesso!</p>
            <p>Um email foi enviado para <b>meuemail@gmeuemail.com</b> com detalhees do pedido</p>
        </div>
    </div>
</template>

<script>

export default {
    name: 'confirmPayment'
}

</script>
<style lang="css" scoped>
.content {
    color: #5a5a5a;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
        margin: 0 5%;
    }

}

.confirm-text {
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;


    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;

    }
}
</style>