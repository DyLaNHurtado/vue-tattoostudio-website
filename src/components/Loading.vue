<template>
  <div class="loading-message">
    <div class="spinner"></div>
    <p class="loading-text">{{ loadingMessage }}</p>

    <button class="transparent-button" v-if="retryAttempts === maxRetryAttempts" @click="retryLoading">Intentar de nuevo</button>
    <button class="transparent-button" @click="goToHome">Volver al inicio</button>
  </div>
</template>

<script setup>
import { ref, defineEmits, onMounted, onUnmounted } from 'vue';

const loadingMessage = ref('Cargando');
const retryAttempts = ref(0);
const maxRetryAttempts = 3;

const emit = defineEmits(['retry', 'home']);

const retryLoading = () => {
  if (retryAttempts.value < maxRetryAttempts) {
    loadingMessage.value = `Intentando cargar (${retryAttempts.value + 1}/${maxRetryAttempts})...`;
    retryAttempts.value++;
    // Emitir evento para recargar el contenido
    emit('retry');
  } else {
    loadingMessage.value = 'No se pudo cargar el contenido. Intente más tarde.';
  }
};

const goToHome = () => {
  // Emitir evento para redirigir al inicio
  emit('home');
};

let dotsInterval;

onMounted(() => {
  dotsInterval = setInterval(() => {
    loadingMessage.value += '.';
    if (loadingMessage.value.length > 11) {
      loadingMessage.value = 'Cargando';
    }
  }, 600);
});

onUnmounted(() => {
  clearInterval(dotsInterval);
});
</script>

<style scoped>
.loading-message {
  max-width: 800px;
  min-height: 800px;
  margin: 40px auto;
  padding: 20px;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  align-content: center;
  justify-content: center;
}

.spinner {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 4px solid var(--color-primary);
  border-top-color: var(--color-heading);
  animation: spin 1s linear infinite;
  margin: 0 auto 20px;
}

.loading-text {
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--color-heading);
  margin-bottom: 20px;
}


@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.transparent-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.transparent-button:hover {
  background-color: var(--color-primary);
  color: #fff;
}
</style>
