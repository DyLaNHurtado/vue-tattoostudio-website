<template>
  <div class="gallery-block">
    <div class="gallery">
      <div v-for="(image, index) in images" :key="index" @click="openLightbox(index)" class="gallery-item">
        <img :src="image.url" :alt="image.alt" class="gallery-image" loading="lazy" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: Array,
    category: String
  },
  methods: {
    openLightbox(index) {
      this.$emit('openLightbox', index, this.category);
    }
  }
};
</script>

<style scoped>
.gallery-block {
  margin-bottom: 40px;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
}

.gallery-item {
  position: relative;
  width: calc(33.333% - 16px);
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.gallery-item:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}
</style>