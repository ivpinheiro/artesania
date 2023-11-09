<template>
    
    <div class="artistsNamesSection contrast">
        
        <div><h1 class="headline">Beatriz Milhazes </h1></div>
        <div><h1 class="headline">Lucas Simões </h1></div>
        <div><h1 class="headline">Flora Detoni </h1></div>
        <div><h1 class="headline">Ana Mendes </h1></div>
        
    </div>
</template>

<script>
export default {
    name: 'ArtistNames'
}
</script>

<style lang="scss" scoped>

.artistsNamesSection {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    background-color: #EAB766;
    padding: 31px 49px;
    display: flex;
    justify-content: space-between;
}
.artistsNamesSection .headline{
    color: #9D3207;
    font-family: 'Indie Flower';

}
.high-contrast {
  color: white;
  background: black;
}

.high-contrast-text {
  color: white !important;
}
</style>