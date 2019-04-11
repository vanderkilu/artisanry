<template>
    <div class="auth">
        <p class="auth__text--main">Connect now</p>
        <form  @submit.prevent="signup" class="auth__form">
            <input type="text" class="input" placeholder="username" v-model="name">
            <input type="email" class="input" placeholder="email" v-model="email">
            <input type="text" class="input" placeholder="number" v-model="number">
            <input type="text" class="input" placeholder="password" v-model="password">
            <button class="btn btn-fill">Sign up</button>
            <p class="auth__text--small">Already have an account?    
              <br><router-link :to="{name: 'login'}">sign in here</router-link></p>
        </form>
    </div>
</template>

<script>
import { EventBus } from '../main'
import { register,storeToken } from '../services'
export default {
    data() {
        return {
           name: '',
           email: '',
           number: '',
           password: ''
        }
    },
    methods: {
        async signup() {
            const data = {
                name: this.name,
                email: this.email,
                phone: this.number,
                password: this.password
            }
            let response = await register(data)
            console.log(response)
            storeToken(response.data.token)
            this.$router.push({name: 'artisans'})          
        }
    },
    mounted() {
        EventBus.$emit('SET-HEADER', true)
    }
}
</script>

<style scoped>
   @import url('../assets/auth.css');
</style>