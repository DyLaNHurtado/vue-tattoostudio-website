<template>
  <div>
    <h1>{{ title }}</h1>
    <div class="gallery">
      <div v-for="(image, index) in images" :key="index" @click="openLightbox(index)" class="gallery-item">
        <img :src="image.url" alt="Image" class="gallery-image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    images: Array,
    category: String
  },
  methods: {
    openLightbox(index,) {
      this.$emit('openLightbox', index, this.category);
    }
  }
};
</script>

<style scoped>
.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
}

.gallery-item {
  width: 250px;
  height: 250px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
}

.gallery-item:hover {
  transform: scale(1.05);
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}
</style>