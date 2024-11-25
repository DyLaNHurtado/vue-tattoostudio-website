<template>
  <div class="gallery-container">
    <main class="container">
      <h1 class="gallery-title">Galería de Tatuajes</h1>
      <GalleryList :images="images" @select-image="selectImage" />
    </main>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
export default {
  components: {
    GalleryList: defineAsyncComponent(() => import('../components/GalleryList.vue')),
  },
  data() {
    return {
      images: [
        { id: 1, url: '/hada.jpg', alt: 'Tattoo hada colores' },
        { id: 2, url: '/tiburon.jpg', alt: 'Tatuaje tiburon rojo black and grey' },
        { id: 3, url: '/yokai.jpg', alt: 'Yokai tatuaje japones kanji tattoo letras japonesas chinas' },
        { id: 4, url: '/flor-craneo.jpg', alt: 'Flor de craneo diseño tatuaje color hojas new school' },
        { id: 5, url: '/seta.jpg', alt: 'Seta newschool tatuaje tattoo color azul scketch' },
        { id: 6, url: '/patopunky.webp', alt: 'Pato ignorant punky tattoo color rock style' },
        { id: 7, url: '/gatopinocho.webp', alt: 'Gato pinicho tatuaje a color dibujos cute disneytattoo' },
        { id: 8, url: '/pajaroloco.webp', alt: 'Pajaro loco puro tatuaje color rojo' },
      ]
    };
  },
};
</script>

<style scoped>
.gallery-container {
  padding: 20px;
  background-color: var(--color-background);
  color: var(--color-text);
  min-height: 100%;
  min-width: 100%;
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.gallery-title {
  font-size: 2.5rem;
  text-align: center;
  margin: 70px 0;
  color: var(--c-white);
}
</style>