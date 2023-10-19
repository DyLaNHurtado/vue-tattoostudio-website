<template>
  <div class="gallery" >
    <GallerySorts  @sortBy="sortBy" :sortByOption="sortByOption"/>

    <div>
      <h1>Tatuajes</h1>
    <div v-for="(image, index) in images" :key="index" class="gallery-item">
      <img @click="openLightbox(index)" :src="image.url" alt="Image"  class="lightbox-image"/>
    </div>
    </div>

    <div>
      <h1>Desings / FLASH</h1>
    <div v-for="(image, index) in images" :key="index" class="gallery-item">
      <img @click="openLightbox(index)" :src="image.url" alt="Image"  class="lightbox-image"/>
    </div>
    </div>

    <div>
      <h1>Ilustraciones</h1>
    <div v-for="(image, index) in images" :key="index" class="gallery-item">
      <img @click="openLightbox(index)" :src="image.url" alt="Image"  class="lightbox-image"/>
    </div>
    </div>

    <GalleryBlock c />

    
    <LightBox class="lightbox" :show="lightboxShow" :image="lightboxImage" @close="closeLightbox"  />
  </div>
</template>

<script>

// import { collection, query, onSnapshot } from 'firebase/firestore';
// import { db } from '../firebaseConfig.js';
import GalleryBlock from '../components/GalleryBlock.vue';
import GallerySorts from '../components/GallerySorts.vue';
import LightBox from '../components/LightBox.vue';

const TATUAJES = 'tatuajes';
const DESIGNS = 'designs';
const ILUSTRACIONES = 'ilustraciones';

export default {
  components: {
    LightBox,
    GallerySorts,
    GalleryBlock
},
  data() {
    return {
      images: [
        { url: '/public/vite.svg', category:"", styles:["",""] },
        { url: '/public/vite.svg', category:"", styles:["",""]},
        { url: '/public/vite.svg', category:"", styles:["","","",""] },
      ],
      lightboxShow: false,
      lightboxImage: null,
      escKeyListenerAdded: false,
      sortByOption: '',
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
  }, methods: {
    openLightbox(index) {
      window.addEventListener('keyup', this.closeOnEsc);
      this.lightboxImage = this.images[index].url;
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
    sortBy(option) {
      this.sortByOption = option;
      console.log(option)
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

.gallery-item {
  width: 200px; /* Tamaño deseado para cada imagen */
  margin: 10px; /* Espaciado entre imágenes */
  border-radius: 8px;
  padding: 5px;
  border: 1px solid var( --color-border);
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
}

</style>