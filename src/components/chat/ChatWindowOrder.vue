<template>
    <div class="contrast">
        <div class="chat-container">
            <div class="message-list">
                <!-- Lista de mensagens -->
                <div v-for="(message, index) in messages" :key="index" class="message" :class="{ 'user': message.sender === 'user', 'artist': message.sender === 'artist' }">
                    <div class="message-content">{{ message.content }}</div>
                
                    <img v-if="message.sender === 'user'" src="@/assets/img/artists/ApoWhang.svg" class="profile-image user-profile" alt="User" />

                    <img v-if="message.sender === 'artist'" src="@/assets/img/artists/MiraMaroni.svg" class="profile-image artist-profile" alt="Artist" />
                </div>
            </div>


            <div class="message-input">
                <img src="@/assets/img/chat/chat_microfone.svg" alt="imagem de um microfone" />
                <img src="@/assets/img/chat/chat_image_upload.svg" alt="simbolo de upload de imagem" />

                <input v-model="newMessage" type="text" placeholder="Escreva sua mensagem aqui..." @keyup.enter="sendUserMessage" />
                <button @click="sendUserMessage">Enviar</button>
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
        }
      },
    }
  };
</script>
  
<style scoped>
  .chat-container {
    background-color: #f0eeed;
    border-radius: 5%;
    padding: 1rem;
    margin: 1% auto 10%;
    border: 0px;
    height: auto;
    color: #fff;
    font-weight: 600;

    @media (max-width: 780px) {
        margin: 0%;
        overflow: hidden;   
    }
    @media (max-width: 580px) {
        margin: 0%;
    }
  }

.message-list {
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

.user{
  justify-content: flex-end;
}

.user-message{
  justify-content: flex-end;
}

.artist{
  justify-content: flex-start;
}

.artist-message{
  justify-content: flex-start;
}

.user-profile {
  order: 2; /* Muda a ordem visualmente para aparecer depois da mensagem */
  margin-left: 10px;
}

.artist-profile {
  order: -1; 
  margin-right: 10px;
}


.message-input {
  display: flex;
  padding: 10px;
  background: #f0eeed; 
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
}
</style>