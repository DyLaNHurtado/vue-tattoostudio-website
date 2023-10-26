<template>
    <h1>{{title}}</h1>
    <div class="block">
    <div v-for="(image, index) in images" :key="index" @click="openLightbox(index)" class="gallery-item">
      <img  :src="image.url" alt="Image"  class="lightbox-image"/>
    </div>
    </div>
  
  </template>
    
  <script>
  export default {
    data(){
      return{
      }
  
    },props:{
        title: String,
        images: Array,

    },methods:{
        openLightbox(){
            this.$emit('openLightbox' , images[index]);
        }
    },watch:{
    }
  };
  </script>
    
  <style scoped>
  /* Estilos para los botones de ordenación */
  .block {
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  flex-direction: row;
}

.gallery-item {
  width: 200px; /* Tamaño deseado para cada imagen */
  margin: 10px; /* Espaciado entre imágenes */
  border-radius: 8px;
  padding: 5px;
  border: 1px solid var( --color-border);
  transition: all .1s;
}
.gallery-item:hover {
  border: 1px solid var(--color-text);
}
.gallery-item:active {
  scale: .9
}


.gallery-item img {
  width: 100%;
  height: auto;
}
  </style>
    