<template>
    <div class="review-list">
      <ReviewItem v-for="review in reviews" :key="review.id" :review="review" />
    </div>
  </template>
  
  <script>
  import ReviewItem from './ReviewItem.vue';
  
  export default {
    components: {
      ReviewItem
    },
    props: {
      reviews: Array
    }
  };
  </script>
  
  <style scoped>
  /* Estilos para la lista de reseñas */
  .review-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
  }
  </style>
  