<template>
    
    <div class="bannerSection">
        <div class="firstSection">
            <div><h2 class="headline">ENCONTRE <span class="attention">ARTISTAS</span> QUE TE COMPLETEM NA</h2></div>
            <h1 class="attention-artesania">ARTESANIA</h1>
            <div><h6 class="subline" id="subline">Descubra um universo de expressão artística onde a arte contemporânea brasileira encontra seu lar. Apresentamos uma seleção meticulosa de obras, cada uma contando sua própria história.</h6></div>
            <button class="buttonPrimary">Ver Coleção</button>
            <div class="proves">
                <div>
                    <h1 class="boldTitle">200+</h1>
                    <h3 class="lightTitle" id="lightTitle1">Artistas Independentes</h3>
                </div>
                <div>
                    <h1 class="boldTitle">2,000+</h1>
                    <h3 class="lightTitle" id="lightTitle2">Produtos de Alta Qualidade</h3>
                </div>
                <div>
                    <h1 class="boldTitle">30,000+</h1>
                    <h3 class="lightTitle" id="lightTitle3">Clientes Atendidos</h3>
                </div>
            </div>
            

        </div>
        <div class="secondSection"></div>
    </div>
</template>

<script>
export default {
    name: 'BannerComponent'
}
</script>

<style lang="scss" scoped>
.attention-artesania {
    color: #9D3207;
    font-size: 64px;
    font-family: 'Inter';
    font-weight: 800;
    line-height: 1;
}
.bannerSection {
    width: 100%;
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
.firstSection::before {
    content: "";
    position: absolute;
    right: 47%;
    margin-top: 200px;
    width: 50px;
    height: 50px;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAA7CAYAAADB0CKOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAO0SURBVHgB7ZpNThsxFMf/zxPQgFhk21Wnu+46oRcIJwBOAIimUlfQExBOUFhVKtCEEwAnaFh1B+YG2XWbDQVC4lc7fBRByMfEftCKn4QIGaPML35+tp8HeME/X9M4gTAKwuSABMKIS0Jxul2IX0MQcUlyPcmmAEHEJRXjHStKIIioZCVFngnFiDELQUQlW4hT99uKphBEVFIps3D9Mr+V5ooQQnhMUvH2lYrmIISY5Pb7cSeV3Pxts+xCJc3nIYCYpDK0cu+tfEudLUIAEcmKXcq5rIqHH74CAUQkjTJrj1xKdqbHFhEYQmC20rioFP/o0aSuzERhSTcaCETwnrSClT5NEqjTNYS8BwSkMh27m0/6tTNQqyHnzWDh+i0dSyOljof4l2BhG6QnXTa1gnsYjsSo318QgAiecRO8UZc/kWlzTOn8qwgHv9qH8IhXSSfI0ZnLpG+REbZLP9+i3iRvBJlH32H4FvUi6cbgdYhm7sH7+BQdObu61K9U5ObCBAEghr5gmv+kz+vISGbJzg5Cna0ZYBXhqdvZdH356LKKDGSSDN17j8PVplHrw/bqUJJOLqJorduOQpbhZPtKurBsqdPFiNXs08vdh6tscPBBN/d7teoq6ZZkpFxV7TmKdaVuhWv257BtoD/qS333YkfSnU+MRSa1K+U5+8YsiETKEsFgPjFEVai2zrWmdNee7Mx7QJHJFP8JaUbdRtwBG9rPIdb3F/kDJZ6dNF5k4gV6TqHL3GCiXSdW0ue1Xk2Hyq6uh9tkykS0gKfCyhlSmzkTbwy6Lcs0T3bCmWxJg2TnSQY2IzNRHnbPOdKybms6Litw0NJFBzvmDNNSv7B8jJHXrqF7lZl3I55cHaVi4KX8cVVXNXs2EXg9yDHg9dJRs4wR8Vrj2S6MV30lJTuFfS4dXWzAA94LWT5EfQo6glTrvhfGj7OGrq8QvUuQah1xc8ZlRAyJmyJ8C3buB4G4qruSLWoNuCS0X8ry8cUbBCBYBd3tBIyJ1gdt32SaQSCCHhOU9NmGrdHU+rVz43CUGk4/gh/4tJl696YN0xDj8C7BJd1SzK1aHm3Q70vwgMghrK0wlLtecMlGn1cRGBHJJTveuo5NgV50iD0Y8WBsCvWiQ0zyapvEf3cS5ApPMog+rGTPN24TkDFmF0LIStp6zPXLRkm3ahBCVDKHc+1C1h7veT1k7Yeo5JJGg5i0LR/WIIj4Q72GcALT1hBEXNJup+o5TP3fkkRcD/n0VTfEJaP2ZA0v+OcPoq2AVpkRYbYAAAAASUVORK5CYII=);
    background-size: cover;
    background-repeat: no-repeat;
}
.secondSection{
    background-image: url('./../assets/img/banner/GirassoisDeVanGogh.png');
    background-size: cover; /* Ajusta a imagem para cobrir toda a div */
    background-position: center; /* Centraliza a imagem na div */
    height: 100%;
    width: 45%;
}

.subline{
    max-width: 545px;
    margin-top: 30px;
}
</style>