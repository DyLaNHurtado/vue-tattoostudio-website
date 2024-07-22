<template>
  <div class="parallax">
        <h1>Galeria</h1>
        <p class="subheading">Descubre algo nuevo, disfruta del arte</p>
    </div>
  <div class="gallery-container">
    <div class="category-section">
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
    <!-- Galería de imágenes -->
    <div class="gallery-grid">
      <div class="gallery-item" v-for="(image, index) in filteredImages" :key="index" @click="openLightbox(index)">
        <img :src="image.url" :alt="'Imagen ' + index" class="gallery-image">
      </div>
    </div>

    <!-- Lightbox -->
    <LightBox :show="lightboxShow" :image="lightboxImage" :images="relatedImages" @close="closeLightbox" />
  </div>
</template>

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
</style>