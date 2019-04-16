<template>
    <div class="chatroom">
        <div class="chat__main">
              <transition-group name="message">
                    <app-chat v-for="(chat,i) in chats" :key="i" :chat="chat"></app-chat>
            </transition-group>
        </div>
        <form  @submit.prevent="sendMessage" class="chat__form">
            <input type="text" class="input" placeholder="message" v-model="message">
            <button class="btn btn-fill"> enter message </button>
        </form>
    </div>
</template>



<script>
import io from 'socket.io-client'
import Chat from './Chat.vue'
import { getToken } from '../services'
export default {
    data() {
        return {
            message: '',
            socket: io('http://192.168.43.156:3000'),
            chats: [],
            isError: false,
        }
    },
    components: {
        appChat: Chat
    },
    beforeMount() {
        this.socket.on('SENT_MESSAGE', (message)=> {
            this.chats.push(message)
        })
    },
    methods: {
        sendMessage() {
            if (this.message === '') {
                this.isError = true
                return
            }
            this.socket.emit('SEND_MESSAGE', {
                username: getToken(),
                message: this.message,
            })
            this.message = ''
        },
    }  
}
</script>
<style scoped>
@media (min-width: 320px) {
    .chatroom {
        display: flex;
        flex-direction: column;
        padding: 2rem;
    }
    .chat__main {
        height: 70vh;
    }
    .chat__form {
       display: flex;
       justify-content: center;
       align-items: center;
       flex-direction: column;
    }
    .btn {
        padding: 1.2rem 1.5rem;
        background-color: #ad1457;
        color: white;
        border: none;
        border-radius: 3px;
        box-shadow: 0 0.6rem 1.6rem #f8bbd0;
        margin: 4rem 0;
    }
    .btn-fill {
        width: 100%;
        font-size: 1.5rem;
    }
    .input {
        background-color: #eeeeee;
        width: 80%; 
    }
    .message-enter-active, .message-leave-active {
        transition: all 1s;
    }
    .message-enter, .message-leave-to {
        opacity: 0;
        transform: translateY(4rem);
    }
}
</style>