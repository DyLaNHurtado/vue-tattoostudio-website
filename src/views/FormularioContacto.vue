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
          <p>Elige el método que mejor te venga para contactar con nosotros, te contestaremos lo antes posible.</p>
          <div class="contact-details">
            <p><font-awesome-icon :icon="['fas', 'phone']" /> 638795342</p>
            <p><font-awesome-icon :icon="['fas', 'envelope']" /> dylanhurtado43@gmail.com</p>
          </div>
          <div class="socials">
            <Socials size="2xl" />
          </div>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSd9xuMt7kmX48XC7tR3to8sA5yH53miRtXv3l19bBwu5fd49g/viewform?usp=sharing" target="_blank" class="cta-button">
            <font-awesome-icon :icon="['fas', 'share']" /> Cuéntanos tu idea aquí
          </a>
          
          <div class="contact-form" v-if="!isMessageSent">
            <h3>Envía un mensaje rápido:</h3>
            <form @submit.prevent="enviarMensaje">
              <div class="form-group">
                <input type="text" placeholder="Nombre" v-model="nombre" required>
              </div>
              <div class="form-group">
                <input type="email" placeholder="Correo Electrónico" v-model="correo" required>
              </div>
              <textarea placeholder="Mensaje" rows="5" v-model="mensaje" required></textarea>
              <p :class="['error', { 'display-error': displayError }]">{{ errorMessage }}</p>
              <button class="submit-button" type="submit" @click="checkError">Enviar</button>
            </form>
          </div>
          
          <div class="success-message" v-else>
            <font-awesome-icon :icon="['fas', 'circle-check']" class="icon-check" />
            <h3>✨ ¡Gracias! El mensaje se ha enviado correctamente ✨</h3>
            <p>Te responderemos lo antes posible, la paciencia es la madre de la ciencia 🤓</p>
          </div>
        </section>
        
        <section class="location-section">
          <h2><font-awesome-icon :icon="['fas', 'location-dot']" /> Localización</h2>
          <p>Nuestro estudio está en Calle Rioja 71 Local 6 - 28915 - Leganés, Madrid</p>
          <div class="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.529489911896!2d-3.7533890000000003!3d40.330598699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4189a7929c6c29%3A0x6940283e1e93409a!2sDelaitto%20Tattoo%20-%20Estudio%20de%20tatuajes!5e0!3m2!1ses!2ses!4v1718094523661!5m2!1ses!2ses"
              width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
          <h3>Cómo llegar</h3>
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
        
        <section class="hours-section">
          <h2><font-awesome-icon :icon="['fas', 'clock']" /> Horario</h2>
          <table>
            <thead>
              <tr>
                <th>Día</th>
                <th>Mañana</th>
                <th>Tarde</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lunes</td>
                <td>Cerrado por trabajo</td>
                <td>19:00 a 21:30</td>
              </tr>
              <tr>
                <td>Martes</td>
                <td>Cerrado por trabajo</td>
                <td>19:00 a 21:30</td>
              </tr>
              <tr>
                <td>Miércoles</td>
                <td>Cerrado por trabajo</td>
                <td>Cerrado</td>
              </tr>
              <tr>
                <td>Jueves</td>
                <td>Cerrado por trabajo</td>
                <td>19:00 a 21:30</td>
              </tr>
              <tr>
                <td>Viernes</td>
                <td>Cerrado por trabajo</td>
                <td>16:30 a 21:00</td>
              </tr>
              <tr>
                <td>Sábado</td>
                <td>12:00 a 14:30</td>
                <td>16:30 a 20:00</td>
              </tr>
              <tr>
                <td>Domingo</td>
                <td>12:00 a 14:30</td>
                <td>16:30 a 20:00</td>
              </tr>
            </tbody>
          </table>
          <div class="important-note">
            <h3>NOTA IMPORTANTE:</h3>
            <p>Los días festivos y los meses <span class="highlight">Agosto / Septiembre</span> consultar la disponibilidad, es posible que estemos cerrados por vacaciones.</p>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';
import Socials from '../components/Socials.vue';

export default {
  components: {
    Socials,
  },
  data() {
    return {
      nombre: '',
      correo: '',
      mensaje: '',
      errorMessage: '* Error: Faltan campos por rellenar antes de enviar. *',
      displayError: false,
      isMessageSent: false,
    };
  },
  methods: {
    enviarMensaje() {
      if (this.nombre && this.correo && this.mensaje) {
        this.displayError = false;
        const serviceID = 'service_q4y3dvq';
        const templateID = 'template_8kwmb0d';
        const templateParams = {
          from_name: this.nombre,
          to_name: 'Delaitto Tattoo',
          message: this.mensaje,
          reply_to: this.correo
        };

        emailjs.send(serviceID, templateID, templateParams, 'YOUR_USER_ID')
          .then((response) => {
            this.isMessageSent = true;
            console.log('Correo enviado correctamente:', response);
            this.nombre = '';
            this.correo = '';
            this.mensaje = '';
          })
          .catch((error) => {
            console.error('Error al enviar el correo:', error);
          });
      }
    },
    checkError() {
      this.displayError = !(this.nombre && this.correo && this.mensaje);
    }
  }
};
</script>

<style scoped>
.contact-page {
  background-color: #1a202c;
  color: #e2e8f0;
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
  color: #ffffff;
}

.parallax p {
  font-size: 1.25rem;
  color: #e2e8f0;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1rem;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

section {
  background-color: #2d3748;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 1.5rem;
  color: #f56565;
  margin-bottom: 1rem;
  display: flex;
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

.socials {
  margin: 1rem 0;
}

.cta-button {
  display: inline-block;
  background-color: #f56565;
  color: #1a202c;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #e53e3e;
}

.contact-form, .success-message {
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: #2d3748;
  border-radius: 8px;
}

.form-group {
  margin-bottom: 1rem;
}

input, textarea {
  width: 100%;
  padding: 0.75rem;
  background-color: #4a5568;
  border: 1px solid #718096;
  border-radius: 4px;
  color: #e2e8f0;
}

.submit-button {
  background-color: #48bb78;
  color: #1a202c;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #38a169;
}

.error {
  color: #fc8181;
  font-size: 0.875rem;
  margin-top: 0.5rem;
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
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}

.blue { background-color: #4299e1; color: #fff; }
.red { background-color: #f56565; color: #fff; }
.green { background-color: #48bb78; color: #fff; }

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}

th, td {
  padding: 0.75rem;
  text-align: left;
  border-bottom: 1px solid #4a5568;
}

th {
  background-color: #4a5568;
  font-weight: bold;
}

.important-note {
  margin-top: 2rem;
  padding: 1rem;
  background-color: #4a5568;
  border-left: 4px solid #f56565;
  border-radius: 4px;
}

.highlight {
  color: #f56565;
  font-weight: bold;
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