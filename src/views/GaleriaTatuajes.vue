<template>
  <div class="gallery-container">
  <!--   <div class="category-section">
      <h3>¿Qué quieres ver hoy?</h3>
      <div class="category-cards">
        <div
          class="category-card"
          v-for="(category, index) in Object.values(GalleryCategories)"
          :key="index"
          :class="{ 'active': currentCategories.has(category) }"
          @click="toggleCategory(category)"
        >
          <div class="category-icon">
            <font-awesome-icon :icon="['fas', 'heart']" v-if="category === GalleryCategories.TATTOOS" class="icon" />
            <font-awesome-icon :icon="['fas', 'bolt']" v-else-if="category === GalleryCategories.FLASH_OFFERS" class="icon" />
            <font-awesome-icon :icon="['fas', 'palette']" v-else-if="category === GalleryCategories.ILUSTRATIONS" class="icon" />
            <font-awesome-icon :icon="['fas', 'sticky-note']" v-else-if="category === GalleryCategories.STICKERS" class="icon" />
          </div>
          <div class="category-name">{{ category }}</div>
        </div>
      </div>
    </div>
    Galería de imágenes 
    <div class="gallery-grid">
      <div class="gallery-item" v-for="(image, index) in filteredImages" :key="index" @click="openLightbox(index)">
        <img :src="image.url" :alt="'Imagen ' + index" class="gallery-image">
      </div>
    </div>-->

    <main class="container">
      <h1 class="gallery-title">Galería de Tatuajes</h1>
      <div class="gallery-grid">
        <div
          v-for="image in images"
          :key="image.id"
          class="gallery-item"
          @click="selectImage(image)"
        >
          <img :src="image.url" :alt="image.alt" class="gallery-image" />
        </div>
      </div>
    </main>
  </div>
  <teleport to="body">
    <LightBox :show="lightboxShow" :image="selectedImage" :images="images" @close="closeLightbox" />
  </teleport>
</template>
<!-- 
<script>
import { GalleryCategories } from '../components/Enums';
import LightBox from '../components/LightBox.vue';
import { collection, getDocs } from 'firebase/firestore'; // Importa los métodos necesarios de Firestore
import { db } from '../firebaseConfig'; // Importa tu instancia de Firestore

export default {
  components: {
    LightBox,
  },
  data() {
    return {
      imageList: [],
      lightboxShow: false,
      lightboxImage: null,
      searchQuery: '',
      currentCategories: new Set(),
      GalleryCategories: GalleryCategories,
    };
  },
  computed: {
    filteredImages() {
      return this.imageList.filter(image => {
        const matchesCategories = this.currentCategories.size === 0 || this.currentCategories.has(image.category);
        const matchesSearch = image.tags.some(tag => tag.toLowerCase().includes(this.searchQuery.toLowerCase()));
        return matchesCategories && matchesSearch;
      });
    },
    relatedImages() {
      if (!this.lightboxImage) return [];
      const currentImage = this.imageList.find(img => img.url === this.lightboxImage.url);
      if (!currentImage) return [];
      return this.imageList.filter(img => img !== currentImage && img.tags.some(tag => currentImage.tags.includes(tag)));
    }
  },
  methods: {
    openLightbox(index) {
      this.lightboxImage = this.filteredImages[index];
      this.lightboxShow = true;
      this.addEscKeyListener();
    },
    closeLightbox() {
      this.lightboxShow = false;
      this.lightboxImage = null;
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
    toggleCategory(category) {
      if (this.currentCategories.has(category)) {
        this.currentCategories.delete(category);
      } else {
        this.currentCategories.add(category);
      }
    },
    async loadImages() {
      try {
        const querySnapshot = await getDocs(collection(db, 'gallery'));
        this.imageList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    }
  },
  created() {
    this.loadImages();
  }
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

.search-bar {
  background-color: var(--color-background-soft);
  border-radius: 20px;
  padding: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px var(--color-border);
}

.search-bar input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 16px;
  padding: 8px;
  border-radius: 20px;
  transition: background-color 0.3s;
}

.search-bar input:focus {
  background-color: var(--color-background-mute);
}

.search-icon {
  margin-left: 10px;
  font-size: 20px;
}

.category-section {
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 100%;
  border-bottom: 2px solid var(--color-border);
}

.category-cards {
  display: flex;
  gap: 40px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  min-width: 100%;
}

.icon {
  font-size: 2.5em;
  transition: transform 0.3s ease, color 0.3s ease; 
}



.category-card {
  width: 150px;
  height: 150px;
  border-radius: 20px;
  background-color: var(--color-background);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s ease;
  border: 2px solid var(--color-border);
  user-select: none;
}

.category-card.active {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.category-card:hover {
  border: 2px solid var(--color-primary-hover);
  transform: translateY(-5px);
}
.category-card:hover .icon {
  transform: scale(1.2);
  color: var(--color-primary-hover); 
}

.category-icon {
  font-size: 1.5em;
  margin-bottom: 8px;
}

.category-name {
  font-weight: bold;
  text-align: center;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(185px, 1fr));
  gap: 20px;
  place-items: center;
  min-width: 100%;
  min-height: 100%;
  padding: 30px;
}

.gallery-item {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  background-color: var(--color-background);
  box-shadow: 0 4px 6px var(--color-border);
  cursor: pointer;
  transition: transform 0.3s ease;
  max-width: 40vw;
  max-height: auto;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.gallery-item:hover img {
  transform: scale(1.05);
}

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
  backdrop-filter: blur(10px);
  z-index: 200;
}

.lightbox-content {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 80%;
  max-height: 90%;
  overflow: auto;
  background-color: var(--color-background);
  padding: 20px;
  border-radius: 10px;
  color: var(--color-text);
}

.lightbox-navigation {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.lightbox-btn {
  background-color: rgba(255, 255, 255, 0.8);
  color: var(--color-text);
  font-size: 1.5em;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.lightbox-btn:hover {
  background-color: rgba(255, 255, 255, 1);
}

.lightbox-image {
  max-width: 100%;
  max-height: 80vh;
  border-radius: 10px;
  object-fit: contain;
}

.lightbox-close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 2em;
  cursor: pointer;
  color: var(--color-text);
}

.tattoo-data {
  margin-top: 20px;
  text-align: center;
}
</style> -->

<script>
import LightBox from '../components/LightBox.vue';
export default {
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
      ],
      selectedImage: null,
      lightboxShow: false,
    };
  },
  components: {
    LightBox,
  },
  methods: {
    selectImage(image) {
      this.lightboxShow = true;
      this.selectedImage = image;
      this.addEscKeyListener();
    },
    closeImage() {
      this.selectedImage = null;
    },
    closeLightbox() {
      this.lightboxShow = false;
      this.lightboxImage = null;
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
};
</script>

<style scoped>
/* Gallery styles */
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

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.gallery-item {
  cursor: pointer;
  overflow: hidden;
  border-radius: 10px;
  transition: transform 0.2s ease-in-out;
  min-height: 256px;
  min-width: 256px;
  box-shadow: 0 0 4px rgba(114, 114, 114, 0.4);
}

.gallery-item:hover {
  transform: scale(1.10);
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.2s ease;
}

.gallery-image:hover {
  transform: scale(1.10);
}

/* Modal styles */
.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
}

.modal-image {
  max-width: 80%;
  max-height: 80%;
  border-radius: 10px;
}

.close-button {
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
}

.close-button:hover {
  opacity: 80;
}
</style>