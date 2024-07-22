<template>
    <div class="not-found-view">
        <h1> Oops! Sitio no encontrado... </h1>
      <NotFound  class="not-found" label="En ocasiones... veo fantasmas..." buttonLabel="Volver al Inicio" @backFromNotFound="navigateHome" />
        <h3> # 404 Not Found # </h3>
    </div>
  </template>
  
  <script>
  import NotFound from '../components/NotFound.vue'; 
  import { defineComponent } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default defineComponent({
    components: {
      NotFound,
    },
    setup() {
      const router = useRouter();
  
      const navigateHome = () => {
        router.push({ name: 'home' }); 
      };
  
      return {
        navigateHome,
      };
    },
  });
  </script>
  
  <style scoped>
  .not-found-view {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .not-found{
    max-height: 30vh;
  }
  

  </style>
  