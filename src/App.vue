<template>
  <div class="main">
    <app-header></app-header>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  components: {
    appHeader: Header
  }
}
</script>

<style>

@media (min-width: 320px) {
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    padding: 0;
    margin: 0;
    background-color: white;
  }
  *, *::before, *::after {
    font-family:  'Montserrat', sans-serif;
  }
  .slide-right-enter-active, .slide-right-leave-active {
        transition: all 0.35s ease-in-out;
    }
    .slide-left-enter-active, .slide-left-leave-active {
        transition: all 0.35s ease-in-out;
    }
    .slide-right-enter, .slide-right-leave-to {
        opacity: 0;
        transform: translateX(-12rem);
    }
    .slide-left-enter, .slide-left-leave-to {
        opacity: 0;
        transform: translateX(12rem);
    }
    .slide-right-leave-active, .slide-left-leave-active {
        position: absolute;
    }
    .fade-enter-active, .fade-leave-active {
      transition: opacity 0.4s;
    }
    .fade-enter, .fade-leave-to {
      opacity: 0;
      transform: translateY(6rem);
    }
    a:visited, a:link {
      text-decoration: none;
      color: #4a148c;
    }
}
</style>