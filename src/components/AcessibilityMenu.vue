<template>
    <ul class="nav justify-content-center">
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Ir para acabou de chegar [1]</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Ir para mais vendidos [2]</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Ir para nossos artistas [3]</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Ir para rodapé [4]</a>
        </li>        
        <li class="nav-item">
            <a class="nav-link" href="#">A+ | A-</a>
        </li> 
        <li class="nav-item">
            <i class="fa-solid fa-circle-half-stroke fa-color"></i>
            <span class="self-contrast">Autocontraste</span>
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
    height: 30px;
    justify-content: center;
    align-items: center;
}
.nav-link{
    color: $nav-link-color;    
    margin: 0;
    padding: 0 10px;
    color: white;
}
.fa-color {
    color: white;
    text-decoration: none;
}
.self-contrast{
    color: white;
    text-transform: capitalize;
    padding: 0 5px;
    font-size: 18px;
}
</style>