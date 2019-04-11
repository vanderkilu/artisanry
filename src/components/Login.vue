<template>
    <div class="auth">
        <p class="auth__text--main">Welcome back</p>
        <form  @submit.prevent="login" class="auth__form">
            <input type="email" class="input" placeholder="email">
            <input type="password" class="input" placeholder="password">
            <button class="btn btn-fill"> Sign in </button>
            <p class="auth__text--small">Not have an account yet?    
              <br><router-link :to="{name: 'signup'}">sign up here</router-link></p>
        </form>
    </div>
</template>


<script>
import { EventBus } from '../main'
import { signIn,storeToken } from '../services'
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async login() {
            let data = {
                email: this.email,
                password: this.password
            }
            let response = await signIn(data)
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