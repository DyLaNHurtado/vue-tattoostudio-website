<template>
  <div class="studio-page">
    <section class="hero parallax">
      <div class="hero-content">
        <h1>Tu Estudio de Tatuajes en Leganés</h1>
        <p>Descubre el <span class="highlight">arte del tatuaje</span> en nuestro rincon de Madrid</p>
      </div>
    </section>

    <section class="values">
      <div class="container">
        <h2>Nuestros Valores y Prioridades</h2>
        <div class="values-grid">
          <div class="value-card">
            <div class="icon-valores ">
            <font-awesome-icon :icon="['fas', 'pump-medical']" />
          </div>
            <h3>Higiene y Seguridad</h3>
            <p>Compromiso inquebrantable con los más altos estándares de limpieza y seguridad.</p>
          </div>
          <div class="value-card">
            <div class="icon-valores valores-yellow">
            <font-awesome-icon :icon="['fas', 'pen-ruler']" />
          </div>
            <h3>Especialización</h3>
            <p>Cada artista domina un estilo único, ofreciendo una amplia gama de posibilidades creativas.</p>
          </div>
          <div class="value-card">
            <div class="icon-valores valores-red">
              <font-awesome-icon :icon="['fas', 'dragon']" />
            </div>
            <h3>Creatividad Sin Límites</h3>
            <p>Transformamos tus ideas en obras de arte únicas y personales.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="studio-space parallax">
      <div class="container hero-content">
        <h2>Nuestro Espacio Creativo</h2>
        <p><span class="highlight">Nuestro santuario del arte del tatuaje para ti</span></p>
        <div class="image-gallery">
          <img src="/vue.svg" alt="Recepción del estudio Delaitto Tattoo" />
          <img src="/vue.svg" alt="Área de trabajo principal" />
          <img src="/vue.svg" alt="Sala de diseño y consulta" />
        </div>
      </div>
    </section>

    <!-- <section class="artists">
      <div class="container">
        <h2>Nuestros Artistas</h2>
        <p>Nuestros talentos locales de Leganés</p>
        <div class="artist-cards">
          <div class="artist-card" v-for="artist in artists" :key="artist.name">
            <img :src="artist.image" :alt="artist.name" />
            <h3>{{ artist.name }}</h3>
            <p>{{ artist.specialty }}</p>
          </div>
        </div>
      </div>
    </section> -->

    <section class="artists">
      <div class="container">
        <h2>Nuestros Estilos Favoritos</h2>
        <p>No nos cerramos a ningún estilo y siempre es buena salir de la zona de confort pero nuestros estilos preferidos son:</p>
        <div class="artist-cards">
          <div class="artist-card" v-for="style in tattooStyles" :key="style.name" @click="openPost(style.post)" @mouseenter="style.showTextHover=true" @mouseleave="style.showTextHover=false">
            <img :src="style.image" :alt="style.name" />
            <h3>{{ style.name }}</h3>
              <span :class="{'hide-text':!style.showTextHover, 'show-text':style.showTextHover}" style="transition: all .3s ease;"> 
              <font-awesome-icon :icon="['fas', 'share']" /> &nbsp;
              ¡ Quiero saber más ! </span>
          </div>
        </div>
      </div>
    </section>

    <section class="process parallax">
      <div class="container hero-content">
        <h2>El Proceso Creativo</h2>
        <p>Desde la idea hasta la obra maestra en tu piel</p>
        <div class="process-steps">
          <div class="step" v-for="(step, index) in processSteps" :key="index">
            <div class="step-number">{{ index + 1 }}</div>
            <h3 class="font-bold">{{ step.title }}</h3>
            <p>{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>
    <LocationContact/>
  </div>
</template>

<script>
import LocationContact from '../components/LocationContact.vue';
export default {
  name: 'StudioPage',
  components: {
    LocationContact,
  },
  data() {
    return {
      tattooStyles: [
        { name: 'Blackwork', image: '/blackwork.webp', showTextHover:false, post: 'blackwork-el-poder-del-contraste' },
        { name: 'New school', image: '/newschool.jpg', showTextHover:false, post: 'newschool-el-color-explosivo-en-la-piel'},
        { name: 'Black and grey', image: '/blackandgrey.jpg', showTextHover:false, post: 'blackandgrey-la-magia-del-gris-en-la-piel'},
        { name: 'Japonés', image: '/japones.jpg', showTextHover:false, post:'japones-un-mundo-de-misticismo-y-belleza' },
      ],
      processSteps: [
        { title: 'Consulta', description: 'Discutimos tu idea y diseño deseado.' },
        { title: 'Diseño', description: 'Dejas una señal que se descuenta del precio final y creamos un boceto personalizado para ti.' },
        { title: 'Preparación', description: 'Fijamos una cita y preparamos todo para tu sesión de tatuaje.' },
        { title: 'Tatuaje', description: 'Realizamos tu tatuaje con precisión y cuidado.' },
        { title: 'Cuidados', description: 'Te proporcionamos instrucciones para el cuidado posterior.' },
      ],
    };
  },methods: {
    openPost(postId) {
      //hacer que se abra en otra pestaña
      // this.$router.push({ name: 'blog-post', params: { id: postId } });
      // o abrirlo en una nueva pestaña
      window.open(`/blog/${postId}`, '_blank');
    },
  },
  metaInfo() {
    return {
      title: 'Estudio de Tatuajes en Leganés | Delaitto Tattoo',
      meta: [
        { name: 'description', content: 'Descubre Delaitto Tattoo, el mejor estudio de tatuajes en Leganés, Madrid. Artistas especializados, diseños únicos y el más alto estándar en higiene y seguridad.' },
        { name: 'keywords', content: 'tatuajes Leganés, estudio de tatuajes Madrid, Delaitto Tattoo, tatuadores profesionales, tatuajes personalizados' },
      ],
    };
  },
};
</script>

<style scoped>
.studio-page {
  background-color: transparent;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.parallax {
  background-image: url("/studio.webp");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: inset 0 0 79px 70px rgba(0, 0, 0, 0.5);
  backdrop-filter: brightness(60%);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.hero {
  background-image: url('/blog.jpg');
  backdrop-filter: brightness(60%);;
}

.hero-content {
  background-color: rgba(26, 32, 44, 0.7);
  padding: 2rem;
  border-radius: 8px;
}

h1, h2 {
  font-weight: bold;
  margin-bottom: 1rem;
}


.highlight {
  font-weight: bold;
}

section {
  padding: 4rem 0;
}

.values-grid, .image-gallery, .artist-cards, .process-steps {
  display: grid;
  gap: 2rem;
  margin-top: 2rem;
}

.values-grid {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.value-card, .artist-card {
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  background-color: transparent;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.artist-card{
  cursor: pointer;
}

.value-card:hover, .artist-card:hover{
  background-color: var(--color-background-mute);

}

.value-card h3, .artist-card h3 {
  color: var(--color-heading);
  font-weight: bold;
}

.value-card:hover, .artist-card:hover {
  transform: translateY(-5px);
}

.image-gallery {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.image-gallery img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
}

.artist-cards {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.artist-card img {
  width: 150px;
  height: 150px;
  border-radius: 99999px;
  margin-bottom: 1rem;
}

.process-steps {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.step {
  text-align: center;
  position: relative;
}

.step-number {
  background-color: var(--color-primary);
  color: var(--color-heading);
  width: 40px;
  height: 40px;
  border-radius: 99999px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  font-weight: bold;
}

.hide-text{
  opacity: 0;
}

.show-text{
  opacity: 1;
}

.location-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 2rem;
}

.map-container {
  border-radius: 8px;
  overflow: hidden;
}

.contact-info {
  background-color: #2d3748;
  padding: 2rem;
  border-radius: 8px;
}

.back-button {
  text-decoration: none;
  font-weight: bold;
  margin-top: 1rem;
  transition: all 0.3s ease;
}

.icon-valores{
  height: 100px;
  width: 100px;
  margin-bottom: 20px;
  border-radius: 8px;
  font-size: 3.5em;
  background-color: var(--color-primary-dark);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--c-white);
  
}

.valores-red{
  background-color: var(--color-text-error);
}
.valores-yellow{
  background-color: var(--color-secondary);
}

@media (max-width: 768px) {
  .location-info {
    grid-template-columns: 1fr;
  }
}
</style>