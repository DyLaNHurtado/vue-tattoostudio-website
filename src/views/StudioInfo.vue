<template>
  <div class="studio-page">
    <section class="hero parallax">
      <div class="hero-content">
        <h1>Estudio de Tatuajes en Leganés</h1>
        <p>Descubre el <span class="highlight">arte del tatuaje</span> en el corazón de Madrid</p>
      </div>
    </section>

    <section class="values">
      <div class="container">
        <h2>Nuestros Valores y Prioridades</h2>
        <div class="values-grid">
          <div class="value-card">
            <img src="/icons/hygiene.svg" alt="Icono de higiene" />
            <h3>Higiene y Seguridad</h3>
            <p>Compromiso inquebrantable con los más altos estándares de limpieza y seguridad.</p>
          </div>
          <div class="value-card">
            <img src="/icons/expertise.svg" alt="Icono de especialización" />
            <h3>Especialización</h3>
            <p>Cada artista domina un estilo único, ofreciendo una amplia gama de posibilidades creativas.</p>
          </div>
          <div class="value-card">
            <img src="/icons/creativity.svg" alt="Icono de creatividad" />
            <h3>Creatividad Sin Límites</h3>
            <p>Transformamos tus ideas en obras de arte únicas y personales.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="studio-space parallax">
      <div class="container">
        <h2>Nuestro Espacio Creativo</h2>
        <p>Un santuario para el <span class="highlight">arte del tatuaje</span> en Leganés</p>
        <div class="image-gallery">
          <img src="/vue.svg" alt="Recepción del estudio Delaitto Tattoo" />
          <img src="/vue.svg" alt="Área de trabajo principal" />
          <img src="/vue.svg" alt="Sala de diseño y consulta" />
        </div>
      </div>
    </section>

    <section class="artists">
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
    </section>

    <section class="process parallax">
      <div class="container">
        <h2>El Proceso Creativo</h2>
        <p>Desde la idea hasta la obra maestra en tu piel</p>
        <div class="process-steps">
          <div class="step" v-for="(step, index) in processSteps" :key="index">
            <div class="step-number">{{ index + 1 }}</div>
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="location">
      <div class="container">
        <h2>Ubicación y Contacto</h2>
        <p>Tu destino para tatuajes de calidad en Leganés, Madrid</p>
        <div class="location-info">
          <div class="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.529489911896!2d-3.7533890000000003!3d40.330598699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4189a7929c6c29%3A0x6940283e1e93409a!2sDelaitto%20Tattoo%20-%20Estudio%20de%20tatuajes!5e0!3m2!1ses!2ses!4v1718094523661!5m2!1ses!2ses"
              width="100%"
              height="450"
              style="border:0;"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div class="contact-info">
            <h3>Delaitto Tattoo</h3>
            <p><strong>Dirección:</strong> Calle Rioja 71 Local 6, 28915 Leganés, Madrid</p>
            <p><strong>Teléfono:</strong> +34 123 456 789</p>
            <p><strong>Email:</strong> info@delaittotattoo.com</p>
            <router-link to="/contact" class="cta-button">
              Reserva tu Cita
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'StudioPage',
  data() {
    return {
      artists: [
        { name: 'María González', specialty: 'Realismo', image: '/vue.svg' },
        { name: 'Carlos Rodríguez', specialty: 'Neo-tradicional', image: '/vue.svg' },
        { name: 'Laura Sánchez', specialty: 'Acuarela', image: '/vue.svg' },
      ],
      processSteps: [
        { title: 'Consulta', description: 'Discutimos tu idea y diseño deseado.' },
        { title: 'Diseño', description: 'Creamos un boceto personalizado para ti.' },
        { title: 'Preparación', description: 'Alistamos todo para tu sesión de tatuaje.' },
        { title: 'Tatuaje', description: 'Realizamos tu tatuaje con precisión y cuidado.' },
        { title: 'Cuidados', description: 'Te proporcionamos instrucciones para el cuidado posterior.' },
      ],
    };
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
  background-color: #1a202c;
  color: #e2e8f0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.parallax {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.hero {
  background-image: url('/vite.svg');
}

.hero-content {
  background-color: rgba(26, 32, 44, 0.7);
  padding: 2rem;
  border-radius: 8px;
}

h1, h2 {
  color: #f56565;
  margin-bottom: 1rem;
}

.highlight {
  color: #f56565;
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
  background-color: #2d3748;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.3s ease;
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
  border-radius: 50%;
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
  background-color: #f56565;
  color: #1a202c;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  font-weight: bold;
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

.cta-button {
  display: inline-block;
  background-color: #f56565;
  color: #1a202c;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  margin-top: 1rem;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #e53e3e;
}

@media (max-width: 768px) {
  .location-info {
    grid-template-columns: 1fr;
  }
}
</style>