<template>
    <ul class="nav justify-content-center">
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#acabou-chegar">Ir para acabou de chegar [1]</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#mais-vendidos">Ir para mais vendidos [2]</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#nossos_artistas">Ir para nossos artistas [3]</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#footer">Ir para rodapé [4]</a>
        </li>        
        <li class="nav-item">
            <div class="nav-link-joint"><span class="nav-link" id="increase-font-button">A+</span> | <span class="nav-link" id="decrease-font-button">A-</span></div>
        </li> 
        
        <li class="nav-item">
            <font-awesome-icon class="fa-color" icon="fa-solid fa-circle-half-stroke" />
            <span class="high-contrast-b" id="toggle-high-contrast">Alto Contraste</span>
        </li>
    </ul>
</template>
  
<script>
export default {
    name: 'AcessibilityMenu'
};
</script>
<style lang="scss" scoped>
.nav{
    background-color: $acessibility-menu-color;
    min-height: 30px;
    max-height: min-content;
    justify-content: center;
    align-items: center;
}
.nav-link{
    color: $nav-link-color;    
    margin: 0;
    padding: 0 10px;
    color: white;
}
.nav-link-joint{
    color: $nav-link-color;    
    margin: 0;
    padding: 0 10px;
    color: white;
    display: flex;
}
.nav-link:hover{
    color: #fff;
    font-weight: 800;
}
.nav-link:visited{
    color: #fff;
    font-weight: 800;
}
.high-contrast_:hover{
    font-weight: 800;
}
.nav-item{
    cursor: pointer;
}
.fa-color {
    color: white;
    text-decoration: none;
}
.high-contrast-b{
    color: white;
    text-transform: capitalize;
    padding: 0 5px;
    font-size: 18px;
}
</style>