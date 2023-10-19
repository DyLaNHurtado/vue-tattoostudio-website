<template>
  <div class="reviews">
    <div class="flex-container">
      <ReviewSummary :totalReviews="reviews.length" :list="calculateNumberStars()"/>
      <FAQ/>
    </div>

    <div class="add-button-container">
      <button class="primary-button" @click="showModal = true">
        Agregar reseña
      </button>
    </div>

    <ReviewSorts @sortReviewsBy="sortBy" :sortByOption="sortByOption" />
    <ReviewList :reviews="sortedReviews" @backFromNotFoundList="sortByOption = ''" />

    <ReviewFormDialog v-if="showModal" @close="showModal = false" @addReview="agregarResena" />
  </div>
</template>

<script>
import { EnumReviewSorts } from '../components/Enums';
import ReviewList from '../components/ReviewList.vue';
import ReviewFormDialog from '../components/ReviewFormDialog.vue';
import ReviewSorts from '../components/ReviewSorts.vue';
import ReviewSummary from '../components/ReviewSummary.vue';
import FAQ from '../components/FAQ.vue';

export default {
  components: {
    ReviewList,
    ReviewFormDialog,
    ReviewSorts,
    ReviewSummary,
    FAQ
},
  data() {
    return {
      reviews: [
        {
          id: 1,
          userName: 'Cliente 1',
          rating: 5,
          content: '¡Excelente estudio de tatuajes! Muy profesionales y creativos.',
          likes: 5,
          usefulled: 2
        },
        {
          id: 2,
          userName: 'Cliente 2',
          rating: 4,
          content: 'Me encantó mi nuevo tatuaje. El artista capturó mi idea perfectamente.',
          likes: 2,
          usefulled: 4

        },
      ],
      showModal: false,
      sortByOption: '',
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
    },
    calculateNumberStars(){
      let star1 = 0;
      let star2 = 0;
      let star3 = 0;
      let star4 = 0;
      let star5 = 0;
      if(this.reviews){
        this.reviews.forEach( review => {
          if(review.rating === 1){
            star1++;
          }else if(review.rating === 2){
            star2++;
          }else if(review.rating === 3){
            star3++;
          }else if(review.rating === 4){
            star4++;
          }else{
            star5++;
          }
        });
      }
      return [star1, star2, star3, star4, star5];
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
      } else if (this.sortByOption === EnumReviewSorts.FIVE) {
        sorted = this.reviews.filter((a) => a.rating === 5);
      } else {
        sorted = [...this.reviews];
      }
      console.log(this.sortByOption);

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

.add-button-container{
  width: 100%;
  display: flex;
  justify-content: end;
}

.primary-button{
  margin-top: 20px;
  transform: translateY(50px);
}

.flex-container{
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: stretch;
  justify-content: center;
}

@media (max-width: 1345px) {

  .flex-container{
    flex-direction: column;
  }

.add-button-container{
  justify-content: center;
  margin-bottom: 10px;
}
  .primary-button{
    transform: translateY(0);
  }

}
</style>
