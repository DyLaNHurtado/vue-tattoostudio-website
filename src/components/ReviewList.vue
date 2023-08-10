<template>
    <div class="review-list">
      <ReviewItem v-for="review in reviews" :key="review.id" :reviews="reviews" :review="review" :initialLiked="false" :initialUsefull="false" />
      <NotFound v-if="reviews.length < 1" :label="'No se han encontrado resultados'" :buttonLabel="'Limpiar filtros'" @backFromNotFound="$emit('backFromNotFoundList')"/>
    </div>
  </template>
  
  <script>
  import ReviewItem from './ReviewItem.vue';
  import NotFound from './NotFound.vue';
  
  export default {
    components: {
      ReviewItem, NotFound
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
  