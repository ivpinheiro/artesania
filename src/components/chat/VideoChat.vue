<template>
    <div class="container contrast">
        <div class="video-icon">
            <p class="video-title">Solicitar Chamada de video</p>
            <img src="@/assets/img/chat/video_icon.svg" class="video-icon" alt="Botao para video chamada" />
        </div>
    </div>
</template>

<script>
export default {
  name: 'VideoChat'
}
</script>

<style>

.container{
  display: flex;
  align-items: center;
  justify-content: center;
}

.video-icon{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    align-items: center;
}

.video-title{
    margin: auto;
    font-size: 1.2rem;
    font-weight: bold;
    color: #9D3207
}

.high-contrast {
  color: white;
  background: black;
}

.high-contrast-text {
  color: white;
}

</style>