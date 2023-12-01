<template>
    <div class="dashboard">
        <div class="tabs">
            <div class="tab">
                <span>Meio e Suporte</span>
                <div class="checkbox-group">
                    <div>
                        <input type="checkbox" id="oleo" value="Óleo" checked>
                        <label for="oleo">Óleo</label>
                    </div>
                </div>
            </div>
            <div class="tab">
                <span>Técnica</span>
                <div class="checkbox-group">
                <div>
                    <input type="checkbox" id="suave" value="Suave" checked>
                    <label for="suave">Suave</label>
                </div>
                <div>
                    <input type="checkbox" id="expressivo" value="Expressivo" checked>
                    <label for="expressivo">Expressivo</label>
                </div>
            </div>
            </div>
            <div class="tab">
                <span>Composição</span>
                <div class="checkbox-group">
                <div>
                    <input type="checkbox" id="tercos" value="Terços" checked>
                    <label for="tercos">Terços</label>
                </div>
            </div>
            </div>
            <div class="tab">
                <span>Estilo</span>
                <div class="checkbox-group">
                <div>
                    <input type="checkbox" id="cubista" value="Cubista" checked>
                    <label for="cubista">Cubista</label>
                </div>
            </div>
            </div>
            <div class="tab">
                <span>Textura</span>
                <div class="checkbox-group">
                <div>
                    <input type="checkbox" id="aspera" value="Áspera" checked>
                    <label for="aspera">Áspera</label>
                </div>
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
    }
    @media (max-width: 580px) {
        margin: 0% 2%;
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
    float: left;
    @media (max-width: 1060px) {
        font-size: 26px;
    }
}
/* .no-margin{
    margin:0px !important;
} */

.tabs {
    display: flex;
    flex-direction: column; 
    align-items: center; 
    gap: 10px; 
}

.tab {
    width: auto; 
    text-align: center; 
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
    @media (max-width: 780px) {
        font-size: 12px;
    }
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

</style>