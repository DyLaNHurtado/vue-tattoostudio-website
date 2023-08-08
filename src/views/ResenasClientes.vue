<template>
  <div class="reviews">
    <h1>Reseñas de Clientes</h1>
    <ReviewList :reviews="reviews" />
    <button class="add-review-button" @click="showModal = true">Agregar Reseña</button>
    <ReviewFormDialog v-if="showModal" @close="showModal = false" @addReview="agregarResena" />
  </div>
</template>

<script>
import ReviewList from '../components/ReviewList.vue';
import ReviewFormDialog from '../components/ReviewFormDialog.vue';

export default {
  components: {
    ReviewList,
    ReviewFormDialog
  },
  data() {
    return {
      reviews: [
      {
          id: 1,
          avatarUrl: 'ruta-del-avatar-1.jpg',
          userName: 'Cliente 1',
          userLocation: 'Ciudad 1',
          rating: 5,
          content: '¡Excelente estudio de tatuajes! Muy profesionales y creativos.'
        },
        {
          id: 2,
          avatarUrl: 'ruta-del-avatar-2.jpg',
          userName: 'Cliente 2',
          userLocation: 'Ciudad 2',
          rating: 4,
          content: 'Me encantó mi nuevo tatuaje. El artista capturó mi idea perfectamente.'
        },
      ],
      showModal: false
    };
  },
  methods: {
    agregarResena(review) {
      const id = this.reviews.length + 1;
      this.reviews.push({
        id,
        avatarUrl: 'ruta-del-avatar-nuevo.jpg', // Cambiar por la ruta del nuevo avatar
        userName: review.userName,
        userLocation: review.userLocation,
        rating: review.rating,
        content: review.content
      });
      this.showModal = false;
    }
  }
};
</script>

<style scoped>
/* Estilos para la sección de reseñas */
.reviews {
  margin-top: 40px;
}

h1 {
  margin-bottom: 2em;
}

.add-review-button {
  background-color: #5865f2;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s;
  margin-top: 20px;
}

.add-review-button:hover {
  background-color: #ffca2e;
}
</style>
