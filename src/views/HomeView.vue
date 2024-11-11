<template>
  <div class="home">
    <!-- Hero Section -->
    <div class="hero">
      <img class="logo" src="/delaitto.png" loading="lazy" />
      <p class="lema">El rincón donde el arte se fusiona con tu cuerpo</p>
      <div>
        <router-link to="/contact"><button class="fill-btn">¡ Quiero tatuarme !</button></router-link>
      </div>
    </div>
    
    <!-- Gallery Section -->
    <div class="last-tattoos" v-if="images!=null && images.length > 0">
      <h2>Trabajos Destacados:</h2>
      <GalleryList :images="images" />
      <router-link to="/gallery" class="cta">
        <button class="transparent-button">Ver Más</button>
      </router-link>
    </div>

        <!-- About Us Section -->
    <div class="about-us">
      <h2>Sobre Nosotros</h2>

      <p>Somos un estudio de tatuajes ubicado en <span class="highlight">Leganés</span>, comprometidos con la calidad, la creatividad y la satisfacción de nuestros clientes. Tenemos experiencia en crear <span class="highlight">diseños personalizados</span> que reflejan la individualidad de <span class="highlight">cada persona</span>.</p>
        <!-- Video de persona tatuando sin sonido ni controles-->
        <video muted autoplay loop>
          <source src="/tatuando.mp4" type="video/mp4">
        </video>
      <router-link to="/studio" class="cta">
        <button class="transparent-button">Descubre más aquí</button>
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
      <router-link to="/blog" class="cta">
        <button class="transparent-button">Ver Más Artículos</button>
      </router-link>
    </div>

    <!-- AfterCare Section -->
    <AfterCare />

    <!-- Contact Us Section -->
    <LocationContact/>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
/*     Socials: () => import('../components/Socials.vue'),
    Newsletter: () => import('../components/Newsletter.vue'), */
    LocationContact:  import('../components/LocationContact.vue'),
    BlogList:  import('../components/BlogList.vue'),
    GalleryList:  import('../components/GalleryList.vue'),
    AfterCare:  import('../components/AfterCare.vue'),
  },
  data() {
    return {
      lastestPost: [],
      images: [],
    };
  },
  async mounted() {
    const { getLatestPosts } = await import('../blog/posts');
    this.lastestPost = await getLatestPosts();
    this.images = [
      { id: 1, url: '/hada.jpg', alt: 'Tattoo hada colores' },
      { id: 2, url: '/tiburon.jpg', alt: 'Tatuaje tiburon rojo black and grey' },
      { id: 3, url: '/yokai.jpg', alt: 'Yokai tatuaje japones kanji tattoo letras japonesas chinas' },
      { id: 4, url: '/pajaroloco.webp', alt: 'Yokai tatuaje japones kanji tattoo letras japonesas chinas' },
      { id: 5, url: '/flor-craneo.jpg', alt: 'Flor de craneo diseño tatuaje color hojas new school' },
      { id: 6, url: '/seta.jpg', alt: 'Seta newschool tatuaje tattoo color azul scketch' },
    ];
  },
};
</script>

<style scoped>
/* Estilos generales */
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 100%;
}

.hero {
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

/* Estilos de la sección Sobre Nosotros */
.about-us {
  text-align: start;
  max-width: 1200px;
  width: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 40px 20px;
  gap: 20px;
}

.about-us p {
  margin-bottom: 20px;
  padding: 20px;
}

/* Estilos de la sección Últimos Trabajos */
.last-tattoos {
  text-align: center;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 40px 20px;
  gap: 20px;
}

/* Estilos de la sección Blog */
.blog {
  text-align: center;
  gap: 15px;
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 40px 20px;
}

.blog-posts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.cta {
  align-self: center;
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

.lema {
  font-size: 1.5em;
  text-align: center;
  color: var(--color-text);
  margin-bottom: 20px;
}

.logo {
  width: 100%;
  max-width: 1100px;
  filter: drop-shadow(.5px .5px 2px #e64545);
  -webkit-filter: drop-shadow(.5px 2px 3px #e64545);
}

h2 {
  margin-bottom: 20px;
  font-weight: bold;
  color: var(--color-heading);
}

video{
  height: 400px;
  object-fit: cover;
  border-radius: 8px;
  width: 100%;
  max-width: 1000px;
  align-self: center;
}
</style>