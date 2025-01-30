<template>
  <div class="layout-container">
    <NavBar />
    <main class="main-content">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

const NavBar = defineAsyncComponent(() => import('../components/common/NavBar.vue'));
const Footer = defineAsyncComponent(() => import('../components/common/Footer.vue'));
</script>

<style scoped>
.layout-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex-grow: 1;
  max-width: 80rem;
  width: 100%;
  margin: 0 auto;
  text-align: center;
}



@media (max-width: 768px) {
.layout-container {
  padding-bottom: 4rem;
}
}
</style>
