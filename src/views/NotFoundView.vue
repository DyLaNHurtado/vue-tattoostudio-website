<template>
    <div class="not-found-view">
        <h1> Oops! Sitio no encontrado... </h1>
      <NotFound  class="not-found" @backFromNotFound="navigateHome" />
        <h3> 404 Not Found </h3>
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
    height: 100vh;
    width: 100%;
    background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
    color: #e2e8f0;
    padding: 2rem;
    text-align: center;
  }
  .not-found{
    max-height: 30vh;
  }
  

  </style>