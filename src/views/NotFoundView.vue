<template>
    <div class="not-found-view">

      <NotFound  class="not-found" @backFromNotFound="navigateHome" />
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default defineComponent({
    components: {
      NotFound: () => import('../components/NotFound.vue'),
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