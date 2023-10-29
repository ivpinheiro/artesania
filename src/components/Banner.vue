<template>
    
    <div class="bannerSection">
        <div class="firstSection">
            <div><h1 class="headline">ENCONTRE <span class="attention">ARTISTAS</span> QUE TE COMPLETEM</h1></div>
            <div><h6 class="subline">Descubra um universo de expressão artística onde a arte contemporânea brasileira encontra seu lar. Apresentamos uma seleção meticulosa de obras, cada uma contando sua própria história.</h6></div>
            <button class="buttonPrimary">Ver Coleção</button>
            <div class="proves">
                <div>
                    <h1 class="boldTitle">200+</h1>
                    <h3 class="lightTitle">Artistas Independentes</h3>
                </div>
                <div>
                    <h1 class="boldTitle">2,000+</h1>
                    <h3 class="lightTitle">Produtos de Alta Qualidade</h3>
                </div>
                <div>
                    <h1 class="boldTitle">30,000+</h1>
                    <h3 class="lightTitle">Clientes Atendidos</h3>
                </div>
            </div>
            

        </div>
        <div class="secondSection">

        </div>
    </div>
</template>

<script>
export default {
    name: 'BannerComponent'
}
</script>

<style lang="scss" scoped>

.bannerSection {
    width: 100vw;
    height: 663px;
    max-height: 663px;
    display: flex;
    align-items: center;
    background-color: #F3F3DC;
}
.firstSection{
    background-color: #F3F3DC;
    height: 100%;
    width: 55%;
    padding: 100px 100px 100px 70px;
}
.firstSection .headline{
    color: #000;
    font-size: 64px;
    font-family: 'Inter';
    font-weight: 800;
    line-height: 1;
}
.firstSection .headline .attention{
    color: #9D3207;
}
.firstSection .buttonPrimary{
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
.firstSection .proves{
    display: flex;
    margin-top: 37px;
    color: #000;
    justify-content: space-between;
}

.firstSection .boldTitle{
    font-size: 40px;
    font-weight: 600;
}
.firstSection .lightTitle{
    font-size: 16px;
    
}
.secondSection{
    background-image: url('./../assets/img/banner/GirassoisDeVanGogh.png');
    background-size: cover; /* Ajusta a imagem para cobrir toda a div */
    background-position: center; /* Centraliza a imagem na div */
    height: 100%;
    width: 45%;
}


#brand-name {
    font-family: Inter;
    font-weight: 900;
    color: #9D3207;
}

.subline{
    max-width: 545px;
    margin-top: 30px;
}
.navbar-brand {
    display: flex;
    align-items: center;
}

.navbar-brand img {
    max-height: 40px;
    margin-right: 10px;
}

#brand-name {
    font-size: 1.5rem;
}

.navbar-toggler {
    margin-right: 15px;
}

.navbar-nav {
    margin-left: auto;
    /* Alinhe o menu à direita da barra de navegação */
}

.form-control {
    width: auto;
}

.my-2.my-lg-0 {
    display: flex;
    align-items: center;
}

.my-2.my-lg-0 i {
    font-size: 1.5rem;
    margin-left: 10px;
}

.fa-inverse {
    color: $nav-btn-color;
}
</style>