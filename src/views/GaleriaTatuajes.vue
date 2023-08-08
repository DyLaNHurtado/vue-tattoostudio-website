<template>
    <div>
      <h1>Galería de Tatuajes</h1>
      <div v-for="tattoo in tattoos" :key="tattoo.id" class="tattoo-item">
        <img :src="tattoo.imageUrl" alt="Tatuaje" class="tattoo-image">
      </div>
    </div>
  </template>
  
  <script>
  import { collection, query, onSnapshot } from 'firebase/firestore';
  import { db } from '../firebaseConfig.js'; // Importa la instancia de Firestore
  
  export default {
    data() {
      return {
        tattoos: []
      };
    },
    mounted() {
      // Cargar datos de Firestore al montar el componente
      const q = query(collection(db, 'tattoos'));
  
      onSnapshot(q, (snapshot) => {
        this.tattoos = snapshot.docs.map((doc) => ({
          id: doc.id,
          imageUrl: doc.data().imageUrl,
          // Otros datos relacionados con el tatuaje
        }));
      });
    }
  }
  </script>
  
  <style scoped>
  /* Estilos de la galería (opcional) */
  .tattoo-item {
    margin: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: inline-block;
  }
  
  .tattoo-image {
    max-width: 300px;
    max-height: 300px;
  }
  </style>
  