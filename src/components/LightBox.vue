<template>
  <div class="lightbox" v-if="show">
    <div class="lightbox-content">
      <span class="lightbox-close" @click="close">&times;</span>
      <div class="lightbox-navigation">
        <button class="lightbox-btn prev-btn" @click="gotoPrevious">&lt;</button>
        <div class="lightbox-image-container">
          <img :src="image" alt="Lightbox Image" class="lightbox-image" />
        </div>
        <button class="lightbox-btn next-btn" @click="gotoNext">&gt;</button>
      </div>
      <div class="tattoo-data">
        <h1>Detalles:</h1>
        <p>Watercolor, Neotradicional</p>
        <p>80$ por 10cm, 120$ más de 10cm</p>
        <!-- Ajusta los detalles según tus necesidades -->
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
  methods: {
    close() {
      this.$emit('close');
    },
    gotoNext() {
      const currentIndex = this.getCurrentIndex();
      const nextIndex = currentIndex === this.images.length - 1 ? 0 : currentIndex + 1;
      this.updateLightboxImage(nextIndex);
    },
    gotoPrevious() {
      const currentIndex = this.getCurrentIndex();
      const prevIndex = currentIndex === 0 ? this.images.length - 1 : currentIndex - 1;
      this.updateLightboxImage(prevIndex);
    },
    getCurrentIndex() {
      return this.images.findIndex(img => img.url === this.image);
    },
    updateLightboxImage(index) {
      this.$emit('updateImage', this.images[index].url, index); // Emitir el índice junto con la URL
    }
  }
};
</script>

<style scoped>
.lightbox {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(1.5rem);
  z-index: 200;
}

.lightbox-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 50px;
  z-index: 300;
}

.lightbox-navigation {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
}

.lightbox-btn {
  background: rgba(255, 255, 255, 0.5);
  color: black;
  border: none;
  font-size: 2em;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.lightbox-btn:hover {
  background-color: rgba(255, 255, 255, 0.8);
}

.lightbox-btn.prev-btn {
  margin-right: auto;
}

.lightbox-btn.next-btn {
  margin-left: auto;
}

.lightbox-image-container {
  width: 100%;
  max-width: 800px;
  max-height: 80vh;
  margin: 10px;
  border-radius: 8px;
  padding: 5px;
  border: 1px solid var(--color-border);
  transition: all 0.1s;
  overflow: hidden;
}

.lightbox-image {
  width: 100%;
  height: auto;
  object-fit: contain;
}

.lightbox-close {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 4em;
  cursor: pointer;
  color: white;
}

.tattoo-data {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>