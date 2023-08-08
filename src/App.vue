<script setup>
import { RouterView } from 'vue-router';
import  NavBar  from './components/NavBar.vue';
import  Footer  from './components/Footer.vue';
</script>

<template>
  <div>
    <NavBar />
    <RouterView />

    <Footer></Footer>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
