<template>
    <div class="card border-0 contrast">
        <div class="login-info">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label" id="lblUser"><b>Usuário</b></label>
                <input type="text" class="form-control" id="inputUser" placeholder="@usuario">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label" id="lblPassword"><b>Senha</b></label>
                <input type="password" class="form-control">
            </div>
        </div>
        <button class="buttonPrimary">Entrar</button>
        
    </div>
</template>

<script>
    export default{
        name: 'LoginSection'
    }
</script>

<style lang="scss" scoped>
.card{
    padding: 10% 10% 10% 10%;
    height: 100%;
    align-content: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 2%;
}

.card .buttonPrimary{
    background-color: #9D3207;
    margin-top: 20px;
    border: 0px;
    border-radius: 62px;
    width: 210px;
    height: 52px;
    color: #fff;
    font-family: 'Inter';
    font-weight: 600;
}

#inputUser{
    border-bottom-style: solid #000;
}

.high-contrast {
    color: white;
    background: black;
}

.high-contrast-text {
    color: white;
}
</style>