<template>
    <div class="card-content">
        <div class="method">
            <b>Escolha forma de pagamento</b>
            <div class="method-options">
                <button class="buttonPrimary">Crédito</button>
                <button class="buttonPrimary-pix">Pix</button>
            </div>
        </div>
    </div>
</template>


<script>

export default {
    name: 'PaymentMethod'
}

</script>

<style lang="css" scoped>

.pay-container{
    background-color: whitesmoke;
}

.card-content{
    background-color: #f0eeed;
    border-radius: 5%;
    height: 100%;
    padding: 1rem
}


.method-options{
    padding: 3rem 0rem;
    align-items: center;
}

.method .buttonPrimary{
    background-color: #9D3207;
    margin-left: 25%;
    margin-top: 1%;
    margin-bottom: 10%;
    border: 0px;
    border-radius: 62px;
    width: 50%;
    height: auto;
    color: #fff;
    font-weight: 600;
}

.buttonPrimary-pix{
    background-color: white;
    margin-left: 25%;
    margin-top: 1%;
    margin-bottom: 10%;
    border: 0px;
    border-radius: 62px;
    width: 50%;
    height: auto;
    color: #000;
    font-weight: 600;
}


</style>