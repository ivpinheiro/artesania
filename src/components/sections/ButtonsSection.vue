<template>
  <div class="buttons_space contrast">
    <div class="buttons_section contrast">
      <RouterLink class="link-class-none buttonPrimary" to="/login">
        <div class="">
          ENTRAR
        </div>
      </RouterLink>
      <div class="verticalLine"></div>
      <RouterLink class="link-class-none buttonPrimary" to="/sign">
        <div class="">
          CADASTRAR-SE
        </div>
      </RouterLink>
      <div class="verticalLine"></div>
      <RouterLink class="link-class-none buttonPrimary" to="/dashboard/order">
        <div class="">
          ÁREA DO ARTISTA
        </div>
      </RouterLink>
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

a:focus {
  color: #000;
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

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  font-weight: 800;
}

a,
.link-class-none {
  all: unset;
  text-decoration: unset;
  color: inherit;
  font-size: unset;
  font-family: unset;
  font-weight: unset;
  cursor: pointer;
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
  