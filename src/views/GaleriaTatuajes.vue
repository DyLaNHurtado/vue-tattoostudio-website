<template>
  <div class="gallery">
    <!-- Ejemplo de varios GalleryBlocks -->
    <GalleryBlock :images="getCategoryList(GalleryCategories.TATTOOS)" :category="GalleryCategories.TATTOOS" title="Tatuajes"
                  @openLightbox="openLightbox" />
    <GalleryBlock :images="getCategoryList(GalleryCategories.ILUSTRATIONS)" :category="GalleryCategories.ILUSTRATIONS" title="Ilustraciones"
                  @openLightbox="openLightbox" />
    <GalleryBlock :images="getCategoryList(GalleryCategories.FLASH_OFFERS)" :category="GalleryCategories.FLASH_OFFERS" title="Ofertas Flash"
                  @openLightbox="openLightbox" />

    <!-- LightBox -->
    <LightBox class="lightbox" :show="lightboxShow" :image="lightboxImage"
              :images="getCategoryList(this.currentCategory)" @close="closeLightbox"
              @updateImage="updateLightboxImage" />
  </div>
</template>

<script>
import { GalleryCategories } from '../components/Enums';
import GalleryBlock from '../components/GalleryBlock.vue';
import LightBox from '../components/LightBox.vue';

export default {
  components: {
    LightBox,
    GalleryBlock,
  },
  data() {
    return {
      imageList: [
        { url: '/public/vite.svg', category: GalleryCategories.TATTOOS, styles: ["", ""] },
        { url: '/public/vue.svg', category: "", styles: ["", ""] },
        { url: '/public/vite.svg', category: GalleryCategories.ILUSTRATIONS, styles: ["", "", "", ""] },
        { url: '/public/vue.svg', category: GalleryCategories.FLASH_OFFERS, styles: ["", "", "", ""] },
        { url: '/public/vite.svg', category: "", styles: ["", "", "", ""] },
        { url: '/public/vite.svg', category: GalleryCategories.FLASH_OFFERS, styles: ["", "", "", ""] },
        { url: '/public/vite.svg', category: "", styles: ["", "", "", ""] },
        { url: '/public/sssaaa.svg', category: GalleryCategories.FLASH_OFFERS, styles: ["", "", "", ""] },
        { url: '/public/vite.svg', category: GalleryCategories.TATTOOS, styles: ["", "", "", ""] },
        { url: '/public/vite.svg', category: GalleryCategories.TATTOOS, styles: ["", ""] },
        { url: '/public/vite.svg', category: "", styles: ["", ""] },
        { url: '/public/vite.svg', category: GalleryCategories.ILUSTRATIONS, styles: ["", "", "", ""] },
      ],
      lightboxShow: false,
      lightboxImage: null,
      escKeyListenerAdded: false,
      currentCategory: null, // Para mantener la categoría actual del LightBox
      currentImageIndex: 0, // Para mantener el índice actual del LightBox
      GalleryCategories:GalleryCategories,
    };
  },
  methods: {
    openLightbox(index, category) {
      this.currentCategory = category; // Establecer la categoría actual del LightBox
      this.lightboxImage = this.getCategoryList(category)[index].url;
      this.currentImageIndex = index; // Establecer el índice actual del LightBox
      this.lightboxShow = true;
      this.addEscKeyListener();
    },
    closeLightbox() {
      this.lightboxShow = false;
      this.lightboxImage = null;
      this.removeEscKeyListener();
    },
    updateLightboxImage(url, index) {
      this.lightboxImage = url;
      this.currentImageIndex = index; // Actualizar el índice actual del LightBox
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
    getCategoryList(category) {
      return this.imageList!=null ? this.imageList.filter((image) => image.category === category): [];
    },
  },
  beforeUnmount() {
    this.removeEscKeyListener();
  },
};
</script>

<style scoped>
.gallery {
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  flex-direction: column;
}
</style>