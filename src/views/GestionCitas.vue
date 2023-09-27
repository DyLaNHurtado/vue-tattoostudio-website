<!-- Componente Citas.vue
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
  
  <style scoped>
  /* Estilos del componente (opcional) */
  /* ... Estilos del componente ... */
  </style>
   -->

   <template>
    <div class="appointment-booking">
      <h2>Selecciona una cita</h2>
      <div class="grid">
        <div
          v-for="(slot, index) in availableSlots"
          :key="index"
          :class="['slot', { 'reserved': slot.reserved }]"
          @click="selectSlot(slot)"
        >
          {{ slot.time }}
          <div class="slot-details" v-if="slot.reserved">
            Reservado por: {{ slot.reservedBy }}
          </div>
        </div>
      </div>
      <div v-if="selectedSlot">
        <h3>Detalles de la cita</h3>
        <p>Fecha: {{ selectedSlot.date }}</p>
        <p>Hora: {{ selectedSlot.time }}</p>
        <p>Reservado por: {{ selectedSlot.reservedBy }}</p>
        <button class="reserve-button" @click="reserveSlot">Reservar</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        availableSlots: [
          { date: '2023-08-10', time: '10:00 AM', reserved: false, reservedBy: null },
          { date: '2023-08-10', time: '11:00 AM', reserved: true, reservedBy: 'Usuario 1' },
          // ... Más ranuras disponibles ...
        ],
        selectedSlot: null
      };
    },
    methods: {
      selectSlot(slot) {
        if (!slot.reserved) {
          this.selectedSlot = slot;
        }
      },
      reserveSlot() {
        if (this.selectedSlot) {
          this.selectedSlot.reserved = true;
          this.selectedSlot.reservedBy = 'Usuario Actual'; // Puedes obtener esta información desde el usuario autenticado
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos para la cuadrícula de citas */
  .appointment-booking {
    margin: 20px;
    text-align: center;
  }
  
  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
  }
  
  .slot {
    border: 1px solid #ccc;
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  
  .slot.reserved {
    background-color: var(--color-text-error);
    color: white;
  }
  
  .slot:hover {
    background-color: #f5f5f5;
  }
  
  .slot-details {
    margin-top: 10px;
    font-size: 12px;
  }
  
  .reserve-button {
    margin-top: 10px;
    background-color: var(--color-primary);
    color: white;
    border: none;
    border-radius: 8px;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  
  .reserve-button:hover {
    background-color: var(--color-primary-hover);
  }
  </style>