<script setup>
import { RouterView } from 'vue-router';
import  NavBar  from './components/NavBar.vue';
import  Footer  from './components/Footer.vue';
</script>

<template>
  <div>
    <NavBar />
    <div class="view">
      <RouterView />
    </div>

    <Footer></Footer>
  </div>
</template>

<style scoped>
.view{
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  min-height: 90vh;
  margin-top: 5em;
  padding: 40px;
}

</style>
