<template>
  <div class="studio-page">
    <section class="hero parallax">
      <div class="hero-content">
        <h1>Tu Estudio de Tatuajes en Leganés</h1>
        <p>Descubre el <span class="highlight">arte del tatuaje</span> en nuestro rincon de Madrid</p>
      </div>
    </section>

    <section class="values">
      <p>
        <span class="highlight">Delaitto Tattoo</span> es un estudio de tatuajes en
        Leganés especializado en <span class="highlight">diseños personalizados</span>
        que cuentan <span class="highlight">historias únicas</span>. Su equipo de artistas
        combina <span class="highlight">creatividad</span>, <span class="highlight">técnica</span> y <span class="highlight">pasión</span> para crear
        tatuajes que reflejan la <span class="highlight">individualidad</span> de cada
        cliente. Con un enfoque en la <span class="highlight">calidad</span> y el <span class="highlight">detalle</span>,
        Delaitto Tattoo se ha convertido en un <span class="highlight">referente</span>
        para quienes buscan <span class="highlight">obras de arte permanentes</span> y
        significativas. El estudio ofrece un <span class="highlight">ambiente acogedor</span> y
        profesional, donde el cliente es parte esencial del
        proceso creativo. Cada diseño es concebido para
        armonizar con la <span class="highlight">personalidad</span> y el <span class="highlight">estilo de vida</span> del
        usuario, garantizando una <span class="highlight">experiencia única</span>, <span class="highlight">segura</span>
        y <span class="highlight">satisfactoria</span>.
      </p>
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
          <img src="/entrada_sofa.webp" alt="Recepción del estudio Delaitto Tattoo" loading="lazy" />
          <img src="/entrada_pasillo.webp" alt="Vista al pasillo y mural de galeria de arte" loading="lazy" />
          <img src="/sala_tattoo_inicio3.webp" alt="Área de trabajo principal" loading="lazy" />
        </div>
      </div>
    </section>

    <!-- <section class="artists">
      <div class="container">
        <h2>Nuestros Artistas</h2>
        <p>Nuestros talentos locales de Leganés</p>
        <div class="artist-cards">
          <div class="artist-card" v-for="artist in artists" :key="artist.name">
            <img :src="artist.image" :alt="artist.name" loading="lazy"/>
            <h3>{{ artist.name }}</h3>
            <p>{{ artist.specialty }}</p>
          </div>
        </div>
      </div>
    </section> -->

    <section class="artists">
      <div class="container">
        <h2>Nuestros Estilos Favoritos</h2>
        <p>No nos cerramos a ningún estilo y siempre es buena salir de la zona de confort pero nuestros estilos
          preferidos son:</p>
        <div class="artist-cards">
          <div class="artist-card" v-for="style in tattooStyles" :key="style.name" @click="openPost(style.post)"
            @mouseenter="style.showTextHover=true" @mouseleave="style.showTextHover=false">
            <img :src="style.image" :alt="style.name" loading="lazy" />
            <h3>{{ style.name }}</h3>
            <span :class="{'hide-text':!style.showTextHover, 'show-text':style.showTextHover}"
              style="transition: all .3s ease;">
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
    <LocationContact />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import { useHead } from '@vueuse/head';
export default {
  name: 'StudioPage',
  components: {
    LocationContact: defineAsyncComponent(() => import('../components/common/LocationContact.vue')),
  },
  setup() {
    useHead({
      title: 'Nuestro Estudio de Tatuajes en Leganés | Delaitto Tattoo',
      meta: [
        { name: 'description', content: 'Conoce nuestro estudio de tatuajes en Leganés, Madrid. Ambiente acogedor, artistas especializados y los más altos estándares de higiene y seguridad.' },
        { name: 'keywords', content: 'estudio de tatuajes Leganés, tatuadores Madrid, Delaitto Tattoo estudio, higiene tatuajes, estilos de tatuaje' },
        { property: 'og:title', content: 'Estudio de Tatuajes Delaitto en Leganés' },
        { property: 'og:description', content: 'Visita nuestro estudio en Leganés y descubre un espacio diseñado para crear arte en tu piel.' },
        { property: 'og:image', content: 'https://delaittotattoo.es/sala_tattoo_inicio3.webp' },
        { property: 'og:url', content: 'https://delaittotattoo.es/studio' },
        { property: 'og:type', content: 'website' },
      ],
      link: [
        { rel: 'canonical', href: 'https://delaittotattoo.es/studio' },
      ],
    });

    return {
    };
  },
  data() {
    return {
      tattooStyles: [
        { name: 'Blackwork', image: '/blackwork.webp', showTextHover:false, post: 'blackwork-el-poder-del-contraste' },
        { name: 'New school', image: '/newschool.webp', showTextHover:false, post: 'newschool-el-color-explosivo-en-la-piel'},
        { name: 'Black and grey', image: '/blackandgrey.webp', showTextHover:false, post: 'blackandgrey-la-magia-del-gris-en-la-piel'},
        { name: 'Japonés', image: '/japones.webp', showTextHover:false, post:'japones-un-mundo-de-misticismo-y-belleza' },
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
  margin-top: 20px;
  padding: 0 20px;
}

.parallax {
  background-image: url("/studio-parallax.webp");
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
  background-image: url('/studio.webp');
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
  color: var(--color-heading);
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
  place-content: center;
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