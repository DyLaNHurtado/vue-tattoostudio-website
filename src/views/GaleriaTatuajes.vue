<template>
  <div class="gallery-container">
    <main class="container">
      <h1 class="gallery-title">Galería de Tatuajes</h1>
      <GalleryList :images="images" @select-image="selectImage" />
    </main>
  </div>
</template>

<script>
import GalleryList from '../components/GalleryList.vue';

export default {
  components: {
    GalleryList,
  },
  data() {
    return {
      images: [
        { id: 1, url: '/vue.svg', alt: 'Tattoo 1' },
        { id: 2, url: '/placeholder.svg?height=400&width=400&text=Tattoo+2', alt: 'Tattoo 2' },
        { id: 3, url: '/placeholder.svg?height=400&width=400&text=Tattoo+3', alt: 'Tattoo 3' },
        { id: 4, url: '/placeholder.svg?height=400&width=400&text=Tattoo+4', alt: 'Tattoo 4' },
        { id: 5, url: '/placeholder.svg?height=400&width=400&text=Tattoo+5', alt: 'Tattoo 5' },
        { id: 6, url: '/placeholder.svg?height=400&width=400&text=Tattoo+6', alt: 'Tattoo 6' },
        { id: 7, url: '/placeholder.svg?height=400&width=400&text=Tattoo+7', alt: 'Tattoo 7' },
        { id: 8, url: '/placeholder.svg?height=400&width=400&text=Tattoo+8', alt: 'Tattoo 8' },
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
}
</style>