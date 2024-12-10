<template>
    <div class="info-container">
      <h1>Ubicación y Contacto</h1>
      <p>Visítanos en Leganés o contáctanos para agendar una cita.</p>

      <div class="contact-container">
        <!-- Mapa-->
        <div class="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.529489911896!2d-3.7533890000000003!3d40.330598699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4189a7929c6c29%3A0x6940283e1e93409a!2sDelaitto%20Tattoo%20-%20Estudio%20de%20tatuajes!5e0!3m2!1ses!2ses!4v1718094523661!5m2!1ses!2ses"
              width="100%"
              height="450"
              style="border:0;"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              frameborder="0"
            ></iframe>
          </div>
          <!-- Details-->
          <div class="contact-details">
            <p class="flex"><font-awesome-icon class="color-heading" :icon="['fab', 'whatsapp']" />&nbsp;&nbsp; <a href="tel:638795342" target="_blank" >638 79 53 42</a>  &nbsp;/ &nbsp; <a href="tel:681092191" target="_blank" > 681 09 21 91</a></p>
            <p class="flex"><font-awesome-icon class="color-heading" :icon="['far', 'envelope']" />&nbsp;&nbsp; <a href="mailto:dylanhurtado@delaittotattoo.es" target="_blank">dylanhurtado@delaittotattoo.es</a></p>
            <p class="flex"><font-awesome-icon class="color-heading" :icon="['fab', 'instagram']" />&nbsp;&nbsp;<a href="https://www.instagram.com/delaitto.tattoo" target="_blank"> @delaitto.tattoo</a></p>
            <p class="flex"><font-awesome-icon  class="color-heading" :icon="['fab', 'tiktok']"/>&nbsp;&nbsp;<a href="https://www.tiktok.com/@delaitto.tattoo" target="_blank"> @delaitto.tattoo</a></p>
            <p class="flex"><font-awesome-icon class="color-heading" :icon="['fas', 'location-dot']" />&nbsp;&nbsp;<a href="https://www.google.com/maps/dir/40.3306152,-3.7510546/google+maps+delaitto+tattoo/" target="_blank"> Calle Rioja 71 Local 6 - 28915 - Leganés, Madrid</a> </p>
          </div>
      </div>


      <router-link class="link" to="/contact">
        <button class="transparent-button"><font-awesome-icon :icon="['fas', 'share']"/>&nbsp;&nbsp;Más información</button>
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
  text-align: start;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 10px;
}
.color-heading{
  color: var(--color-heading);
  font-size: 1.2em;
}

.link {
  text-decoration: none;
  align-self: center;
  user-select: none;
}


.map-container {
  width: 50%;
  height: 277px;
  border-radius: 8px;
  overflow: hidden;
}
.transparent-button {
  margin-top: 1.2em;
}

a{
  transition : all .3s ease;

}
 a:hover{
  color: var(--color-heading);
  transform: translateY(-2px);
}

.flex{
  display: flex;
  align-items: center;
}

h1{
  color: var(--color-heading);
  font-weight: bold;
}
.contact-details {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1em;
  padding: 2rem;
  background: var(--color-background-mute);
  border-radius: 8px;
}

.contact-container{
  display: flex;
  min-width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  margin: 1.2em 0; 
  justify-content: space-between;
  align-items: center;
}
@media (max-width: 768px) {
  h1{
    font-size: 1.6em;
  }
 .map-container {
   width: 100%;
 }
}
</style>