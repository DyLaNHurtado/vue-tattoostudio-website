<template>
  <div class="gallery">

    <!-- <GalleryBlock :images="getCategoryList(GalleryCategories.TATTOOS)" title="Tatuajes"
      @openLightbox="openLightbox" /> -->
    <GalleryBlock :images="getCategoryList(GalleryCategories.FLASH_OFFERS)" title="Disponibles"
      @openLightbox="openLightbox" />
    <!-- <GalleryBlock :images="getCategoryList(GalleryCategories.ILUSTRATIONS)" title="Ilustraciones"
      @openLightbox="openLightbox" /> -->

    <LightBox class="lightbox" :show="lightboxShow" :image="lightboxImage" @close="closeLightbox" />
  </div>
</template>

<script>
import { GalleryCategories } from '../components/Enums';
// import { collection, query, onSnapshot } from 'firebase/firestore';
// import { db } from '../firebaseConfig.js';
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
        { url: '/public/vite.svg', category: "", styles: ["", ""] },
        { url: '/public/vite.svg', category: GalleryCategories.ILUSTRATIONS, styles: ["", "", "", ""] },
        { url: '/public/vite.svg', category: GalleryCategories.FLASH_OFFERS, styles: ["", "", "", ""] },
        { url: '/public/vite.svg', category: "", styles: ["", "", "", ""] },
        { url: '/public/vite.svg', category: GalleryCategories.FLASH_OFFERS, styles: ["", "", "", ""] },
        { url: '/public/vite.svg', category: "", styles: ["", "", "", ""] },
        { url: '/public/vite.svg', category: GalleryCategories.FLASH_OFFERS, styles: ["", "", "", ""] },
        { url: '/public/vite.svg', category: GalleryCategories.TATTOOS, styles: ["", "", "", ""] },
        { url: '/public/vite.svg', category: GalleryCategories.TATTOOS, styles: ["", ""] },
        { url: '/public/vite.svg', category: "", styles: ["", ""] },
        { url: '/public/vite.svg', category: GalleryCategories.ILUSTRATIONS, styles: ["", "", "", ""] },
        { url: '/public/vite.svg', category: GalleryCategories.FLASH_OFFERS, styles: ["", "", "", ""] },
        { url: '/public/vite.svg', category: "", styles: ["", "", "", ""] },
        { url: '/public/vite.svg', category: GalleryCategories.FLASH_OFFERS, styles: ["", "", "", ""] },
        { url: '/public/vite.svg', category: "", styles: ["", "", "", ""] },
        { url: '/public/vite.svg', category: GalleryCategories.FLASH_OFFERS, styles: ["", "", "", ""] },
        { url: '/public/vite.svg', category: GalleryCategories.TATTOOS, styles: ["", "", "", ""] },
        { url: '/public/vite.svg', category: GalleryCategories.TATTOOS, styles: ["", ""] },
        { url: '/public/vite.svg', category: "", styles: ["", ""] },
        { url: '/public/vite.svg', category: GalleryCategories.ILUSTRATIONS, styles: ["", "", "", ""] },
      ],
      lightboxShow: false,
      lightboxImage: null,
      escKeyListenerAdded: false,
      GalleryCategories: GalleryCategories,
    };
  },
  mounted() {
    // // Cargar datos de Firestore al montar el componente
    // const q = query(collection(db, 'tattoos'));

    // onSnapshot(q, (snapshot) => {
    //   this.tattoos = snapshot.docs.map((doc) => ({
    //     id: doc.id,
    //     imageUrl: doc.data().imageUrl,
    //     // Otros datos relacionados con el tatuaje
    //   }));
    // });
  },
  computed: {
  },
  methods: {
    openLightbox(index) {
      window.addEventListener('keyup', this.closeOnEsc);
      this.lightboxImage = this.imageList[index].url;
      this.lightboxShow = true;

      if (!this.escKeyListenerAdded) {
        window.addEventListener('keyup', this.closeOnEsc);
        this.escKeyListenerAdded = true;
      }
    },
    closeLightbox() {
      this.lightboxShow = false;
      this.lightboxImage = null;

      this.removeEscKeyListener();
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
      return this.imageList.filter((image) => image.category === category);
    }
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

.gallery-item {
  width: 200px;
  /* Tamaño deseado para cada imagen */
  margin: 10px;
  /* Espaciado entre imágenes */
  border-radius: 8px;
  padding: 5px;
  border: 1px solid var(--color-border);
  transition: all .1s;
}

.gallery-item:hover {
  border: 1px solid var(--color-text);
}

.gallery-item:active {
  scale: .9
}

.gallery-item img {
  width: 100%;
  height: auto;
}</style>