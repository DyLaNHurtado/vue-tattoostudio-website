<template>
    <div class="gallery-grid">
      <div
        v-for="image in images"
        :key="image.id"
        class="gallery-item"
        @click="selectImage(image)"
      >
        <img :src="image.url" :alt="image.alt" class="gallery-image" loading="lazy" />
      </div>
    </div>
    <teleport to="body">
    <LightBox :show="lightboxShow" :image="selectedImage" :images="images" @close="closeLightbox" />
  </teleport>
  </template>
  
  <script>
  import LightBox from './LightBox.vue';
  export default {
    name: 'GalleryList',
    props: {
      images: {
        type: Array,
        required: true
      }
    },
    components: {
        LightBox
    },
    data() {
    return {
      selectedImage: null,
      lightboxShow: false,
    };
  },
  methods: {
    selectImage(image) {
      this.lightboxShow = true;
      this.selectedImage = image;
      this.addEscKeyListener();
    },
    closeLightbox() {
      this.lightboxShow = false;
      this.selectedImage = null;
      this.removeEscKeyListener();
    },
    addEscKeyListener() {
      if (!this.escKeyListenerAdded) {
        window.addEventListener('keyup', this.closeOnEsc);
        this.escKeyListenerAdded = true;
      }
    },
    removeEscKeyListener() {
      if (this.escKeyListenerAdded) {
        window.removeEventListener('keyup', this.closeOnEsc);
        this.escKeyListenerAdded = false;
      }
    },
    closeOnEsc(event) {
      if (event.key === 'Escape') {
        this.closeLightbox();
      }
    },
  },
  }
  </script>
  
  <style scoped>
  .gallery-grid {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
    gap: 20px;
  }
  
  .gallery-item {
    cursor: pointer;
    overflow: hidden;
    border-radius: 10px;
    transition: transform 0.2s ease-in-out;
    height: 450px;
    min-width: 256px;
    box-shadow: 0 0 4px rgba(114, 114, 114, 0.4);
  }
  
  .gallery-item:hover {
    transform: scale(1.05);
  }
  
  .gallery-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.2s ease;
  }
  
  .gallery-image:hover {
    transform: scale(1.05);
  }

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