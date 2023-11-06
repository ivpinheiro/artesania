<template>
    <div class="buttons_space contrast">
      <div class="buttons_section contrast">       
        <div class="buttonPrimary"><RouterLink class="link-class-none" to="/login">ENTRAR</RouterLink></div>        
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
    background-color: #fff;
    color: #9D3207;
    font-family: 'Inter';
    font-weight: 600;
    font-size: 26px;
    width: 280px;
    min-width: fit-content;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    border-radius: 60px;
    transition: all 0.3s;
    font-weight: 900;
    padding: 10px;
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

.high-contrast:hover{
  display: none;
}
  </style>
  