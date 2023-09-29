<template>
  <div class="review-sort">

    <div class="sort-buttons">
        <button :class="['transparent-button',{ 'active': option!='' && option === EnumReviewSorts.LIKES }]" @click="sortBy(EnumReviewSorts.LIKES)">Más Gustados</button>
        <button :class="['transparent-button',{ 'active': option!='' && option === EnumReviewSorts.USEFULLED }]" @click="sortBy(EnumReviewSorts.USEFULLED )">Más Útiles</button>
        <button :class="['transparent-button',{ 'active': option!='' && option === EnumReviewSorts.RATING }]" @click="sortBy(EnumReviewSorts.RATING)">Más Puntuación</button>
        <button :class="['transparent-button',{ 'active': option!='' && option === EnumReviewSorts.LOWEST_RATING }]" @click="sortBy(EnumReviewSorts.LOWEST_RATING)">Menor Puntuación</button>
        <button :class="['transparent-button',{ 'active': option!='' && option === EnumReviewSorts.ONE }]" @click="sortBy(EnumReviewSorts.ONE)"><font-awesome-icon :icon="['fas', 'star']" class="star" /></button>
        <button :class="['transparent-button',{ 'active': option!='' && option === EnumReviewSorts.TWO }]" @click="sortBy(EnumReviewSorts.TWO)"><font-awesome-icon :icon="['fas', 'star']" v-for="start in 2" class="star" /></button>
        <button :class="['transparent-button',{ 'active': option!='' && option === EnumReviewSorts.THREE }]" @click="sortBy(EnumReviewSorts.THREE)"><font-awesome-icon :icon="['fas', 'star']" v-for="start in 3" class="star"  /></button>
        <button :class="['transparent-button',{ 'active': option!='' && option === EnumReviewSorts.FOUR }]" @click="sortBy(EnumReviewSorts.FOUR)"><font-awesome-icon :icon="['fas', 'star']" v-for="start in 4" class="star" /></button>
        <button :class="['transparent-button',{ 'active': option!='' && option === EnumReviewSorts.FIVE }]" @click="sortBy(EnumReviewSorts.FIVE)"><font-awesome-icon :icon="['fas', 'star']" v-for="start in 5" class="star" /></button>
    </div>
  </div>

</template>
  
<script>
import { EnumReviewSorts } from './EnumReviewSorts';
export default {
  data(){
    return{
      option:'',
      EnumReviewSorts: EnumReviewSorts,
    }

  },props:{
    sortByOption: String,
  },methods:{
        sortBy(option) {
          console.log(option , this.option);
          if(option === this.option){
            this.option = '';
          }else{
            this.option = option;
          }
          this.$emit('sortReviewsBy', this.option);
        }
    },watch:{
      sortByOption(newValue){
        if(newValue !== this.option){
          this.option = newValue;
        }
      }
    }
};
</script>
  
<style scoped>
/* Estilos para los botones de ordenación */
.review-sort{
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  margin: 10px 0px;

}
.sort-buttons {
  display: flex;
  justify-content: start;
  align-items: end;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 8px;
}

.transparent-button{
  padding: 8px 16px;
  font-size: 14px;
  border-radius: 8px;
  background-color: var(--color-background-soft);
}
.transparent-button:hover .star{
  color: var(--color-primary);;
}
.transparent-button.active {
  background-color: var(--color-primary);
  color: white;
  border-color: transparent;
}

.transparent-button.active:hover {
  background-color: var(--color-primary-hover);
}
.star {
  transition: transform 0.2s, color 0.2s;
  color: var(--color-text-mute);
}

.transparent-button.active .star {
  color: #ffc107;
}
@media (max-width: 1100px) {
  .review-sort{
    flex-direction: column;
    justify-content: start;
  }
  .sort-buttons{
    justify-content: start;
  }
}
</style>
  