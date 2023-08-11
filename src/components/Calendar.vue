<template>
    <div class="calendar">
      <!-- Aquí puedes implementar un calendario interactivo o una lista de citas -->
      <CitaItem
        v-for="cita in citas"
        :key="cita.id"
        :cita="cita"
      />
    </div>
  </template>
  
  <script>
  import CitaItem from "./CitaItem.vue"; // Importa el componente CitaItem
  
  export default {
    components: {
      CitaItem,
    },
    props: {
      citas: Array, // Un array de objetos con la información de las citas
    },
  };
  </script>