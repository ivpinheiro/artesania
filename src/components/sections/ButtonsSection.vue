<template>
  <div class="buttons_space contrast">
    <div class="buttons_section contrast">
      <div class="buttonPrimary">
        <RouterLink class="link-class-none" to="/login">ENTRAR</RouterLink>
      </div>
      <div class="verticalLine"></div>
      <div class="buttonPrimary">
        <RouterLink class="link-class-none" to="/sign">CADASTRAR-SE</RouterLink>
      </div>
      <div class="verticalLine"></div>
      <div class="buttonPrimary">
        <RouterLink class="link-class-none" to="/dashboard">ÁREA DO ARTISTA</RouterLink>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'CallToActionButtons',
};
</script>
  
<style lang="scss" scoped>
.verticalLine {
  background-color: #fff;
  width: 2px;
  height: 100%;
}

.buttons_space {
  width: 100%;
  height: 110px;
  background-color: #9D3207;
}

.buttons_section {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 100%;
}

.buttonPrimary {
  background-color: #fff;
  color: #9D3207;
  font-family: 'Inter';
  font-weight: 600;
  font-size: 26px;
  width: 350px;
  text-align: center;
  cursor: pointer;
  border-radius: 60px;
  transition: all 0.3s;
  font-weight: 900;
  padding: 10px;
}

/* Estilos para telas pequenas (dispositivos móveis) */
@media screen and (max-width: 795px) {
  .buttons_space {
    height: auto;
  }

  .buttons_section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .verticalLine {
    display: none;
  }

  .buttonPrimary {
    margin: 5px 0px;
    width: 80%;
  }
}

.buttonPrimary:hover {
  color: #fff;
  background-color: #9D3207;
}

.high-contrast {
  color: white;
  background: black;
}

.high-contrast-text {
  color: black;
}

.high-contrast:hover {
  display: none;
}
</style>
  