<template>
  <div class="main">
    <app-header></app-header>
    <router-view></router-view>
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

<style scoped>

@media (min-width: 320px) {
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    padding: 0;
    margin: 0;
  }
  *, *::before, *::after {
    font-family:  'Montserrat', sans-serif;
  }
}
</style>