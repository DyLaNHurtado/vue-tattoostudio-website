<template>
    <div class="sort-buttons">
        <button @click="sortBy('likes')">Más Gustados</button>
        <button @click="sortBy('usefulled')">Más Útiles</button>
        <button @click="sortBy('rating')">Más Puntuación</button>
        <button @click="sortBy('lowestRating')">Menor Puntuación</button>
        <button @click="sortBy('stars')">Por Estrellas</button>
    </div>
</template>
  
<script>

export default {
    methods:{
        sortBy(option) {
        this.$emit('sortReviewsBy', option);
        }
    }
};
</script>
  
<style scoped>
/* Estilos para los botones de ordenación */
.sort-buttons {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.sort-buttons button {
  background-color: #5865f2;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
  margin: 0 5px;
}

.sort-buttons button:hover {
  background-color: #4054d1;
}
</style>
  