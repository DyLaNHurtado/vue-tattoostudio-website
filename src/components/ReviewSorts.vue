<template>
    <div class="sort-buttons sort-button-1">
        <button :class="['transparent-button',{ 'active': option!='' && option === EnumReviewSorts.LIKES }]" @click="sortBy(EnumReviewSorts.LIKES)">Más Gustados</button>
        <button :class="['transparent-button',{ 'active': option!='' && option === EnumReviewSorts.USEFULLED }]" @click="sortBy(EnumReviewSorts.USEFULLED )">Más Útiles</button>
        <button :class="['transparent-button',{ 'active': option!='' && option === EnumReviewSorts.RATING }]" @click="sortBy(EnumReviewSorts.RATING)">Más Puntuación</button>
        <button :class="['transparent-button',{ 'active': option!='' && option === EnumReviewSorts.LOWEST_RATING }]" @click="sortBy(EnumReviewSorts.LOWEST_RATING)">Menor Puntuación</button>
    </div>
    <div class="sort-buttons">
      <button :class="['transparent-button',{ 'active': option!='' && option === EnumReviewSorts.ONE }]" @click="sortBy(EnumReviewSorts.ONE)"><font-awesome-icon :icon="['fas', 'star']" class="star" /></button>
        <button :class="['transparent-button',{ 'active': option!='' && option === EnumReviewSorts.TWO }]" @click="sortBy(EnumReviewSorts.TWO)"><font-awesome-icon :icon="['fas', 'star']" v-for="start in 2" class="star" /></button>
        <button :class="['transparent-button',{ 'active': option!='' && option === EnumReviewSorts.THREE }]" @click="sortBy(EnumReviewSorts.THREE)"><font-awesome-icon :icon="['fas', 'star']" v-for="start in 3" class="star"  /></button>
        <button :class="['transparent-button',{ 'active': option!='' && option === EnumReviewSorts.FOUR }]" @click="sortBy(EnumReviewSorts.FOUR)"><font-awesome-icon :icon="['fas', 'star']" v-for="start in 4" class="star" /></button>
        <button :class="['transparent-button',{ 'active': option!='' && option === EnumReviewSorts.FIVE }]" @click="sortBy(EnumReviewSorts.FIVE)"><font-awesome-icon :icon="['fas', 'star']" v-for="start in 5" class="star" /></button>
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

  },
    methods:{
        sortBy(option) {
          console.log(option , this.option);
          if(option === this.option){
            this.option = '';
          }else{
            this.option = option;
          }
          this.$emit('sortReviewsBy', this.option);
        }
    },mounted(){
      console.log(EnumReviewSorts)
    }
};
</script>
  
<style scoped>
/* Estilos para los botones de ordenación */
.sort-buttons {
  display: flex;
  justify-content: end;
  align-items: end;
  margin-bottom: 20px;
}

.sort-buttons-1{
  margin: 10px;
}
.transparent-button{
  padding: 8px 16px;
  font-size: 14px;
  border-radius: 8px;
}
.transparent-button:hover .star{
  color: #5865f2;
}
.transparent-button.active {
  background-color: #5865f2;
  color: #fff;
  border-color: transparent;
}

.transparent-button.active:hover {
  background-color: #4054d1;
}
.star {
  transition: transform 0.2s, color 0.2s;
  color: #ccc;
}

.transparent-button.active .star {
  color: #ffc107;
}
</style>
  