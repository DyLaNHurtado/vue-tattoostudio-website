<script setup></script>
<template>
     <nav class="navbar">
      <router-link to="/" class="nav-link">Inicio</router-link>
      <router-link to="/gallery" class="nav-link">Galeria</router-link>
      <router-link to="/studio" class="nav-link">Studio</router-link>
      <router-link to="/appointments" class="nav-link">Agenda una Cita</router-link>
      <router-link to="/reviews" class="nav-link">Reseñas</router-link>
      <router-link to="/contact" class="nav-link">Contactanos</router-link>
    </nav>
</template>
<style scoped>
.navbar {
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.nav-link {
  color: white;
  text-decoration: none;
  margin: 0 15px;
}</style>