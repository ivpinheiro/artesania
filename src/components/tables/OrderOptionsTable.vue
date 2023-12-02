<template>
    
    <div class="dashboard">
        <h1 class="title no-margin">Encomenda</h1> 
        <div class="tabs">
            <div class="tab">
                <span>Meio e Suporte</span>
            </div>
            <div class="tab">
                <span>Técnica</span>
            </div>
            <div class="tab">
                <span>Composição</span>
            </div>
            <div class="tab">
                <span>Estilo</span>
            </div>
            <div class="tab">
                <span>Textura</span>
            </div>
        </div>  
        <div class="options-group">
            <div class="checkbox-group">
                <div class="tab-mobile">
                    <span>Meio e Suporte</span>
                </div>
                <div>
                    <input type="checkbox" id="oleo" value="Óleo" checked>
                    <label for="oleo">Óleo</label>
                </div>
                <div>
                    <input type="checkbox" id="acrilico" value="Acrílico">
                    <label for="acrilico">Acrílico</label>
                </div>
                <div>
                    <input type="checkbox" id="aquarela" value="Aquarela">
                    <label for="aquarela">Aquarela</label>
                </div>
                <div>
                    <input type="checkbox" id="lapis" value="Lápis">
                    <label for="lapis">Lápis</label>
                </div>
            </div>
            <div class="checkbox-group">
                <div class="tab-mobile">
                    <span>Técnica</span>
                </div>
                <div>
                    <input type="checkbox" id="suave" value="Suave" checked>
                    <label for="suave">Suave</label>
                </div>
                <div>
                    <input type="checkbox" id="detalhado" value="Detalhado">
                    <label for="detalhado">Detalhado</label>
                </div>
                <div>
                    <input type="checkbox" id="expressivo" value="Expressivo" checked>
                    <label for="expressivo">Expressivo</label>
                </div>
                <div>
                    <input type="checkbox" id="espatulagem" value="Espatulagem">
                    <label for="espatulagem">Espatulagem</label>
                </div>
            </div>
            <div class="checkbox-group">
                <div class="tab-mobile">
                    <span>Composição</span>
                </div>
                <div>
                    <input type="checkbox" id="tercos" value="Terços" checked>
                    <label for="tercos">Terços</label>
                </div>
                <div>
                    <input type="checkbox" id="equilibrio" value="Equilíbrio">
                    <label for="equilibrio">Equilíbrio</label>
                </div>
                <div>
                    <input type="checkbox" id="padroes" value="Padrões">
                    <label for="padroes">Padrões</label>
                </div>
                <div>
                    <input type="checkbox" id="contraste" value="Contraste">
                    <label for="contraste">Contraste</label>
                </div>
            </div>
            <div class="checkbox-group">
                <div class="tab-mobile">
                    <span>Estilo</span>
                </div>
                <div>
                    <input type="checkbox" id="realista" value="Realista">
                    <label for="realista">Realista</label>
                </div>
                <div>
                    <input type="checkbox" id="impressionista" value="Impressionista">
                    <label for="impressionista">Impressionista</label>
                </div>
                <div>
                    <input type="checkbox" id="abstrato" value="Abstrato">
                    <label for="abstrato">Abstrato</label>
                </div>
                <div>
                    <input type="checkbox" id="cubista" value="Cubista" checked>
                    <label for="cubista">Cubista</label>
                </div>
            </div>
            <div class="checkbox-group">
                <div class="tab-mobile">
                    <span>Textura</span>
                </div>
                <div>
                    <input type="checkbox" id="uniforme" value="Uniforme">
                    <label for="uniforme">Uniforme</label>
                </div>
                <div>
                    <input type="checkbox" id="aspera" value="Áspera" checked>
                    <label for="aspera">Áspera</label>
                </div>
                <div>
                    <input type="checkbox" id="texturizada_aspera" value="Texturizada áspera">
                    <label for="texturizada_aspera">Texturizada áspera</label>
                </div>
                <div>
                    <input type="checkbox" id="texturizada_suave" value="Texturizada suave">
                    <label for="texturizada_suave">Texturizada suave</label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'OrderOptionsTable'
}

</script>

<style lang="css" scoped>

.dashboard {
    display: flex;
    flex-direction: column;
    margin: 0% 15%;
    @media (max-width: 780px) {
        margin: 0% 5%;
        overflow: hidden;
        display: flex;
        flex-direction: column;   
    }
    @media (max-width: 580px) {
        margin: 0% 5%;
    }
}

.title {
    color: #9D3207;
    font-family: Inter;
    font-size: 32px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    padding: 2rem 0;
    align-self: self-start;
    @media (max-width: 1060px) {
        font-size: 26px;
    }
}
/* .no-margin{
    margin:0px !important;
} */

.tabs{
    display: flex;
    justify-content: space-between;
}
.tab{
    width: 200px;
}

.tab span{
    color: #9D3207;
    text-align: center;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    @media (max-width: 1060px) {
        font-size: 14px;
    }
    /* @media (max-width: 780px) {
        font-size: 12px;
    } */
}

.options-group{
    background-color: #f0eeed;
    margin-top: 5px;
    margin-bottom: 8px;
    border-radius: 15px;
    padding: 30px;
    display: flex;
    justify-content: space-between;
    @media (max-width: 1060px) {
        flex-wrap: wrap;
    }
}

/* .tab-mobile{
    display: none;
} */

@media(max-width: 768px) {
    .title{
        padding-bottom: 0.5rem;
    }
    .tabs{
        display: none;
    } 

    .tab-mobile{
        width: 200px;
    }

    .tab-mobile span{
        color: #9D3207;
        text-align: center;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
        
    }
    
    .options-group{
        display: grid;
        grid-template-columns: 1fr;
    }
    .checkbox-group{
        display: flex;
        flex-direction: column;
        padding: 1rem 0;
        width: 100%;
    }
}

</style>