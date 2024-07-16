<script setup></script>
<template>
  <div>
    <div class="parallax">
      <h1>Nuestro estudio</h1>
      <p>Descubre <span class="primary-text">quiénes somos</span> y <span class="primary-text">cómo trabajamos.</span></p>
    </div>

    <div class="info-container">
      <div class="img-container">
        <img src="/studio-values.jpg" alt="Nuestros valores y prioridades" />
      </div>
      <h2>Nuestros valores y prioridades</h2>
      <p>
        En Delaitto Tattoo, nos comprometemos con la <span class="primary-text">higiene y la seguridad</span> como principios fundamentales.
      </p>
      <h3><span class="primary-text">Divide y vencerás</span> , cada uno nos especializamos en un estilo de dibujo para ofrecerte un abanico grande de posibilidades</h3>
    </div>

    <div class="parallax">
      <h1>Nuestro espacio</h1>
      <p>Un lugar dedicado al <span class="primary-text">arte del tatuaje</span> y la <span class="primary-text">creatividad</span>.</p>
    </div>

    <div class="info-container">
      <h2>Nuestro templo</h2>
      <p>Descubre nuestro estudio, un espacio inspirador y seguro donde <span class="primary-text">tu visión se convierte en arte.</span></p>
      <div class="three-column-photos">
        <div class="img-container">
          <img src="/studio-space-1.jpg" alt="Espacio del estudio" />
        </div>
        <div class="img-container">
          <img src="/studio-space-2.jpg" alt="Espacio del estudio" />
        </div>
        <div class="img-container">
          <img src="/studio-space-3.jpg" alt="Espacio del estudio" />
        </div>
      </div>
    </div>

    <div class="parallax">
      <h1>El proceso creativo</h1>
      <p>Sumérgete en nuestra <span class="primary-text">pasión</span> por el arte del tatuaje.</p>
    </div>

    <div class="info-container">
      <h2>En plena acción</h2>
      <p>Observa como cobran vida <span class="primary-text">diseños únicos</span> y significativos.</p>
      <div class="three-column-photos">
        <div class="img-container">
          <img src="/artists-1.jpg" alt="Artistas trabajando" />
        </div>
        <div class="img-container">
          <img src="/artists-2.jpg" alt="Artistas trabajando" />
        </div>
        <div class="img-container">
          <img src="/artists-3.jpg" alt="Artistas trabajando" />
        </div>
        <div class="img-container">
          <img src="/artists-4.jpg" alt="Artistas trabajando" />
        </div>
        <div class="img-container">
          <img src="/artists-5.jpg" alt="Artistas trabajando" />
        </div>
        <div class="img-container">
          <img src="/artists-6.jpg" alt="Artistas trabajando" />
        </div>
      </div>
    </div>

    <div class="info-container">
      <h2>Ubicación y Contacto</h2>
      <p>Visítanos en nuestra ubicación en Leganés o contáctanos para agendar una cita.</p>
      <h6><span class="primary-text">Calle Rioja 71 Local 6 - 28915 - Leganés, Madrid</span></h6>
      <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.529489911896!2d-3.7533890000000003!3d40.330598699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4189a7929c6c29%3A0x6940283e1e93409a!2sDelaitto%20Tattoo%20-%20Estudio%20de%20tatuajes!5e0!3m2!1ses!2ses!4v1718094523661!5m2!1ses!2ses" width="80%" height="250" style="border:0;" allowfullscreen loading="lazy" frameborder="0" referrerpolicy="no-referrer-when-downgrade"></iframe>

      <router-link class="link" to="/contact">
        <button class="primary-button"><font-awesome-icon :icon="['fas', 'share']"/>&nbsp;&nbsp;Más información para contactar</button>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.parallax {
  background-image: url("/studio-background.jpg");
  background-size: cover;
  background-position: center;
  text-align: center;
  padding: 100px 0;
  color: var(--color-heading);
}

.parallax h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}



.info-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding: 50px 20px;
  border-top: 3px solid var(--color-border);
}




.img-container {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}

.three-column-photos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 30px;
}

.three-column-photos .img-container {
  margin-bottom: 20px;
}

.three-column-photos img {
  width: 100%;
  max-width: 100%;
  height: auto;
}

.map {
  width: 100%;
  height: 250px;
  margin-top: 20px;
}

.link {
  text-decoration: none;
}

.primary-button {
  background-color: var(--color-primary);
  color: var(--color-text-light-1);
  font-size: 1.2rem;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.primary-button:hover {
  background-color: var(--color-primary-hover);
}
</style>