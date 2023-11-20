<template>
    <hr class="divider">
    <div class="breadcrumbs">
        <p>Home > Mira Maroni > <span class="highlight">Meu painel</span></p>
    </div>
    <div class="dashboard">
        <div class="firstSection">
            <div class="circle">
                <img src="./../assets/img/artist-dashboard/profile-logo-artist.svg" alt="Meu Perfil">
            </div>
            <div class="buttonsGroup">
                <div class="button dark">Encomendas</div>
                <div class="button">Enviados</div>
                <div class="button">Chat</div>
                <div class="button">Configurações</div>
                <div class="button">Sair</div>
            </div>
        </div>
        <div class="secondSection">

        </div>

    </div>
</template>

<script>
export default {
    name: 'DashboardComponent'
}
</script>

<style lang="scss" scoped>
.dashboard{
    display: flex;
}
.button{
    width: 80%;
    height: fit-content;
    background-color: #9D3207;
    margin: 3%;
    border-radius: 25px;
    color: #fff;
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    padding: 2%;
}
.button.dark{
    background-color: #000;
}
.divider {
    height: 2px; /* define a espessura da linha */
    background-color:rgba(0, 0, 0, 0.10); /* define a cor da linha */
    border: none; /* remove qualquer borda padrão */
    margin: 0px 8%;
}
.breadcrumbs{
    margin: 20px 8%;
    p{
        font-weight: 500;
        font-size: 16px;
    }
}
.highlight{
    color: #9D3207; 
}

.circle{
    display: flex;
    justify-content: center;
}
.buttonsGroup{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40%;
}

.firstSection{
    background-color: #EAB766;
    height: auto;
    width: 20%;
    padding: 10px 10px 10px 10px;
    overflow: hidden;
    margin: 3% 0% 3% 10%;
    border-radius: 25px;
    @media (max-width: 1060px) {
        width: 100%;
        margin: 20px 0px;
    }
}

.secondSection{
    background-color: #EAB766;
    height: 900px;
    width: 60%;
    margin: 3% 2%;
    border-radius:3%;
    @media (max-width: 1060px){
        height: 115px;
        background-position: top;
        width: 100%;
    }
}

</style>