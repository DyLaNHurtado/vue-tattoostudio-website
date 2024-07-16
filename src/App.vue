<script setup>
import { SpeedInsights } from "@vercel/speed-insights/vue"
import { RouterView } from 'vue-router';
import  NavBar  from './components/NavBar.vue';
import  Footer  from './components/Footer.vue';
</script>

<template>
  <div class="app-container">
    <NavBar />
    <div class="view">
      <RouterView />
      <SpeedInsights/>
    </div>

    <Footer></Footer>
  </div>
</template>

<style scoped>
.app-container{
  box-sizing: border-box;
  min-width: 100%;
  width: 100%;
  height: 100%;
  min-height: 100%;
}
.view{
  box-sizing: border-box;
  min-width: 100%;
  min-height: 100%;
  margin-top: 5em;
  padding: 40px;
  padding-top: 0;
}

@media (max-width: 768px) {
  .view{
    padding: 0px;
  }
}

</style>
