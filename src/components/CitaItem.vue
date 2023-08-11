<template>
    <div class="appointment">
      <h3>{{ cita.nombre }}</h3>
      <p>Fecha: {{ cita.fecha }}</p>
      <p>Hora: {{ cita.hora }}</p>
      <button @click="reservarCita">Reservar</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      cita: Object, // Objeto que contiene la información de la cita
    },
    methods: {
      reservarCita() {
        // Lógica para reservar la cita
        // Aquí puedes emitir un evento para indicar que se ha reservado la cita
        // y manejarlo en el componente padre.
      },
    },
  };
  </script>