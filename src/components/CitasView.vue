<template>
    <div class="citas-view">
      <h2>Citas Disponibles</h2>
      <Calendar :citas="citasDisponibles" />
    </div>
  </template>
  
  <script>
  import Calendar from "./Calendar.vue"; // Importa el componente Calendar
  
  export default {
    components: {
      Calendar,
    },
    data() {
      return {
        citasDisponibles: [
          // Aquí puedes proporcionar las citas disponibles como objetos
          {
            id: 1,
            nombre: "Cita 1",
            fecha: "2023-08-10",
            hora: "14:00 - 15:00",
          },
          {
            id: 2,
            nombre: "Cita 2",
            fecha: "2023-08-10",
            hora: "15:30 - 16:30",
          },
          // ... Más citas
        ],
      };
    },
  };
  </script>