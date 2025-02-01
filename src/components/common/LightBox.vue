<template>
  <div class="lightbox" v-if="show" @click.self="close">
    <div class="lightbox-container">
      <span class="lightbox-close" @click="close">&times;</span>
      <div class="lightbox-content">
        <div class="lightbox-image-container">
          <img :src="currentImage?.url" :alt="currentImage?.alt" class="lightbox-image" loading="lazy"/>
        </div>
      </div>
      <button class="lightbox-nav lightbox-prev" @click="prevImage"><font-awesome-icon :icon="['fas', 'chevron-left']" /></button>
      <button class="lightbox-nav lightbox-next" @click="nextImage"><font-awesome-icon :icon="['fas', 'chevron-right']" /></button>
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
      required: true,
      default: ''
    },
    images: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  data() {
    return {
      currentImage: null
    };
  },
  watch: {
  image(newVal){
      this.currentImage = newVal ? newVal : (this.images.length > 0 ? this.images[0] : null);
    }
  },
  methods: {
    close() {
      this.$emit('close');
    },

    selectImage(selectedImage) {
      this.currentImage = selectedImage;
    },
    prevImage() {
      const currentIndex = this.images.indexOf(this.currentImage);
      if (currentIndex > 0) {
        this.currentImage = this.images[currentIndex - 1];
      } else {
        this.currentImage = this.images[this.images.length - 1];
      }
    },
    nextImage() {
      const currentIndex = this.images.indexOf(this.currentImage);
      if (currentIndex < this.images.length - 1) {
        this.currentImage = this.images[currentIndex + 1];
      } else {
        this.currentImage = this.images[0];
      }
    }
  },
  mounted() {
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
  width: 90vw;
  height: 80vh;
  border-radius: 12px;
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
  color: var(--color-text-error);
}

.lightbox-image-container {
  width: 100%;
  height: 100%;
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
  object-fit: contain;
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
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
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

.lightbox-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  font-size: 2em;
  padding: 10px 15px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.lightbox-nav:hover {
  color: var(--color-primary);
}

.lightbox-prev {
  left: 10px;
}

.lightbox-next {
  right: 10px;
  
}
</style>
