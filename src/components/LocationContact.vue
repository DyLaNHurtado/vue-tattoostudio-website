<template>
    <div class="info-container">
      <h1>Ubicación y Contacto</h1>
      <p>Visítanos en nuestra ubicación en Leganés o contáctanos para agendar una cita.</p>
      <p><span class="primary-text">Calle Rioja 71 Local 6 - 28915 - Leganés, Madrid</span></p>
      <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.529489911896!2d-3.7533890000000003!3d40.330598699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4189a7929c6c29%3A0x6940283e1e93409a!2sDelaitto%20Tattoo%20-%20Estudio%20de%20tatuajes!5e0!3m2!1ses!2ses!4v1718094523661!5m2!1ses!2ses" width="80%" height="250" style="border:0;" allowfullscreen loading="lazy" frameborder="0" referrerpolicy="no-referrer-when-downgrade"></iframe>

      <router-link class="link" to="/contact">
        <button class="back-button"><font-awesome-icon :icon="['fas', 'share']"/>&nbsp;&nbsp;Más información para contactar</button>
      </router-link>
    </div>
</template>
<script>
  export default {
  data() {
    return {
    };
  },
  methods: {
  },
  mounted() {
  },
  beforeUnmount() {
  },
};
</script>
<style scoped>
.info-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.link {
  text-decoration: none;
}

.map {
  width: 100%;
  height: 250px;
  margin-top: 20px;
}
</style>