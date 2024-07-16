<template>
    <div class="newsletter" v-if="!sentNewsletter">
      <h2>¿Quieres estar al tanto de nuestras novedades?</h2>
      <p>Suscríbete para recibir <span class="primary-text">ofertas</span> y novedades <span class="primary-text">exclusivas</span> directamente en tu correo.</p>
      <form @submit.prevent="subscribeNewsletter">
        <input type="email" v-model="email" placeholder="Tu correo electrónico" required>
        <button class="primary-button" type="submit">Suscribir</button>
      </form>
    </div>
    <div class="important-note" v-else>
      <font-awesome-icon :icon="['fas', 'circle-check']" class="icon green" />
      <h2>✨ <span class="primary-text">Gracias!</span> Ahora estas al tanto de todo! ✨</h2>
      <p>Estate atento al correo, ofertas, noticias exclusivas y más, serás el primero en enterarte!</p>
    </div>
  </template>
  
  <script>
  import { db } from '../firebaseConfig';
  import { collection, addDoc } from 'firebase/firestore';
  
  export default {
    data() {
      return {
        email: '',
        sentNewsletter: false,
      };
    },
    methods: {
    async subscribeNewsletter() {
      const newsletterRef = collection(db, 'newsletter');

      try {
        await addDoc(newsletterRef, {
          email: this.email,
          subscribedAt: new Date(),
        });
        this.sentNewsletter = true;
      } catch (error) {
        console.error('Error al suscribirse al boletín:', error);
        alert('Hubo un error al intentar suscribirte. Por favor, inténtalo de nuevo más tarde.');
      }
    },
  },
  }
  </script>
  
  <style scoped>
  .newsletter {
    background: var(--color-background-soft);
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-left: 3px solid var(--color-primary);
    padding: 25px;
    margin: 25px 0;
    width: 100%;
    background-color: var(--color-background-mute);
  }
  
  .newsletter form {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
  
  .newsletter input[type="email"] {
    width: 300px;
    padding: 10px;
    font-size: 16px;
    border: 2px solid var(--color-border);
    border-radius: 8px;
  }
  
  .primary-button {
    background-color: var(--color-primary);
    color: var(--c-white);
    border: none;
    border-radius: 8px;
    padding: 12px 24px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.2s;
  }
  
  .primary-button:hover {
    background-color: var(--color-primary-hover);
  }
  
  .important-note {
    text-align: center;
    padding: 25px;
  }
  
  .icon {
    font-size: 3.5em;
  }
  
  .green {
    color: #aae68e;
  }
  </style>