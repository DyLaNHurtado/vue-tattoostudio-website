<template>
  <div class="gallery">
    <div v-for="(image, index) in images" :key="index" class="gallery-item">
      <img @click="openLightbox(index)" :src="image.url" alt="Image"  class="lightbox-image"/>
    </div>
    
    <LightBox class="lightbox" :show="lightboxShow" :image="lightboxImage" @close="closeLightbox" />
  </div>
</template>

<script>

// import { collection, query, onSnapshot } from 'firebase/firestore';
// import { db } from '../firebaseConfig.js';
import LightBox from '../components/LightBox.vue';

export default {
  components: {
    LightBox
  },
  data() {
    return {
      images: [
        { url: '/public/vite.svg' },
        { url: '/public/vite.svg' },
        { url: '/public/vite.svg' },
        // Agrega más imágenes según necesites
      ],
      lightboxShow: false,
      lightboxImage: null
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
      this.lightboxImage = this.images[index].url;
      this.lightboxShow = true;
    },
    closeLightbox() {
      this.lightboxShow = false;
      this.lightboxImage = null;
    }
  }
};
</script>

<style scoped>
.gallery {
  display: flex;
  flex-wrap: wrap;
}

.gallery-item {
  width: 200px; /* Tamaño deseado para cada imagen */
  margin: 10px; /* Espaciado entre imágenes */
}

.gallery-item img {
  width: 100%;
  height: auto;
}

</style>