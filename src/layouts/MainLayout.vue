<template>
    <div class="flex flex-col min-h-screen">
      <NavBar />
      <main class="flex-grow max-w-5xl w-full mx-auto text-center">
        <router-view />
      </main>
      <Footer />
    </div>
  </template>
  
  <script setup>
import { defineAsyncComponent } from 'vue';
  
  const NavBar = defineAsyncComponent(() => import('../components/NavBar.vue'));
  const Footer = defineAsyncComponent(() => import('../components/Footer.vue'));
  </script>