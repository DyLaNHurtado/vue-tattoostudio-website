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

<script setup>
import { defineAsyncComponent } from 'vue';
import { SpeedInsights } from "@vercel/speed-insights/vue"
import { RouterView } from 'vue-router';

const NavBar = defineAsyncComponent(() => import('./components/NavBar.vue'));
const Footer = defineAsyncComponent(() => import('./components/Footer.vue'));

</script>

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
  padding-top: 0;
  background: linear-gradient(150deg, rgb(54, 21, 21) 0%, var(--color-background) 23%);

}

@media (max-width: 768px) {
  .view{
    padding: 0px;
  }
}

</style>
