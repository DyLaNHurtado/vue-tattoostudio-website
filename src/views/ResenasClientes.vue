<template>
  <div class="reviews">
    <h1>Reseñas de Clientes:</h1>
    <ReviewSorts @sortReviewsBy="sortBy" />
    <ReviewList :reviews="sortedReviews" />
    <button class="add-review-button" @click="showModal = true">
      Agregar reseña
    </button>
    <ReviewFormDialog v-if="showModal" @close="showModal = false" @addReview="agregarResena" />
  </div>
</template>

<script>
import { EnumReviewSorts } from '../components/EnumReviewSorts';
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
          usefulled: 2
        },
        {
          id: 2,
          avatarUrl: 'ruta-del-avatar-2.jpg',
          userName: 'Cliente 2',
          userLocation: 'Ciudad 2',
          rating: 4,
          content: 'Me encantó mi nuevo tatuaje. El artista capturó mi idea perfectamente.',
          likes: 2,
          usefulled: 4

        },
      ],
      showModal: false,
      sortByOption: 'usefulled',
      EnumReviewSorts: EnumReviewSorts,
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
        likes: review.likes,
        usefulled: review.usefulled,
      });
      this.showModal = false;
    },
    sortBy(option) {
      this.sortByOption = option;
      console.log(option)
    }
  },
  computed: {
    sortedReviews() {
      let sorted = [...this.reviews];
      if (this.sortByOption === EnumReviewSorts.LIKES) {
        sorted.sort((a, b) => b.likes - a.likes);
      } else if (this.sortByOption === EnumReviewSorts.USEFULLED) {
        sorted.sort((a, b) => b.usefulled - a.usefulled);
      } else if (this.sortByOption === EnumReviewSorts.RATING) {
        sorted.sort((a, b) => b.rating - a.rating);
      } else if (this.sortByOption === EnumReviewSorts.LOWEST_RATING) {
        sorted.sort((a, b) => a.rating - b.rating);
      } else if (this.sortByOption === EnumReviewSorts.ONE) {
        sorted = this.reviews.filter((a) => a.rating === 1);
      } else if (this.sortByOption === EnumReviewSorts.TWO) {
        sorted = this.reviews.filter((a) => a.rating === 2);
      } else if (this.sortByOption === EnumReviewSorts.THREE) {
        sorted = this.reviews.filter((a) => a.rating === 3);
      } else if (this.sortByOption === EnumReviewSorts.FOUR) {
        sorted = this.reviews.filter((a) => a.rating === 4);
      }else if (this.sortByOption === EnumReviewSorts.FIVE) {
        sorted = this.reviews.filter((a) => a.rating === 5);
      }else{
        sorted = [...this.reviews];
      }
      console.log( this.sortByOption);

      return sorted;
    }
  }
};
</script>

<style scoped>
/* Estilos para la sección de reseñas */
.reviews {
  margin-top: 40px;
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
