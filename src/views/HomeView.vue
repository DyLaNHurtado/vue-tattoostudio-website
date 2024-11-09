<template>
  <div class="home">
    <!-- Header Section -->

    <div class="hero">
        <img class="logo" src="/delaitto.png" loading="lazy" />
        <p class="lema">El rincón donde el arte se fusiona con tu cuerpo</p>

        <div>
          <router-link to="/contact"><button class="fill-btn">¡ Quiero tatuarme !</button></router-link>
      </div>
    </div>

    <!-- About Us Section -->
    <div class="about-us">
      <h2>Sobre Nosotros</h2>
      <p>Somos un estudio de tatuajes ubicado en <span class="primary-text">Leganés</span>, comprometidos con la calidad, la creatividad y la satisfacción de nuestros clientes. Nuestros artistas tienen años de experiencia en crear <span class="primary-text">diseños personalizados</span> que reflejan la individualidad de <span class="primary-text">cada persona</span>.</p>
      <router-link to="/studio" class="cta-button">
        <button class="transparent-button">Descubre más aquí</button>
      </router-link>
    </div>
    
    <!-- Gallery Section -->
    <div class="last-tattoos" v-if="images!=null && images.length > 0">
      <h2>Nuestros trabajos:</h2>
        <GalleryList :images="images" />
      <router-link to="/gallery" class="cta-button">
        <button class="transparent-button">Ver Más</button>
      </router-link>
    </div>

    <!-- Blog Section -->
    <div class="blog" v-if="lastestPost!=null && lastestPost.length > 0">
      <h2>Artículos Recientes</h2>
      <div class="blog-posts">
        <transition-group name="list" tag="div" class="blog-list">
            <BlogList :filteredPosts="lastestPost" />
        </transition-group>
    </div>
    <router-link to="/blog" class="cta-button">
      <button class="transparent-button">Ver Más Artículos</button>
    </router-link>
</div>
    <!-- Contact Us Section -->
     <LocationContact/>
  </div>
</template>

<script>
import Socials from '../components/Socials.vue';
import Newsletter from '../components/Newsletter.vue';
import LocationContact from '../components/LocationContact.vue'
import BlogList from '../components/BlogList.vue'
import GalleryList from '../components/GalleryList.vue'

import {getLatestPosts} from '../blog/posts'

export default {
  components: {
    Socials,
    Newsletter,
    LocationContact,
    BlogList,
    GalleryList,
  },data(){
    return {
      lastestPost: [],
      images: [],
    }
  },methods :{
},
  async mounted() {
      this.lastestPost = await getLatestPosts();
      console.log(this.lastestPost);
      this.images = [
      { id: 1, url: '/vue.svg', alt: 'Tattoo 1' },
        { id: 2, url: '/placeholder.svg?height=400&width=400&text=Tattoo+2', alt: 'Tattoo 2' },
        { id: 3, url: '/placeholder.svg?height=400&width=400&text=Tattoo+3', alt: 'Tattoo 3' },
        { id: 4, url: '/placeholder.svg?height=400&width=400&text=Tattoo+4', alt: 'Tattoo 4' },

  ]
      
    }
};
</script>

<style scoped>
/* Estilos generales */
.home {
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
}

.hero{
  height: 95vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 40px;
}

/* Estilos de la sección Header */
.header {
  position: relative;
  height: 55vh;
  width: 100%;
  overflow: hidden;
}

.header-content {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 25px;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: var(--c-white);
  background: rgba(0, 0, 0, 0.6);
  padding: 20px;
  min-height: 100%;
  min-width: 100%;
  border: 8px solid var(--color-border);
}

/* Estilos de la sección Sobre Nosotros */
.about-us {
 text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.about-us p {
  margin-bottom: 20px;
  padding: 20px;
}

/* Estilos de la sección Últimos Trabajos */
.last-tattoos {
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px;
}

/* Estilos de la sección Blog */
.blog {
  text-align: center;
  gap: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.blog-posts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; /* Asegurar que el overlay ocupe toda la altura */
  background: rgba(0, 0, 0, 0.6);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* Asegurar que el contenido esté al final del overlay */
  text-align: left;
  border-radius: 8px; /* Ajuste del borde del overlay */
}

.overlay h3 {
  font-size: 18px;
  font-weight: bold;
  color: var(--color-heading);
}

.overlay p {
  font-size: 14px;
  margin-bottom: 10px;
}

/* Estilos de la sección Contacta con Nosotros */
.contact-us {
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
}

.contact-us .map {
  margin-top: 20px;
  border-radius: 8px;
}


.primary-button {
  background-color: var(--color-primary);
  color: var(--c-white);
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s;
}

.primary-button:hover {
  background-color: var(--color-primary-hover);
}

.icon {
  font-size: 3.5em;
}

.green {
  color: #aae68e;
}

.lema{
  font-size: 1.5em;
  text-align: center;
  color: var(--color-text);
  margin-bottom: 20px;
}
.logo{
  width:100%;
  max-width: 1100px;
  filter: drop-shadow(.5px .5px 2px #e64545);
  -webkit-filter: drop-shadow(.5px 2px 3px #e64545);

}
h2{
  margin-bottom: 20px;
  font-weight: bold;
}
</style>