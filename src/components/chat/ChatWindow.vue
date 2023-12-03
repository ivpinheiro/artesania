<template>
  <div class="contrast">
    <div class="chat-container">
      <div class="message-list">
        <!-- Lista de mensagens -->
        <div v-for="(message, index) in messages" :key="index" class="message"
          :class="{ 'user': message.sender === 'user', 'artist': message.sender === 'artist' }">
          <div class="message-content">{{ message.content }}</div>

          <img v-if="message.sender === 'user'" src="@/assets/img/artists/artist-id-1.svg"
            class="profile-image user-profile" alt="User" />

          <img v-if="message.sender === 'artist'" src="@/assets/img/artists/artist-id-2.svg"
            class="profile-image artist-profile" alt="Artist" />
        </div>
      </div>
      <div class="message-list-manual">
        <div class="client-message">
          <div class="indicator-container">
              <div class="chat-bubble">Olá, como vai? Eu gostaria que minha pintura fosse abstrata com elementos em
                  preto e branco</div>
              <div class="indicator"></div>
          </div>
          <div class="indicator-container">
              <div class="chat-bubble">Além disso, gostaria que a moldura fosse preta</div>
              <div class="indicator"></div>
          </div>
          <div class="audio-player">
              <button class="play-button">►</button>
              <span class="time">0:01</span>
              <div class="progress-bar"></div>
              <span class="time">12:52</span>
              <button class="mic-icon">
                  <img src="@/assets/img/artist-dashboard/microfone.svg" alt="Microfone">
              </button>
          </div>
        </div> 
        <div class="artist-message-manual">
          <div class="indicator-container">
            <div class="indicator"></div>
            <div class="chat-bubble">Olá, sua encomenda foi aceita! O preço estipulado para sua arte é de R$15000,00.</div>
          </div>
        </div>
        <div class="conversation-area">
          <div class="conversationButton-area">
                <button class="sendImg">
                    <img src="@/assets/img/chat/chat_image_upload.svg" alt="Enviar Imagem" class="buttonSend">
                </button>
                <button class="mic-conversation">
                    <img src="@/assets/img/chat/chat_microfone.svg" alt="Enviar Audio" class="buttonSend">
                </button>
                <input type="text" name="txtArtistIput" id="txtArtistInput" placeholder="Escreva sua mensagem aqui...">
                <buttom class="buttonPrimary">Enviar</buttom>
            </div>
            
        </div>
        <div class="message-input">
          <img src="@/assets/img/chat/chat_microfone.svg" alt="imagem de um microfone" />
          <img src="@/assets/img/chat/chat_image_upload.svg" alt="simbolo de upload de imagem" />

          <input v-model="newMessage" type="text" placeholder="Escreva sua mensagem aqui..."
            @keyup.enter="sendUserMessage" />
          <button @click="sendUserMessage">Enviar</button>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      newMessage: '',
      messages: []
    };
  },
  methods: {
    sendUserMessage() {
      if (this.newMessage.trim()) {
        this.messages.push({
          content: this.newMessage,
          sender: 'user'
        });
        this.newMessage = '';
        this.autoReply();
      }
    },
    autoReply() {
      setTimeout(() => {
        this.messages.push({
          content: 'Olá, sua encomenda foi aceita! O preço estipulado para sua arte é de R$1500,00.',
          sender: 'artist'
        });
      }, 2000);
    }
  }
};
</script>
  
<style scoped>

.chat-container {
  background-color: #f0f0f0;
  border-radius: 15px;
  padding: 2rem;
  border: 0px;
  height: auto;
  color: #fff;
  font-weight: 600;
  
  @media (max-width:768px) {
    padding: 0 !important;
  }

}

.message-list-manual{
    background-color: #f0f0f0;
    color: #000;
    border-radius: 15px;
    display: flex;
    flex-direction: column;


    @media (max-width: 768px) {
      padding: 1rem 0;
    }
}

.client-message{
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1rem 1rem 1rem 18rem;

  @media (max-width:768px) {
    margin: 0 1rem 0 25%;
    padding: 0;
  }
}

.artist-message-manual{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1rem 18rem 1rem 1rem;

  @media (max-width:768px) {
    margin: 0 25% 0 1rem;

    padding: 0;
  }
}

.indicator-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 5px;
}

.indicator {
    height: 20px;
    width: 20px;
    background-color: #b24a00;
    border-radius: 50%;
    margin: 0 5px;
    min-width: 20px;
}

.chat-bubble {
    background-color: white;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    max-width: 100%;
    word-wrap: break-word;
}

.audio-player {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-size: cover;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    padding: 5px;
    background-color: #fff;

    @media (max-width: 768px) {
        justify-content: flex-end;

    }
}

.play-button {
    background-color: #ffffff;
    color: #7D7E7E;
    font-size: xx-large;
    border: none;
    border-radius: 50%;
    padding: 10px;
    margin-right: 10px;
    cursor: pointer;
}

.time {
    font-size: 12px;
    color: #333;
    margin: 0 10px;
}

.progress-bar {
    flex-grow: 1;
    height: 10px;
    background-color: #e0e0e0;
    border-radius: 5px;
    position: relative;
}

.mic-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #9D3207;
    /* ou a cor de sua escolha */
    border: none;
    border-radius: 100%;
    cursor: pointer;
    width: 40px;
    height: 40px;
}

.conversation-area {
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 1rem 0 0 0;
}

#txtArtistInput {
    background-color: rgba(51, 51, 51, 35%);
    border-style: none;
    border-radius: 1rem;
    width: 100%;
    padding: 0rem 1rem;
    margin: 0rem 1rem;
}

.conversationButton-area {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 30%;
    color: rgba(51, 51, 51, 80%);
}

.sendImg {
    border-style: none;
}

.mic-conversation {
    border-style: none;
    background-color: none;
}

.message-list {
  display: none;
  height: 400px;
  overflow-y: auto;
  background: #ececec;
}


.message {
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 5px;
}

.message-content {
  max-width: 70%;
  padding: 10px;
  border-radius: 20px;
  border: 1px #ccc;
  color: black;
  word-wrap: break-word;
  border-radius: 20px;
  background: white;
}

.profile-image {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
}

.user {
  justify-content: flex-end;
}

.user-message {
  justify-content: flex-end;
}

.artist {
  justify-content: flex-start;
}

.artist-message {
  justify-content: flex-start;
}

.user-profile {
  order: 2;
  /* Muda a ordem visualmente para aparecer depois da mensagem */
  margin-left: 10px;
}

.artist-profile {
  order: -1;
  margin-right: 10px;
}


.message-input {
    display: none;
    /* display: flex;
    flex-direction: row;
    padding: 1rem 0 0 0;

    @media (max-width: 768px) {
      display: none
    } */
}

.message-input input {
  flex-grow: 1;
  margin-right: 5px;
  border-radius: 20px;
  border: 1px solid #ccc;
  padding: 10px;
}

.message-input button {
  padding: 10px 20px;
  border-radius: 20px;
  background-color: #9D3207;
  color: white;
  border: none;
}

.icons {
  display: flex;
}

.icon {
  margin-right: 10px;
}

.high-contrast {
  color: white;
  background: black;
}

.high-contrast-text {
  color: white;
}</style>