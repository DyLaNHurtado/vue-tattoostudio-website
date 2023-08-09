<template>
  <div class="reviews">
    <ReviewSorts @sortReviewsBy="sortedReviews"/>
    <h1>Reseñas de Clientes:</h1>
    <ReviewList :reviews="reviews" />
    <button class="add-review-button" @click="showModal = true">
      Agregar reseña
    </button>
    <ReviewFormDialog v-if="showModal" @close="showModal = false" @addReview="agregarResena" />
  </div>
</template>

<script>
import ReviewList from '../components/ReviewList.vue';
import ReviewFormDialog from '../components/ReviewFormDialog.vue';
import ReviewSorts from '../components/ReviewSorts.vue';

export default {
  components: {
    ReviewList,
    ReviewFormDialog,
    ReviewSorts
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
          content: '¡Excelente estudio de tatuajes! Muy profesionales y creativos.',
          likes: 5,
          usefulled:2
        },
        {
          id: 2,
          avatarUrl: 'ruta-del-avatar-2.jpg',
          userName: 'Cliente 2',
          userLocation: 'Ciudad 2',
          rating: 4,
          content: 'Me encantó mi nuevo tatuaje. El artista capturó mi idea perfectamente.',
          likes: 2,
          usefulled:4

        },
      ],
      showModal: false,
      sortByOption: 'usefulled',
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
        content: review.content,
        likes:review.likes,
        usefulled: review.usefulled,
      });
      this.showModal = false;
    }
  },
    computed: {
    sortedReviews() {
      this.reviews = [...this.reviews];

      if (this.sortByOption === 'likes') {
        this.reviews.sort((a, b) => b.likes - a.likes);
      } else if (this.sortByOption === 'usefulled') {
        this.reviews.sort((a, b) => b.usefulled - a.usefulled);
      } else if (this.sortByOption === 'rating') {
        this.reviews.sort((a, b) => b.rating - a.rating);
      } else if (this.sortByOption === 'lowestRating') {
        this.reviews.sort((a, b) => a.rating - b.rating);
      } else if (this.sortByOption === 'stars') {
        this.reviews.sort((a, b) => b.rating - a.rating || b.likes - a.likes);
      }

      return this.reviews;
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
  background-color: #4054d1;
}
</style>
