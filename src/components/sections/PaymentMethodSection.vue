<template>
    <div class="card-content">
        <div class="method">
            <b class="title-card">Escolha forma de pagamento</b>
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

.title-card{
    font-size: 20px;
}
.card-content{
    background-color: #f0eeed;
    border-radius: 5%;
    width: 100%;
    height: 100%;
    padding: 1rem
}


.method-options{
    display: flex;
    padding-top: 7rem;
    flex-direction: column;

    @media (max-width: 768px) {
        padding: 5rem 0;
    }

}

.method .buttonPrimary{
    background-color: #9D3207;
    margin-left: 25%;
    margin-top: 1%;
    margin-bottom: 10%;
    border: 0px;
    border-radius: 62px;
    width: 50%;
    height: 40px;
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
    height: 40px;
    color: #000;
    font-weight: 600;
}


</style>