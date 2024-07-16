<script setup>
import Socials from './Socials.vue';

const actualYear = new Date().getFullYear();
</script>
<template>
  <footer class="footer">
    <div class="footer-content">
      <p>&copy; {{ actualYear }} <span class="primary-text">Delaitto Tattoo</span>. Todos los derechos reservados.</p>
      <Socials size="2xl"/>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--color-background-mute);
  padding: 20px 0;
  text-align: center;
  position: relative;
  bottom: 0;
  width: 100%;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer p {
  margin: 0;
  font-size: 14px;
  color: var(--color-text-mute);
}

</style>