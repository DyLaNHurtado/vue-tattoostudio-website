<template>
  <div class="contact-page">
    <div class="parallax">
      <h1>Contacta sin compromiso</h1>
      <p>Escríbenos o ven al estudio, cuéntanos tu idea, estamos encantados, sin problemas</p>
    </div>
    
    <div class="content-wrapper">
      <div class="info-grid">
        <section class="contact-section">
          <h2><font-awesome-icon :icon="['fas', 'comments']" /> Contacto</h2>
          <p class="small-font">Elige el método que mejor para ti y contacta con nosotros, te contestaremos lo antes posible.</p>
          <div class="contact-details ">

            <p><font-awesome-icon class="color-heading" :icon="['fab', 'whatsapp']" /> <a href="tel:638795342" target="_blank" >638 79 53 42</a>  &nbsp;/ &nbsp; <a href="tel:681092191" target="_blank" > 681 09 21 91</a></p>
            <p><font-awesome-icon class="color-heading" :icon="['far', 'envelope']" /> <a href="mailto:dylanhurtado43@gmail.com" target="_blank">dylanhurtado43@gmail.com</a></p>
            <p><font-awesome-icon class="color-heading" :icon="['fab', 'instagram']" /><a href="https://www.instagram.com/delaitto.tattoo" target="_blank"> @delaitto.tattoo</a></p>
            <p><font-awesome-icon  class="color-heading" :icon="['fab', 'tiktok']"/><a href="https://www.tiktok.com/@delaitto.tattoo" target="_blank"> @delaitto.tattoo</a></p>
            
          </div>

          <p class="small-font">Puedes contarnos a detalle tu idea a través de este formulario y nos podremos en contacto contigo.</p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSd9xuMt7kmX48XC7tR3to8sA5yH53miRtXv3l19bBwu5fd49g/viewform?usp=sharing" target="_blank" class="transparent-button">
            <font-awesome-icon :icon="['fas', 'share']" /> Rellenar formulario
          </a>    

        </section>
        
        <section class="location-section">
          <h2><font-awesome-icon :icon="['fas', 'location-dot']" /> Localización</h2>
          <p class="color-heading">Calle Rioja 71 Local 6 - 28915 - Leganés, Madrid</p>
          <div class="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.529489911896!2d-3.7533890000000003!3d40.330598699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4189a7929c6c29%3A0x6940283e1e93409a!2sDelaitto%20Tattoo%20-%20Estudio%20de%20tatuajes!5e0!3m2!1ses!2ses!4v1718094523661!5m2!1ses!2ses"
              width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
          <h3 class="color-heading">Cómo llegar:</h3>
          <div class="transport-info">
            <div class="transport-item">
              <img src="/metro.svg" alt="Metro Madrid" class="transport-logo">
              <div>
                <h4>Línea 12 (MetroSur):</h4>
                <span class="tag blue">JULIAN BESTEIRO</span>
                <span class="tag blue">CASA DEL RELOJ</span>
              </div>
            </div>
            <div class="transport-item">
              <img src="/renfe.svg" alt="Renfe Madrid" class="transport-logo">
              <div>
                <h4>Línea C-5 (Renfe):</h4>
                <span class="tag red">ZARZAQUEMADA</span>
                <span class="tag red">LEGANÉS CENTRAL</span>
              </div>
            </div>
            <div class="transport-item">
              <img src="/bus.svg" alt="Bus Madrid" class="transport-logo">
              <div>
                <h4>Parada RIOJA-COLEGIO:</h4>
                <span class="tag green">432</span>
                <span class="tag green">480</span>
                <span class="tag green">481</span>
                <span class="tag green">483</span>
                <span class="tag green">484</span>
                <span class="tag green">488</span>
              </div>
            </div>
          </div>
        </section>
        
        <section >
          <h2><font-awesome-icon :icon="['fas', 'clock']" /> Horario</h2>
            <div class="horario-info">
              <p><span class="color-heading">Lunes - Sábado:</span> <span>12:00 a 15:00, 17:30 a 21:00</span></p>
              <p><span class="color-heading">Domingo:</span> <span>12:00 a 15:00</span></p>
            </div>

            <div className=" horario-note">
              <h3 class="color-heading">Importante:</h3>
              <p>Los días festivos y los meses agosto / septiembre consultar la disponibilidad, es posible que estemos cerrados por vacaciones.</p>
            </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
    };
  },
  methods: {
  }
};
</script>

<style scoped>
.contact-page {
  background-color: var(--color-background-mute);
  min-height: 100vh;
}

.parallax {
  background: linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899);
  padding: 5rem 0;
  text-align: center;
}

.parallax h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: var(--color-heading);
}

.parallax p {
  font-size: 1.25rem;
  color: var(--color-text);
}

.content-wrapper {
  max-width: 1500px;
  margin: 0 auto;
  padding: 3rem 1rem;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

section {
  border-radius: 8px;
  padding: 2rem;
  gap:10px;
}

h2 {
  font-size: 1.5rem;
  color: var(--color-primary);
  margin-bottom: 1rem;
  display: flex;
  font-weight: bold;
  align-items: center;
}

h2 svg {
  margin-right: 0.5rem;
}

.contact-details p {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.contact-details svg {
  margin-right: 0.5rem;
}

.map-container {
  margin: 1rem 0;
  border-radius: 8px;
  overflow: hidden;
}

.transport-info {
  margin-top: 1rem;
}

.transport-item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.transport-logo {
  width: 30px;
  height: auto;
  margin-right: 1rem;
}

.tag {
  display: inline-block;
  font-weight: bold;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.8rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}

.blue { border: 1px solid #4299e1; }
.red { border: 1px solid #f56565;}
.green {border: 1px solid #48bb78;}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
}

th, td {
  padding: 0.75rem;
  text-align: left;
}

th {
  background-color: #4a5568;
  font-weight: bold;
}


.horario-info{
  display: flex;
  flex-direction: column;
}

.horario-info p{
  display: flex;
  justify-content: space-between;
}
.horario-note{
  margin-top: 1rem;
}

.color-heading{
  color: var(--color-heading);
  font-weight: bold;
}
.small-font{
  font-size: 1em;
  margin: 1.5em 0;
}

.transparent-button{
  background-color: var(--color-background-mute);
}

@media (max-width: 768px) {
  .info-grid {
    grid-template-columns: 1fr;
  }
  
  .parallax h1 {
    font-size: 2rem;
  }
  
  .parallax p {
    font-size: 1rem;
  }
}
</style>