<template>
    <div class="buttons_space">
      <div class="buttons_section">
        <div class="buttonPrimary">ENTRAR</div>
        <div class="verticalLine"></div>
        <div class="buttonPrimary">CADASTRAR-SE</div>
        <div class="verticalLine"></div>
        <div class="buttonPrimary">ÁREA DO ARTISTA</div>
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
    height: 100%;
    display: flex;
    align-items: center;
    padding: 28px 110px;
    display: flex;
    justify-content: space-between;
  }
  
  .buttonPrimary {
    color: #fff;
    font-family: 'Inter';
    font-weight: 600;
    font-size: 26px;
    width: 280px;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    border: 2px solid transparent; /* Adiciona uma borda transparente */
    transition: all 0.3s; /* Transição suave para todas as propriedades */
  }
  
  .buttonPrimary:hover {
    color: #9D3207;
    background-color: #fff;
    border-color: #9D3207; /* Cor da borda no hover */
    border-radius: 60px;
  }
  </style>
  