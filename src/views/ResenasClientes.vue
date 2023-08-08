<template>
    <div class="resenas">
      <h3 class="section-title">Reseñas de Clientes</h3>
      <div class="resena-list">
        <div v-for="reseña in reseñas" :key="reseña.id" class="resena-item">
          <div class="resena-header">
            <img :src="reseña.avatarUrl" alt="Avatar" class="avatar">
            <div class="user-info">
              <h4 class="user-name">{{ reseña.userName }}</h4>
              <p class="user-location">{{ reseña.userLocation }}</p>
            </div>
          </div>
          <p class="resena-content">{{ reseña.content }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Resenas',
    data() {
      return {
        reseñas: [
          {
            id: 1,
            avatarUrl: 'ruta-del-avatar-1.jpg',
            userName: 'Cliente 1',
            userLocation: 'Ciudad 1',
            content: '¡Excelente estudio de tatuajes! Muy profesionales y creativos.'
          },
          {
            id: 2,
            avatarUrl: 'ruta-del-avatar-2.jpg',
            userName: 'Cliente 2',
            userLocation: 'Ciudad 2',
            content: 'Me encantó mi nuevo tatuaje. El artista capturó mi idea perfectamente.'
          },
          // ... Más reseñas
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* Estilos para las reseñas */
  .resenas {
    margin-top: 40px;
  }
  
  .section-title {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .reseña-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .reseña-item {
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 8px;
    background-color: #f8f8f8;
  }
  
  .reseña-header {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }
  
  .user-info {
    display: flex;
    flex-direction: column;
  }
  
  .user-name {
    font-size: 18px;
    margin: 0;
  }
  
  .user-location {
    font-size: 14px;
    color: #666;
    margin: 0;
  }
  
  .reseña-content {
    font-size: 16px;
    margin: 0;
  }
  </style>