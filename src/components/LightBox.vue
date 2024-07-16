<template>
  <div class="lightbox" v-if="show" @click.self="close">
    <div class="lightbox-container">
      <span class="lightbox-close" @click="close">&times;</span>
      <div class="lightbox-content">
        <div class="lightbox-image-container">
          <img :src="currentImage?.url" alt="Lightbox Image" class="lightbox-image" />
        </div>
        <div class="related-images" v-if="relatedImages.length > 0">
          <h2>Más como esto:</h2>
          <div class="related-images-grid">
            <div v-for="(relatedImg, index) in relatedImages" :key="index" class="related-image">
              <img :src="relatedImg.url" :alt="'Imagen ' + (index + 1)" class="related-image-item" @click="selectImage(relatedImg)">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    images: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentImage: null
    };
  },
  computed: {
    relatedImages() {
      console.log(this.currentImage);
      if (!this.currentImage) return [];
      return this.images.filter(img => img.url !== this.currentImage.url && 
      (img.tags.some(tag => this.currentImage.tags.includes(tag)) || img.category === this.currentImage.category));
    }
  },
  watch: {
    show(newVal) {
      console.log("show changed:", newVal); // Log para verificar cambios
      if (newVal) {
        this.enableScrollLock();
      } else {
        console.log("disable scroll");
        this.disableScrollLock();
      }
    },image(newVal){
      this.currentImage = newVal ? newVal : (this.images.length > 0 ? this.images[0] : null);
    }
  },
  methods: {
    close() {
      this.disableScrollLock();
      this.$emit('close');
    },
    enableScrollLock() {
      console.log("Scroll locked");
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    },
    disableScrollLock() {
      console.log("Scroll unlocked");
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    },
    selectImage(selectedImage) {
      this.currentImage = selectedImage;
      // Puedes ajustar cualquier lógica adicional aquí, como cambiar el texto alternativo
    },
  },
  mounted() {
    if (this.show) {
      this.enableScrollLock();
    }
    this.currentImage = this.image ? this.image : (this.images.length > 0 ? this.images[0] : null);
  }
};
</script>

<style scoped>
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 200;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.9);
  overflow-y: auto;
}

.lightbox-container {
  position: relative;
  width: 100%;
  max-width: 90vw;
  max-height: 80vh;
  background-color: var(--color-background);
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
}

.lightbox-content {
  min-width: 100%;
  width: 100%;
  height: 100%;
  min-height: 100%;
  padding: 40px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.lightbox-close {
  position: fixed;
  top: 90px;
  right: 90px;
  font-size: 3em;
  cursor: pointer;
  color: var(--color-text);
  background: none;
  border: none;
  transition: color 0.3s;
  z-index: 100;
}

.lightbox-close:hover {
  color: var(--color-primary);
}

.lightbox-image-container {
  width: 100%;
  max-height: 70vh;
  overflow: hidden;
  border-radius: 12px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  padding: 10px;
}

.lightbox-image {
  width: 100%;
  min-height: 100%;
  min-width: 40vw;
  max-width: 60vw;
  max-height: 50vh;
  object-fit: contain; /* Escalar imagen sin deformar */
}

.related-images {
  width: 100%;
  text-align: center;
  background-color: var(--color-background-mute);
  padding: 20px;
  border-radius: 12px;
}

.related-images h2 {
  margin-bottom: 20px;
}

.related-images-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 20px;
}

.related-image {
  width: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  background-color: var(--color-background);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease;
}

.related-image-item {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.related-image:hover {
  transform: scale(1.05);
}
</style>
