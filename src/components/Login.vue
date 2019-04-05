<template>
    <div class="auth">
        <p class="auth__text--main">Welcome back</p>
        <form  class="auth__form">
            <input type="text" class="input" placeholder="username">
            <input type="text" class="input" placeholder="number">
            <button class="btn btn-fill">Sign in</button>
            <p class="auth__text--small">Not have an account yet?    
              <br><router-link :to="{name: 'signup'}">sign up here</router-link></p>
        </form>
    </div>
</template>


<style scoped>
   @import url('../assets/auth.css');
</style>