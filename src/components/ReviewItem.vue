<template>
    <div class="review-item">
      <div class="review-header">
        <img :src="review.avatarUrl" alt="Avatar" class="avatar">
        <div class="user-info">
          <h4 class="user-name">{{ review.userName }}</h4>
          <p class="user-location">{{ review.userLocation }}</p>
          <div class="rating">
            <span v-for="star in 5" :key="star" class="star" :class="{ 'active-star': star <= review.rating }">{{ '★' }}</span>
          </div>
        </div>
      </div>
      <p class="review-content">{{ review.content }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      review: Object
    }
  };
  </script>
  
  <style scoped>
  /* Estilos para el elemento de reseña */
  .review-item {
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  
  .review-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }
  
  .review-header {
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
    color: #999;
    margin: 0;
  }
  
  .rating {
    display: flex;
    gap: 2px;
    margin-top: 6px;
  }
  
  .star {
    font-size: 18px;
    cursor: pointer;
    transition: transform 0.2s, color 0.2s;
    color: #ccc; /* Estrella apagada en gris */
  }
  
  .active-star {
    color: #ffc107; /* Estrella activa en amarillo */
  }
  
  .review-content {
    font-size: 16px;
    margin: 0;
  }
  </style>
  