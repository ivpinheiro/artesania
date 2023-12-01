<template>
    <div class="card border-0 contrast">
        <div class="sign-info">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label" id="lblNome"><b>Nome Completo</b></label>
                <input type="text" class="form-control" id="inputName" placeholder="Seu nome completo">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label" id="lblEmail"><b>Email</b></label>
                <input type="email" class="form-control" id="inputEmail" placeholder="Seu email">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label" id="lblUser"><b>Nome de Usuário</b></label>
                <input type="text" class="form-control" id="inputUserSign" placeholder="Seu nome de usuário">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label" id="lblPassword"><b>Senha</b></label>
                <input type="password" class="form-control">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label" id="lblPasswordConfirm"><b>Confirmar Senha</b></label>
                <input type="passwordC" class="form-control">
            </div>
            <button class="buttonPrimary">Cadastrar</button>
        </div>
        
        <div class="has-login">
            <RouterLink to="/login" class="text-decoration-none haslogin-txt"><b>Possuo Cadastro>></b></RouterLink>
        </div> 
    </div>
</template>

<script>
    export default{
        name: 'SignSection'
    }
</script>

<style lang="scss" scoped>
.card{
    font-family: 'Inter';
    padding: 5% 5% 5% 5%;
    //width: 100%;
    align-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 2%;
}

.sign-info{
    width: auto;
}

.card .buttonPrimary{
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

#inputUser{
    border-bottom-style: solid #000;
}

.SocialSign{
    width: 50%;
    height: auto;
    margin-bottom: 2%;
    border-radius: 6%;
    background-color: #fff;
    border: #000 solid 2%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}

.has-login{
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 100%;
    margin: 2%;
}

.haslogin-txt{
    color: #000;
}

.high-contrast {
    color: white;
    background: black;
}

.high-contrast-text {
    color: white;
}



</style>