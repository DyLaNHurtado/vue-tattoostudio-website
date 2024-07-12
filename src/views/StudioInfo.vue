<script setup></script>
<template>
  <div class="parallax">
    <h1>Nuestro estudio</h1>
    <p>Conoce un poco mas sobre nosostros</p>
  </div>
  <div class="info-container">
    <div class="img-container">
      <img src="/vite.svg" alt="" />
    </div>
    <h2>Nuestros valores y prioridades</h2>
    <p>En Delaitto Tattoo, la higiene y la seguridad son nuestra máxima prioridad. Nos especializamos en estilos como Japonés, Neodark y Blackwork, ofreciendo también diseños personalizados, retoques y cover-ups.</p>
  </div>
  <div class="parallax">
    <h1>Lorem, ipsum dolor.</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, unde.</p>
  </div>
  <div class="info-container">
    <div class="img-container">
      <img src="" alt="" />
    </div>
    <h2>Nuestros valores y prioridades</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, ad! Laboriosam alias fugit itaque voluptates officiis
      ipsa velit praesentium quos!</p>
  </div>
  <div class="info-container">
    <h1>Nuestro templo</h1>
    <p>Un espacio dedicado al arte del tatuaje.</p>
    <div class="three-column-photos">
      <div class="img-container">
        <img src="/vite.svg" alt="" />
      </div>
      <div class="img-container">
        <img src="/vite.svg" alt="" />
      </div>
      <div class="img-container">
        <img src="/vite.svg" alt="" />
      </div>
    </div>
  </div>
  <div class="parallax">
    <h1>Lorem, ipsum dolor.</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, unde.</p>
  </div>
  <div class="info-container">
    <h1>En plena acción</h1>
    <p>Observa a los artistas haciendo lo que mas les apasiona.</p>
    <div class="three-column-photos">
      <div class="img-container">
        <img src="/vite.svg" alt="" />
      </div>
      <div class="img-container">
        <img src="/vite.svg" alt="" />
      </div>
      <div class="img-container">
        <img src="/vite.svg" alt="" />
      </div>
      <div class="img-container">
        <img src="/vite.svg" alt="" />
      </div>
      <div class="img-container">
        <img src="/vite.svg" alt="" />
      </div>
      <div class="img-container">
        <img src="/vite.svg" alt="" />
      </div>
    </div>
  </div>
  <div class="info-container">
    <h2>Ubicación y Contacto</h2>
    <p>Visítanos en nuestra ubicación en Leganés o contáctanos para agendar una cita.</p>
    <p>Calle Rioja 71 Local 6 - 28915 - Leganés, Madrid</p>
    <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.529489911896!2d-3.7533890000000003!3d40.330598699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4189a7929c6c29%3A0x6940283e1e93409a!2sDelaitto%20Tattoo%20-%20Estudio%20de%20tatuajes!5e0!3m2!1ses!2ses!4v1718094523661!5m2!1ses!2ses" width="80%" height="250" style="border:0;" allowfullscreen loading="lazy" frameborder="0" referrerpolicy="no-referrer-when-downgrade"></iframe>

    <button class="primary-button"> <font-awesome-icon :icon="['fas', 'share']"/>&nbsp;&nbsp;<router-link class="link" to="/contact">Ver mas info</router-link></button>
  </div>
</template>
<style scoped>
.parallax {
  background-image: url("/vite.svg");
}
.info-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  padding: 50px 0;
  border-top: 3px solid var(--color-border);
  gap: 16px;
}
.three-column-photos{
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  place-items: start;
  gap: 32px;
  min-width: 100%;
}
.img-container{
  width: 100%;
}

img{
  width: 100%;
  height: auto;
  max-height: 500px;
}
.button-primary{
  min-width: 100%;
}
</style>