<template>
    <div class="container">
        <div class="firstSection">
            <div><h1 class="headline">NOSSOS ARTISTAS EM DESTAQUE</h1></div>
            <div class="line">
                <div id="luana">  <p class="luanaName">Luana Silva</p></div>
                <div id="apo">  <p class="apoName">Apo Whag-Od</p></div>
            </div>
            <div class="line">
                <div id="lucas"> <p class="lucasName">Lucas Santos</p></div>
                <div id="mira"> <p class="miraName">Mira Maroni</p></div>
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
    max-height: 663px;
   
    align-items: center;
    background-color: #EAB766;
    border-radius: 40px;
    margin-top: 80px;
    margin-bottom: 80px;
    
}
.firstSection .headline{
    color: #9D3207;
    font-size: 54px;
    font-family: 'Inter';
    font-weight: 800;
    line-height: 1;
    text-align: center;
}


.luanaName {
    position: absolute;
    top: 10%; 
    left: 15%; 
    transform: translate(-50%, -50%);
    color: white; 
    font-size: 24px; 
    text-align: center; 
}
.apoName {
    position: absolute; 
    top: 62%; 
    right: 2%; 
    transform: translate(-50%, -50%); 
    color: white; 
    font-size: 24px; 
    text-align: center; 
}
.lucasName {
    position: absolute; 
    top: 70%; 
    right: 45%; 
    transform: translate(-50%, -50%);
    color: white; 
    font-size: 24px; 
    text-align: center; 
}
.miraName {
    position: absolute; 
    top: 60%; 
    right: 20%; 
    transform: translate(-50%, -50%); 
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
}
#luana{
    background-image: url('./../assets/img/artists/LuanaSilva.svg');
    background-size: cover; 
    background-position: center; 
    height: 93%;
    width: 65%;
    border-radius: 20px;
}
#apo{
    background-image: url('./../assets/img/artists/ApoWhang.svg');
    background-size: cover;
    background-position: center;
    height: 93%;
    width: 33%;
    border-radius: 20px;
}
#lucas{
    background-image: url('./../assets/img/artists/LucasSantos.svg');
    background-size: cover;
    background-position: center;
    height: 95%;
    width: 49%;
    border-radius: 20px;
}
#mira{
    background-image: url('./../assets/img/artists/MiraMaroni.svg');
    background-size: cover; 
    background-position: center;
    height: 95%;
    width: 49%;
    border-radius: 20px;
}
</style>