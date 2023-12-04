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
            <RouterLink to="/"><button class="buttonPrimary" id="buttonLogin" @click="buttonLoginClick">Entrar</button></RouterLink>
        </div>
        
        <button class="SocialSign"><font-awesome-icon class="fa" id="social-sign" icon="fa-brands fa-google"/>Entrar com Google</button>
        <button class="SocialSign"><font-awesome-icon class="fa" id="social-sign" icon="fa-brands fa-facebook"/>Entrar com Facebook</button>

        <div class="forgot-firstTime">
            <RouterLink to="/sign" class="text-reset"><b>Esqueceu a senha></b></RouterLink>
            <RouterLink to="/sign" class="text-reset"><b>Primeiro Acesso></b></RouterLink>
        </div>
        
    </div>
</template>

<script>
    export default{
        name: 'LoginSection',
        methods: {
            buttonLoginClick() {
                localStorage.setItem('statusLogin', 'Logado');
            }
        }
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

    overflow: hidden;
}
a:focus {
    color: #000;
}
.login-info{
    width: 50%;
}

.form-control{
    border: none; /* Removendo todas as bordas */
    border-bottom: 1px solid black; /* Adicionando apenas a borda inferior */
    outline: none; /* Removendo a borda de foco ao clicar */
}

.card .buttonPrimary{
    background-color: #9D3207;
    margin-left: 25%;
    border: 0px;
    border-radius: 62px;
    width:  50%;
    height: 50px;
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

.forgot-firstTime{
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 100%;

}
.high-contrast {
    color: white;
    background: black;
}

.high-contrast-text {
    color: white;
}
</style>