<template>
  <div class="parallax">
    <h1>Contacta sin compromiso:</h1>
    <p>Escribenos o ven al estudio, cuentanos tu idea, estamos encantados, sin problemas</p>
  </div>
  <div class="info-container">

    <div class="info">
      <div class="info-section">
        <div class="icon-title">
          <h3>CONTACTO</h3>
          <div class="graphic-container">
            <div class="point-separator"></div>
            <span class="round-icon-container"><font-awesome-icon :icon="['fas', 'comments']"
                class="header-icon" /></span>
            <div class="point-separator"></div>
          </div>
        </div>
        <div class="info-content">
          <p>Elige el metodo que mejor te venga para contactar con nosotros, te contestaremos lo antes
            posible.</p>
          <h6><font-awesome-icon :icon="['fas', 'phone']" class="icon" /><span>638795342</span></h6>
          <h6><font-awesome-icon :icon="['fas', 'envelope']" class="icon" /> <span>dylanhurtado43@gmail.com</span></h6>
          <div class="socials">
            <Socials size="2xl"/>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSd9xuMt7kmX48XC7tR3to8sA5yH53miRtXv3l19bBwu5fd49g/viewform?usp=sharing" target=”_blank”><button class="primary-button"> <font-awesome-icon :icon="['fas', 'share']" /> Cuentanos a tu idea aqui!</button></a>
          </div>

        </div>
        <div class="contact-form" v-if="!isMessageSent">
          <h4>Envia un mensaje rápido:</h4>
          <form @submit.prevent="enviarMensaje">
            <div class="form-group">
              <input type="text" placeholder="Nombre" v-model="nombre" required>
            </div>
            <div class="form-group">
              <input type="email" placeholder="Correo Electrónico" v-model="correo" required>
            </div>
            <textarea placeholder="Mensaje" rows="8" v-model="mensaje" required></textarea>
            <p :class="['error', { 'display-error': displayError }]">{{ errorMessage }}</p>
            <div>
              <button class="primary-button" type="submit" @click="checkError">Enviar</button>
            </div>
          </form>
        </div>

        <div class="contact-form" v-else>
          <font-awesome-icon :icon="['fas', 'circle-check']" class="icon-check" />
          <h2>✨ Gracias! El mensaje se ha enviado correctamente! ✨</h2>
          <p>Te responderemos lo antes posible, la paciencia es la madre de la ciencia 🤓</p>
        </div>
      </div>
      <div class="info-section">
        <div class="icon-title">
          <h3>LOCALIZACION</h3>
          <div class="graphic-container">
            <div class="point-separator"></div>
            <span class="round-icon-container"><font-awesome-icon :icon="['fas', 'location-dot']"
                class="header-icon" /></span>
            <div class="point-separator"></div>
          </div>
        </div>
        <div class="info-content">
          <p>Nuestro estudio esta en Calle Rioja 71 Local 6 - 28915 - Leganés, Madrid </p>
          <iframe class="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.529489911896!2d-3.7533890000000003!3d40.330598699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4189a7929c6c29%3A0x6940283e1e93409a!2sDelaitto%20Tattoo%20-%20Estudio%20de%20tatuajes!5e0!3m2!1ses!2ses!4v1718094523661!5m2!1ses!2ses"
            width="100%" height="250" style="border:0;" allowfullscreen="" loading="lazy" frameborder="0"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
          <p>Como llegar</p>
          <table width="100%">
            <tbody>
              <tr>
                <td>
                  <img src="/metro.svg" alt="Metro_Madrid" loading="lazy" class="logo-transport">
                </td>
                <td>
                  <h4>Linea 12 (MetroSur):</h4>
                  <span class="tags">
                    <span class="small-card blue">JULIAN BESTEIRO</span>
                    <span class="small-card blue">CASA DEL RELOJ</span>
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <img src="/renfe.svg" alt="Renfe_Madrid" loading="lazy" class="logo-transport">
                </td>
                <td>
                  <h4>Linea C-5 (Renfe):</h4>
                  <span class="tags">
                    <span class="small-card red">ZARZAQUEMADA</span>
                    <span class="small-card red">LEGANÉS CENTRAL</span>
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <img src="/bus.svg" alt="bus_Madrid" loading="lazy" class="logo-transport">
                </td>
                <td>
                  <h4>Parada RIOJA-COLEGIO:</h4>
                  <span class="tags">
                    <span class="padding-left small-card green">432</span>
                    <span class="padding-left small-card green">480</span>
                    <span class="padding-left small-card green">481</span>
                    <span class="padding-left small-card green">483</span>
                    <span class="padding-left small-card green">484</span>
                    <span class="padding-left small-card green">488</span>
                  </span>
                </td>
              </tr>
            </tbody>

          </table>
        </div>
      </div>

      <div class="info-section">
        <div class="icon-title">
          <h3>HORARIO</h3>
          <div class="graphic-container">
            <div class="point-separator"></div>
            <span class="round-icon-container"><font-awesome-icon :icon="['fas', 'clock']" class="header-icon" /></span>
            <div class="point-separator"></div>
          </div>
        </div>
        <div class="info-content">
          <table width="100%">
            <thead>
              <th width="15%">
                Dia
              </th>
              <th width="42%">
                Mañana
              </th>
              <th width="42%">
                Tarde
              </th>
            </thead>
            <tbody>
              <tr>
                <td><span>Lunes</span></td>
                <td><span>Cerrado por trabajo</span></td>
                <td><span>19:00 a 21:30</span></td>
              </tr>
              <tr>
                <td><span>Martes</span></td>
                <td><span>Cerrado por trabajo</span></td>
                <td><span>19:00 a 21:30</span></td>
              </tr>
              <tr>
                <td><span>Miercoles</span></td>
                <td><span>Cerrado por trabajo</span></td>
                <td><span>Cerrado</span></td>
              </tr>
              <tr>
                <td><span>Jueves</span></td>
                <td><span>Cerrado por trabajo</span></td>
                <td><span>19:00 a 21:30</span></td>
              </tr>
              <tr>
                <td><span>Viernes</span></td>
                <td><span>Cerrado por trabajo</span></td>
                <td><span>16:30 a 21:00</span></td>
              </tr>
              <tr>
                <td><span>Sábado</span></td>
                <td><span>12:00 a 14:30</span></td>
                <td><span>16:30 a 20:00</span></td>
              </tr>
              <tr>
                <td><span>Domingo</span></td>
                <td><span>12:00 a 14:30</span></td>
                <td><span>16:30 a 20:00</span></td>
              </tr>
            </tbody>
          </table>
          <div class="important-note">
            <h3>NOTA IMPORTANTE:</h3>
            <p class="padding-left">Los dias festivos y los meses <span class="primary-text">Agosto / Septiembre</span> consultar la disponibilidad, es
              posible que estemos cerrados por vacaciones.</p>
          </div>
        </div>
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
      if (this.nombre.length > 1 && this.correo.length > 1 && this.mensaje.length > 1) {
        this.displayError = false;
        // Configuración de Email.js
        const serviceID = 'service_q4y3dvq';
        const templateID = 'template_8kwmb0d';

        // Datos del correo
        const templateParams = {
          from_name: this.nombre,
          to_name: 'Delaitto Tattoo', // Correo del destinatario
          message: this.mensaje,
          reply_to: this.correo
        };

        // Envía el correo usando Email.js
        emailjs.send(serviceID, templateID, templateParams, userID).then(
          (response) => {
            this.isMessageSent = true;
            console.log('Correo enviado correctamente:', response);
            // Limpia el formulario después de enviar el mensaje
            this.nombre = '';
            this.correo = '';
            this.mensaje = '';
          },
          (error) => {
            console.error('Error al enviar el correo:', error);
          }
        );
      }
    }, checkError() {
      this.displayError = !(this.nombre.length > 1 && this.correo.length > 1 && this.mensaje.length > 1);
    }
  }
};
</script>

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
}

.info {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: start;
  max-width: 1216.8px;
}

.info-section {
  width: 33.33333333333%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 0 8px;
}

.graphic-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  margin-bottom: 15px;
  width: 100%;
}

.icon-title {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.info-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 10px;
}

.header-icon {
  min-width: 100%;
  min-height: 100%;
  font-size: 24px;
  align-self: center;
}

.round-icon-container {
  border-radius: 500px;
  border: 2px solid var(--color-primary);
  min-width: 3.75em;
  min-height: 3.75em;
  display: flex;
  justify-content: center;
  align-self: center;
}

.point-separator {
  border-top: 2px dotted var(--color-primary);
  width: 100%;
}

.main-data {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px;
  font-size: 25px;
}

.icon {
  padding-right: 10px;
}


.contact-form {
  margin-top: 20px;
  min-width: 100%;
  text-align: center;
  padding: 40px;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  transition: transform 0.3s, box-shadow 0.3s;
}

form {
  max-width: 600px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 15px;
}

input,
textarea {
  width: 100%;
}

.error {
  text-align: center;
  font-weight: 500;
  opacity: 0;
  margin: 5px;
  color: #ff5733;
}

.error.display-error {
  opacity: 1;
}

.map {
  width: 100%;
  border: 2px solid var(--color-border);
  border-radius: 8px;
  filter: grayscale(100%) invert(92%) contrast(83%);

}

table {
  border-collapse: collapse;
  border-spacing: 0;
  text-align: left;
}

th {
  padding: 5px 15px;
  color: var(--color-heading)
}

td {
  border-bottom: 1px solid #4a4848;
  padding: 15px 5px;
}

thead {
  background-color: var(--color-primary);
  border-bottom: 1px solid var(--color-border);
}

.padding-left {
  padding-left: 25px;
}

.padding-bottom {
  padding-bottom: 25px;
}

.small-card {
  padding: 4px 10px;
  border-radius: 5px;
  margin: 6px;
}

.green {
  color: rgb(255, 255, 255);
  background-color: rgb(142, 191, 66);
}

.red {
  color: rgb(255, 255, 255);
  background-color: rgb(191, 66, 66);
}

.blue {
  color: rgb(255, 255, 255);
  background-color: rgb(66, 126, 191);
}

.important-note {
  border-left: 3px solid var(--color-primary);
  padding: 25px;
  margin: 25px 0;
  width: 100%;
  background-color: var(--color-background-mute);
}
.logo-transport {
  width: 30px;  /* Define un ancho adecuado */
  height: auto; /* Mantén la relación de aspecto */
  margin-right: 10px; /* Espaciado a la derecha */
}

td img.logo-transport {
  vertical-align: middle;
}

.socials{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.social-icon {
  background-color: var(--color-primary); /* Color de fondo del botón */
  color: #fff; /* Color del ícono */
  border: none; /* Elimina el borde del botón */
  padding: 10px; /* Ajusta el espacio interior del botón */
  margin: 5px; /* Espacio entre botones */
  cursor: pointer; /* Cambia el cursor al pasar sobre el botón */
  transition: background-color 0.3s, color 0.3s; /* Transición suave al cambiar los estilos */
  border-radius: 50%; /* Asegura que el botón tenga forma redonda */
  display: inline-flex; /* Permite alinear el ícono y el texto */
  justify-content: center; /* Alinea el contenido en el centro */
  align-items: center; /* Alinea el contenido en el centro */
  width: 40px; /* Ancho del botón */
  height: 40px; /* Altura del botón */
  font-size: 18px; /* Tamaño del ícono */
}

.social-icon:hover {
  background-color: var(--color-primary-hover); /* Cambia el color de fondo al pasar el mouse */
}
.tags{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
}
.icon-check{
  font-size: 3.5em;
  color:#aae68e;
  margin-bottom: 15px;
}


@media (max-width: 1100px) {
  .info {
    width: 100%;
    flex-direction: column;
    flex-wrap: nowrap;
  }

  .info-section {
    min-width: 100%;
    padding: 0;
  }
  a{
    justify-content: center;
  }
  h3{
    text-align: center
  }

}</style>
