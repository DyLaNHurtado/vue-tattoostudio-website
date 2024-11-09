<script setup>
import Socials from './Socials.vue';

const actualYear = new Date().getFullYear();
</script>
<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="logo">
        <img src="/delaitto.png" alt="">
      </div>
      <p>&copy; {{ actualYear }} Delaitto Tattoo. Todos los derechos reservados.</p>

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
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

.footer p {
  margin: 0;
  font-size: 14px;
  color: var(--color-text-mute);
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  height: 65px;
  width: auto;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

</style>