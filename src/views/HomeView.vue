<template>
  <div class="home">
    <!-- Header Section -->
    <div class="header">
      <video autoplay muted loop id="myVideo">
        <source src="https://video.wixstatic.com/video/2b20fa_bcdb4298d7d44067baf30118eb8cfd83/720p/mp4/file.mp4" type="video/mp4">
      </video>
      <div class="header-content">
        <img src="public/vite.svg" alt="Logo del estudio">
        <h1>Estudio de Tatuajes en Leganés</h1>
        <h5>Artistas especializados en tatuajes personalizados y únicos.</h5>
        <router-link to="/contact" class="primary-button">Contactar</router-link>
      </div>
    </div>

    <!-- About Us Section -->
    <div class="about-us">
      <h2>Sobre Nosotros</h2>
      <p>Somos un estudio de tatuajes ubicado en Leganés, comprometidos con la calidad, la creatividad y la satisfacción de nuestros clientes. Nuestros artistas tienen años de experiencia en crear diseños personalizados que reflejan la individualidad de cada persona.</p>
      <router-link to="/about" class="cta-button">
        <button class="transparent-button">Más sobre nosotros</button>
      </router-link>
    </div>

    <!-- Last Tattoos Section -->
    <div class="last-tattoos">
      <h2>Últimos Trabajos</h2>
      <div class="tattoo-carousel">
        <img src="public/tattoo1.jpg" alt="Tatuaje 1">
        <img src="public/tattoo2.jpg" alt="Tatuaje 2">
        <img src="public/tattoo3.jpg" alt="Tatuaje 3">
        <!-- Añadir más imágenes según sea necesario -->
      </div>
      <router-link to="/gallery" class="cta-button">
        <button class="transparent-button">Ver Más</button>
      </router-link>
    </div>

    <!-- Blog Section -->
    <div class="blog">
      <h2>Artículos Recientes</h2>
      <div class="blog-posts">
        <!-- Artículo 1 -->
        <div class="blog-post">
          <img src="public/blog1.jpg" alt="Imagen de Blog 1">
          <h3>Consejos para cuidar tu nuevo tatuaje</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus neque a felis varius, vitae pulvinar justo tempus.</p>
          <router-link to="/blog/consejos-cuidado-tatuaje" class="cta-button">
            <button class="transparent-button">Leer Más</button>
          </router-link>
        </div>
        <!-- Artículo 2 -->
        <div class="blog-post">
          <img src="public/blog2.jpg" alt="Imagen de Blog 2">
          <h3>Tendencias de tatuajes para este año</h3>
          <p>Nulla facilisi. Duis interdum auctor tortor, eu condimentum risus tincidunt id.</p>
          <router-link to="/blog/tendencias-tatuajes-2024" class="cta-button">
            <button class="transparent-button">Leer Más</button>
          </router-link>
        </div>
        <!-- Artículo 3 -->
        <div class="blog-post">
          <img src="public/blog3.jpg" alt="Imagen de Blog 3">
          <h3>Los mejores estilos de tatuajes según tu personalidad</h3>
          <p>Vivamus fermentum, risus sed rhoncus hendrerit, quam sapien iaculis magna, non finibus nulla sapien eget libero.</p>
          <router-link to="/blog/mejores-estilos-tatuajes" class="cta-button">
            <button class="transparent-button">Leer Más</button>
          </router-link>
        </div>
        <!-- Artículo 4 -->
        <div class="blog-post">
          <img src="public/blog4.jpg" alt="Imagen de Blog 4">
          <h3>Historias detrás de nuestros tatuajes más desafiantes</h3>
          <p>Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
          <router-link to="/blog/historias-tatuajes" class="cta-button">
            <button class="transparent-button">Leer Más</button>
          </router-link>
        </div>
      </div>
    </div>

    <!-- Social Media Integration -->
    <div class="social-media">
      <h2>Síguenos en Redes Sociales</h2>
      <div class="social-feed">
        <!-- SnapWidget -->
      <iframe src="https://snapwidget.com/embed/1072829" class="snapwidget-widget" allowtransparency="true" frameborder="0" scrolling="no" style="border:none; overflow:hidden;  width:100%; " title="Posts from Instagram"></iframe>
      </div>
    </div>

    <!-- Newsletter Section -->
    <div class="newsletter">
      <h2>¿Quieres estar al tanto de nuestras novedades?</h2>
      <p>Suscríbete para recibir ofertas exclusivas y actualizaciones directamente en tu correo.</p>
      <form>
        <input type="email" placeholder="Tu correo electrónico" required>
        <button class="primary-button" type="submit">Suscribir</button>
      </form>
    </div>

    <!-- Contact Us Section -->
    <div class="contact-us">
      <h2>Contacta con Nosotros</h2>
      <p>¿Tienes alguna pregunta o deseas reservar una consulta? ¡Estamos aquí para ayudarte!</p>
      <router-link to="/contact" class="primary-button">Contactar</router-link>
      <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.529489911896!2d-3.7533890000000003!3d40.330598699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4189a7929c6c29%3A0x6940283e1e93409a!2sDelaitto%20Tattoo%20-%20Estudio%20de%20tatuajes!5e0!3m2!1ses!2ses!4v1718094523661!5m2!1ses!2ses" width="100%" height="250" style="border:0;" allowfullscreen loading="lazy" frameborder="0" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
</template>

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
}

/* About Us Section */
.about-us {
  background: var(--color-background-soft);
  padding: 20px;
  border-radius: 8px;
  text-align: center;
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

/* Blog Section */
.blog {
  background: var(--color-background-soft);
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}

.blog h2 {
  margin-bottom: 20px;
}

.blog-posts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.blog-post {
  background: var(--color-background-soft);
  padding: 20px;
  border-radius: 8px;
  text-align: left;
}

.blog-post h3 {
  margin-bottom: 10px;
}

.blog-post p {
  margin-bottom: 10px;
}

/* Social Media Integration */
.social-media {
  background: var(--color-background-soft);
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}

.social-media h2 {
  margin-bottom: 20px;
}

.social-feed {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.social-post {
  background: var(--color-background-soft);
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}

.social-post img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
}

/* Newsletter Section */
.newsletter {
  background: var(--color-background-soft);
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}

.newsletter h2 {
  margin-bottom: 20px;
}

.newsletter form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
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
  background: var(--color-background-soft);
  padding: 20px;
  border-radius: 8px;
  text-align: center;
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
</style>