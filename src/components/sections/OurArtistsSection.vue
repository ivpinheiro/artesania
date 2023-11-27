<template>
    <div class="container">
        <div class="firstSection contrast">
            <div><h1 class="headline">NOSSOS ARTISTAS EM DESTAQUE</h1></div>
            <div class="line">
                <div id="luana" class="full-on-mobile">  <p class="luanaName">Luana Silva</p></div>
                <div id="apo" class="full-on-mobile">  <p class="apoName">Apo Whag-Od</p></div>
            </div>
            <div class="line">
                <div id="lucas" class="full-on-mobile"> <p class="lucasName">Lucas Santos</p></div>
                <div id="mira" class="full-on-mobile"> <p class="miraName">Mira Maroni</p></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OurArtists'
}
</script>

<style lang="scss" scoped>

.firstSection{
    padding: 60px 70px 60px 70px;
    width: 100%;
    height: 663px;
    align-items: center;
    background-color: #EAB766;
    border-radius: 40px;
    margin: 80px 0px;
    @media (max-width: 1160px){
        height: fit-content;
    }
}
.firstSection .headline{
    color: #9D3207;
    font-size: 54px;
    font-family: 'Inter';
    font-weight: 800;
    line-height: 1;
    text-align: center;
    @media (max-width: 760px) {
        font-size: 45px;
    }
}


.luanaName {
    position: relative;
    top: 5%; 
    left: 5%; 
    color: white; 
    font-size: 24px; 
}
.apoName {
    position: relative; 
    top: 62%; 
    right: 2%; 
    color: white; 
    font-size: 24px; 
    text-align: center; 
}
.lucasName {
    position: relative; 
    top: 70%; 
    left: 5%; 
    color: white; 
    font-size: 24px; 
}
.miraName {
    position: relative; 
    top: 60%; 
    right: 20%; 
    color: white; 
    font-size: 24px; 
    text-align: center; 
}

.line{
    width: 100%;
    height: 47%;
    display: flex;
    justify-content: space-between;
    position: relative;
    font-family: 'Inter';
    font-weight: 800;
    @media (max-width: 1160px){
        flex-direction: column;
    }
}
.full-on-mobile{
    @media (max-width: 1160px){
        width: 100% !important;
        height: 140px!important;
        margin: 10px;
    }
}
#luana{
    background-image: url('@/assets/img/artists/LuanaSilva.svg');
    background-size: cover; 
    background-position: center; 
    height: 93%;
    width: 65%;
    overflow: hidden;
    border-radius: 20px;
}
#apo{
    background-image: url('@/assets/img/artists/ApoWhang.svg');
    background-size: cover;
    background-position: center;
    height: 93%;
    width: 33%;
    border-radius: 20px;
    overflow: hidden;
}
#lucas{
    background-image: url('@/assets/img/artists/LucasSantos.svg');
    background-size: cover;
    background-position: center;
    height: 95%;
    width: 49%;
    overflow: hidden;
    border-radius: 20px;
}
#mira{
    background-image: url('@/assets/img/artists/MiraMaroni.svg');
    background-size: cover; 
    background-position: center;
    height: 95%;
    width: 49%;
    overflow: hidden;
    border-radius: 20px;
}
.high-contrast {
    color: white;
    background: black;
}
.high-contrast-text {
    color: white !important;
}
</style>