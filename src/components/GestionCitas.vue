<!-- Componente Citas.vue -->
<template>
    <div>
      <h1>Gestión de Citas</h1>
      <form @submit.prevent="agendarCita">
        <div>
          <label for="nombre">Nombre:</label>
          <input type="text" id="nombre" v-model="nombre" required>
        </div>
        <div>
          <label for="correo">Correo Electrónico:</label>
          <input type="email" id="correo" v-model="correo" required>
        </div>
        <div>
          <label for="fecha">Fecha:</label>
          <input type="date" id="fecha" v-model="fecha" required>
        </div>
        <div>
          <label for="hora">Hora:</label>
          <input type="time" id="hora" v-model="hora" required>
        </div>
        <button type="submit">Agendar Cita</button>
      </form>
      <div v-if="citas.length > 0">
        <h2>Citas Agendadas:</h2>
        <ul>
          <li v-for="cita in citas" :key="cita.id">
            {{ cita.nombre }} - {{ cita.fecha }} a las {{ cita.hora }}
            <button @click="cancelarCita(cita.id)">Cancelar</button>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
  import { db } from '../firebaseConfig.js'; // Importa la instancia de Firestore
  
  export default {
    data() {
      return {
        nombre: '',
        correo: '',
        fecha: '',
        hora: '',
        citas: []
      };
    },
    async mounted() {
      await this.actualizarCitas();
    },
    methods: {
      async agendarCita() {
        const nuevaCita = {
          nombre: this.nombre,
          correo: this.correo,
          fecha: this.fecha,
          hora: this.hora
        };
  
        // Agrega la nueva cita a Firestore
        await addDoc(collection(db, 'citas'), nuevaCita);
  
        // Limpia el formulario después de agregar la cita
        this.nombre = '';
        this.correo = '';
        this.fecha = '';
        this.hora = '';
  
        // Actualiza la lista de citas
        await this.actualizarCitas();
      },
      async cancelarCita(citaId) {
        // Elimina la cita de Firestore
        await deleteDoc(doc(db, 'citas', citaId));
  
        // Actualiza la lista de citas
        await this.actualizarCitas();
      },
      async actualizarCitas() {
        // Obtiene todas las citas de Firestore
        const querySnapshot = await getDocs(collection(db, 'citas'));
  
        // Actualiza la lista de citas con los datos de Firestore
        this.citas = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
      }
    }
  }
  </script>
  
  <style>
  /* Estilos del componente (opcional) */
  /* ... Estilos del componente ... */
  </style>
  