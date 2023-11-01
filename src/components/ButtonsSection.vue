<template>
    <div class="buttons_space">
        <div class="buttons_section">
            <button class="buttonPrimary">ENTRAR</button>
            <button class="buttonPrimary">CADASTRAR-SE</button>
            <button class="buttonPrimary">ÁREA DO ARTISTA</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CallToActionButtons'
}
</script>

<style lang="scss" scoped>

.buttons_space{
    width: 100%;
    height: 110px;
    background-color: #FFF;
}
.buttons_section {
    width: 60%;
    margin-left: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    
    padding: 31px 49px;
    display: flex;
    justify-content: space-between;
}
.buttons_section .buttonPrimary{
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

.buttonPrimary{
    border: 0.5px solid;
    border-radius: 20px;
}
.buttonPrimary:hover {
    background-color: transparent;
    border:2px solid #9D3207;
    color: #9D3207;
  }
</style>