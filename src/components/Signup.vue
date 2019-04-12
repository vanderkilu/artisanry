<template>
    <div class="auth">
        <p class="auth__text--main">Connect now</p>
        <form  @submit.prevent="signup" class="auth__form">
            <input type="text" class="input" placeholder="username" v-model="name">
            <input type="email" class="input" placeholder="email" v-model="email">
            <input type="text" class="input" placeholder="number" v-model="number">
            <input type="text" class="input" placeholder="password" v-model="password">
            <div class="auth__question">
                <p class="auth__question__text">Are you an artisan? </p>
                <input type="radio" id="yes" value="Yes" v-model="isArtisan">
                <label for="yes">Yes</label>
                <input type="radio" id="no" value="No" v-model="isArtisan">
                <label for="no">No</label>
            </div> 
            <div class="auth__artisan" v-show="isArtisan === 'Yes'">
                <select v-model="category" class="input">
                    <option disabled value="">Please select profession </option>
                    <option>barber</option>
                    <option>contractor</option>
                    <option>mechanic</option>
                    <option>fitness</option>
                </select>
                <input type="text" class="input" placeholder="company" v-model="company">
            </div>
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
           password: '',
           category: '',
           isArtisan: '',
           company: '',
           userPhoto: ''
        }
    },
    methods: {
        async signup() {
            const data = {
                name: this.name,
                email: this.email,
                phone: this.number,
                password: this.password,
                category: this.category,
                isArtisan: this.isArtisan,
                company: this.company,
                userPhoto: this.userPhoto
            }
            let response = await register(data)
            console.log(response)
            storeToken(response.data.token)
            this.$router.push({name: 'artisans'})          
        }
    },
    mounted() {
        EventBus.$emit('SET-HEADER', true)
        console.log(this.isArtisan)
    }
}
</script>

<style scoped>
   @import url('../assets/auth.css');
   .auth__question__text,label {
       font-size: 1.7rem;
       color: #9e9e9e;
   }
   select.input {
       color: #9e9e9e;
       margin-top: 2rem;
   }
</style>