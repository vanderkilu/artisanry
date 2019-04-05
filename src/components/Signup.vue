<template>
    <div class="auth">
        <p class="auth__text--main">Connect now</p>
        <form  class="auth__form">
            <input type="text" class="input" placeholder="username">
            <input type="email" class="input" placeholder="email">
            <input type="text" class="input" placeholder="number">
            <button class="btn btn-fill">Sign up</button>
            <p class="auth__text--small">Already have an account?    
              <br><router-link :to="{name: 'login'}">sign in here</router-link></p>
        </form>
    </div>
</template>


<style scoped>
   @import url('../assets/auth.css');
</style>