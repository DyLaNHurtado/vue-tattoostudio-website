<template>
  <div class="review-item">
    <div class="review-header">
      <div class="user-info">
        <h4 class="user-name">{{ review.userName }}</h4>
        <div class="rating">
          <span v-for="star in 5" :key="star" class="star"
            :class="{ 'active-star': star <= review.rating }"><font-awesome-icon :icon="['fas', 'star']" /></span>
        </div>
      </div>
    </div>
    <p class="review-content">{{ review.content }}</p>
    <div class="review-footer">
      <button class="like-button" :class="{ 'liked': liked }" @click="toggleLike(review.id)">
        <font-awesome-icon :icon="['far', 'heart']" v-if="!liked" />
        <font-awesome-icon :icon="['fas', 'heart']" v-else />
        <span class="particles particle1" v-if="liked" ></span>
        <span class="particles particle2" v-if="liked"></span>
        <span class="particles particle3" v-if="liked"></span>
        <span class="particles particle4" v-if="liked"></span>
        <span class="likes-count">{{ review.likes }}</span>
      </button>
      <div class="utils-buttons">
        <button  :class="['transparent-button',{ 'active': usefulled }]" @click="toogleUtil(review.id)">
          <span v-if="!usefulled">Marcar como util</span>
          <span v-else><font-awesome-icon :icon="['fas', 'check']" /> Votado como util</span>
        </button>
      </div>
      
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      liked: this.initialLiked,
      usefulled: this.initialUsefull,
    }
  },
  props: {
    review: Object,
    reviews: Array,
    initialLiked: Boolean,
  }, methods: {
    toggleLike(reviewId) {
      const review = this.reviews.find(review => review.id === reviewId);
      if (review) {
        this.liked = !this.liked;
        this.liked ? review.likes++ : review.likes--;
      }
    },
    toogleUtil(reviewId){
      const review = this.reviews.find(review => review.id === reviewId);
      if (review) {
        this.usefulled = !this.usefulled;
        this.usefulled ? review.usefulled++ : review.usefulled--;
      }
    }
  }
};
</script>
  
<style scoped>
/* Estilos para el elemento de reseña */
.review-item {
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 20px;
  background-color: var(--color-background-soft);
  transition: transform 0.3s, box-shadow 0.3s;
  height: auto;
  word-wrap: break-word;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.review-item:hover {
  box-shadow: inset 0px 0px 2px var(--color-primary);;
}

.review-header {
  display: flex;
  align-items: center;
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
  word-wrap: anywhere;
}

.user-name {
  font-size: 18px;
  margin: 0;
  color: var(--color-heading);
}

.user-location {
  font-size: 14px;
  color: var(--color-text-mute);
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
  color: var(--color-text-mute);
  /* Estrella apagada en gris */
}

.active-star {
  color: #ffc107;
  /* Estrella activa en amarillo */
}

.review-content {
  font-size: 16px;
  margin: 0;
  padding: 15px 0;
}
.review-footer {
  padding-top: 10px;
  border-top: 1px solid rgba(120, 120, 120, .1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}
.likes-count {
  margin: 5px;
  font-size: 14px; 
  color: var(--color-text-mute);
}

.like-button {
  display: inline-flex;
  align-items: center;
  background-color: transparent;
  border: none;
  color: var(--color-text);
  font-size: 20px;
  cursor: pointer;
  transition: color 0.2s;
}

.like-button:hover{
  color: var(--color-text-mute);
}
.like-button.liked {
  color: var(--color-text-error);
}
.utils-buttons{
  display: flex;
  gap: 10px;
}


.transparent-button.active{
  background-color: var(--color-primary);
  border: 2px solid var(--color-primary);
  color: var(--color-heading);
}


.particles {
  position: absolute;
  background-color: var(--color-text-error);
  border-radius: 50%;
  opacity: 0;
  transform: translateY(0);
}
.particle1 {
  left: 35%;
  bottom: 25%;
  width: 4px;
  height: 4px;
  animation: particlesAnim 0.8s ease-out forwards;
}
.particle2 {
  left: 25%;
  bottom:35%;
  width: 9px;
  height: 9px;
  animation: particlesAnim 0.6s ease-out forwards;

}
.particle3 {
  left: 5%;
  bottom: 25%;
  width: 8px;
  height: 8px;
  animation: particlesAnim 0.4s ease-out forwards;

}
.particle4 {
  left: 20%;
  bottom: 35%;
  width: 6px;
  height: 6px;
  animation: particlesAnim 0.2s ease-out forwards;

}

@keyframes particlesAnim {
  0% {
    opacity: 1;
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    transform: translateY(-24px);
  }
}

@media (prefers-color-scheme: dark) {
  .review-item {
    background-color: var(--c-indigo);
  }
}


</style>
  