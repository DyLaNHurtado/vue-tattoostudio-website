<template>
  <div class="home">
    <!-- Header Section -->
    <div class="header">
      <video autoplay muted loop id="myVideo">
        <source src="https://video.wixstatic.com/video/2b20fa_bcdb4298d7d44067baf30118eb8cfd83/720p/mp4/file.mp4" type="video/mp4">
      </video>
      <div class="header-content">
        <img src="/vite.svg" alt="Logo del estudio">
        <h1>Estudio de Tatuajes en Leganés</h1>
        <h4>Artistas especializados en tatuajes personalizados y únicos.</h4>
        <router-link to="/contact"><button class="primary-button">¡Quiero tatuarme!</button></router-link>
        <div class="socials">
          <Socials size="2xl"/>
        </div>
      </div>
    </div>

    <!-- About Us Section -->
    <div class="about-us">
      <h2>Sobre Nosotros</h2>
      <p>Somos un estudio de tatuajes ubicado en <span class="primary-text">Leganés</span>, comprometidos con la calidad, la creatividad y la satisfacción de nuestros clientes. Nuestros artistas tienen años de experiencia en crear <span class="primary-text">diseños personalizados</span> que reflejan la individualidad de <span class="primary-text">cada persona</span>.</p>
      <router-link to="/about" class="cta-button">
        <button class="transparent-button">Descubre mas aqui</button>
      </router-link>
    </div>

    <!-- Last Tattoos Section -->
    <div class="last-tattoos">
      <h2>Últimos Trabajos</h2>
      <div class="tattoo-carousel">
        <img src="/tattoo1.jpg" alt="Tatuaje 1">
        <img src="/tattoo2.jpg" alt="Tatuaje 2">
        <img src="/tattoo3.jpg" alt="Tatuaje 3">
        <!-- Añadir más imágenes según sea necesario -->
      </div>
      <router-link to="/gallery" class="cta-button">
        <button class="transparent-button">Ver Más</button></router-link>
    </div>

    <!-- Blog Section -->
    <div class="blog">
      <h2>Artículos Recientes</h2>
      <div class="blog-posts">
        <!-- Artículo 1 -->
        <router-link to="/blog/consejos-cuidado-tatuaje" class="blog-post">
          <img src="/vue.svg" alt="Imagen de Blog 1"/>
          <div class="overlay">
            <h3>Consejos para cuidar tu nuevo tatuaje</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus neque a felis varius, vitae pulvinar justo tempus.</p>
          </div>
        </router-link>
        <!-- Artículo 2 -->
        <router-link to="/blog/tendencias-tatuajes-2024" class="blog-post">
          <img src="/vue.svg" alt="Imagen de Blog 2">
          <div class="overlay">
            <h3>Tendencias de tatuajes para este año</h3>
            <p>Nulla facilisi. Duis interdum auctor tortor, eu condimentum risus tincidunt id.</p>
          </div>
        </router-link>
        <!-- Artículo 3 -->
        <router-link to="/blog/mejores-estilos-tatuajes" class="blog-post">
          <img src="/vite.svg" alt="Imagen de Blog 3">
          <div class="overlay">
            <h3>Los mejores estilos de tatuajes según tu personalidad</h3>
            <p>Vivamus fermentum, risus sed rhoncus hendrerit, quam sapien iaculis magna, non finibus nulla sapien eget libero.</p>
          </div>
        </router-link>
      </div>
      <router-link to="/gallery" class="cta-button">
        <button class="transparent-button">Ver todos los articulos</button></router-link>
    </div>

    <!-- Social Media Integration -->
    <div class="social-media">
      <h2>Síguenos en Redes Sociales</h2>
      <div class="socials-icons">
        <Socials size="2xl" style="width: 100px;" />
      </div>

      <div class="social-feed">
        <!-- SnapWidget -->
        <iframe src="https://snapwidget.com/embed/1072829" class="snapwidget-widget" allowtransparency="true" frameborder="0" scrolling="no" style="border:none; overflow:hidden; width:100%;" title="Posts from Instagram"></iframe>
      </div>
    </div>

    <!-- Newsletter Section -->
    <div class="newsletter" v-if="!sentNewsletter">
      <h2>¿Quieres estar al tanto de nuestras novedades?</h2>
      <p>Suscríbete para recibir <span class="primary-text">ofertas</span> y novedades <span class="primary-text">exclusivas</span> directamente en tu correo.</p>
      <form>
        <input type="email" placeholder="Tu correo electrónico" required>
        <button class="primary-button" type="submit" @click="suscribeNewsletter">Suscribir</button>
      </form>
    </div>
    <div class="important-note" v-else>
      <font-awesome-icon :icon="['fas', 'circle-check']" class="icon green" />
      <h2>✨ <span class="primary-text">Gracias!</span> Ahora estas al tanto de todo! ✨</h2>
      <p>Estate atento al correo, ofertas, noticias exclusivas y más, serás el primero en enterarte!</p>
    </div>

    <!-- Contact Us Section -->
    <div class="contact-us">
      <h2>Contacta con Nosotros</h2>
      <p>¿Tienes alguna <span class="primary-text">pregunta</span> o deseas reservar una consulta? ¡Estamos aquí para <span class="primary-text"> ayudarte</span>!</p>
      <router-link to="/contact" ><button class="primary-button">Contactar</button></router-link>
      <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.529489911896!2d-3.7533890000000003!3d40.330598699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4189a7929c6c29%3A0x6940283e1e93409a!2sDelaitto%20Tattoo%20-%20Estudio%20de%20tatuajes!5e0!3m2!1ses!2ses!4v1718094523661!5m2!1ses!2ses" width="100%" height="250" style="border:0;" allowfullscreen loading="lazy" frameborder="0" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
</template>

<script>
import Socials from '../components/Socials.vue';

export default {
  components:{
    Socials,
  },
  data() {
    return {
      sentNewsletter: false,
    };
  },
  methods: {
    suscribeNewsletter(){
      this.sentNewsletter = true;
      //Añadir a la lista para los correos masivos
    }
  }
}
</script>

<style scoped>
/* General Styles */
.home {
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  padding: 20px;
}

/* Header Section */
.header {
  position: relative;
  height: 55vh;
  width: 100%;
  overflow: hidden;
}

#myVideo {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: -1;
}

.header-content {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 25px;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: var(--color-text);
  background: rgba(0, 0, 0, 0.6);
  padding: 20px;
  min-height: 100%;
  min-width: 100%;
  border: 8px solid var(--color-border);
}

/* About Us Section */
.about-us {
  padding: 20px;
  text-align: center;
  border-left: 8px solid var(--color-primary);
}

.about-us p {
  margin-bottom: 20px;
}

/* Tattoo Gallery */
.last-tattoos {
  text-align: center;
}

.tattoo-carousel {
  display: flex;
  justify-content: center;
  gap: 20px;
  overflow-x: auto;
  padding: 20px 0;
}

.tattoo-carousel img {
  width: 200px;
  height: 200px;
  border-radius: 8px;
  border: 2px solid var(--color-border);
}

.blog {
  text-align: center;
  gap: 15px;
  display: flex;
  flex-direction: column;
}

.blog-posts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.blog-post {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  text-decoration: none;
  color: var(--color-text);
  min-width: 100%;
  min-height: 100%;
  border: 1px solid var(--color-border);
  transition: transform 0.3s ease; /* Para el efecto de hover */
}

.blog-post:hover {
  transform: scale(1.05); /* Efecto de hover */
  border-color: var(--color-primary);
}

.blog-post img {
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
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

/* Social Media Integration */
.social-media {
  padding: 20px;
  text-align: center;
  gap: 10px;
}

.socials-icons {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
}

.social-media h2 {
  margin-bottom: 20px;
}

.social-feed {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}


/* Newsletter Section */
.newsletter {
  background: var(--color-background-soft);
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-left: 3px solid var(--color-primary);
  padding: 25px;
  margin: 25px 0;
  width: 100%;
  background-color: var(--color-background-mute);
}

h2 {
  margin-bottom: 15px;
  color: var(--color-heading);
}

h1 {
  color: var(--color-heading);
}

.newsletter form {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.newsletter input[type="email"] {
  width: 300px;
  padding: 10px;
  font-size: 16px;
  border: 2px solid var(--color-border);
  border-radius: 8px;
}

/* Contact Us Section */
.contact-us {
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.contact-us .map {
  margin-top: 20px;
  border-radius: 8px;
}

/* Button Styles */
.transparent-button {
  background-color: transparent;
  cursor: pointer;
  font-size: 16px;
  padding: 10px 20px;
  border: 2px solid var(--color-border);
  color: var(--color-text);
  transition: all 0.3s;
  border-radius: 8px;
}

.transparent-button:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
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

.snapwidget-widget {
  height: 60vw;
}

.icon {
  font-size: 3.5em;
}

.green {
  color: #aae68e;
}
</style>
