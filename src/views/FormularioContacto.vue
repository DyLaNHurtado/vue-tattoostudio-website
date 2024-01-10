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
          <p>Elige el metodo que mejor te venga para contactar con nosotros, te contestaremos de inmediato lo antes
            posible.</p>
          <p><font-awesome-icon :icon="['fas', 'phone']" class="icon" /><span>638795342</span></p>
          <p><font-awesome-icon :icon="['fas', 'envelope']" class="icon" /> <span>dylanhurtado43@gmail.com</span></p>
          <button class="primary-button"> <font-awesome-icon :icon="['fab', 'instagram']" class="icon" /> Privado/MD por
            Instagram</button>
        </div>
        <div class="contact-form">
          <h1>Contacto directo:</h1>
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
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d760.3816649120513!2d-3.7542042!3d40.3306615!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4189f81dcfffff%3A0x620e63886d96bd76!2sC.%20de%20la%20Rioja%2C%2071%2C%20local%205%2C%2028915%20Legan%C3%A9s%2C%20Madrid!5e0!3m2!1ses!2ses!4v1695916507056!5m2!1ses!2ses"
            width="100%" height="250" style="border:0;" allowfullscreen="" loading="lazy" frameborder="0"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
          <p>Como llegar</p>
          <table width="100%">
            <tbody>
              <tr>
                <td><img src="" alt=""></td>
                <td>
                  <p>
                  <h3 class="padding-bottom">Linea 12 (MetroSur):</h3>
                  <p class="padding-left">
                    <span class="small-card blue">JULIAN BESTEIRO</span>
                    <span class="small-card blue">CASA DEL RELOJ</span>
                  </p>
                  </p>
                </td>
              </tr>
              <tr>
                <td><img src="" alt=""></td>
                <td>
                  <p>
                  <h3 class="padding-bottom">Linea C-5 (Renfe):</h3>
                  <p class="padding-left">
                    <span class="small-card red">ZARZAQUEMADA</span>
                    <span class="small-card red">LEGANÉS CENTRAL</span>
                  </p>
                  </p>
                </td>
              </tr>
              <tr>
                <td><img src="" alt=""></td>
                <td>
                  <p>
                  <h3 class="padding-bottom">Parada RIOJA-COLEGIO:</h3>
                  <p class="padding-left">
                    <span class="padding-left small-card green">432</span>
                    <span class="padding-left small-card green">480</span>
                    <span class="padding-left small-card green">481</span>
                    <span class="padding-left small-card green">483</span>
                    <span class="padding-left small-card green">484</span>
                    <span class="padding-left small-card green">488</span>
                  </p>
                  </p>
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
            <h2 class="padding-bottom">NOTA IMPORTANTE:</h2>
            <p class="padding-left">Los dias festivos y los meses Agosto / Septiembre consultar la disponibilidad, es
              posible que estemos cerrados por vacaciones.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  data() {
    return {
      nombre: '',
      correo: '',
      mensaje: '',
      errorMessage: '* Error: Faltan campos por rellenar antes de enviar. *',
      displayError: false,
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
  background-image: url("img_parallax.jpg");
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
}

.header-icon {
  min-width: 100%;
  min-height: 100%;
  font-size: 24px;
  align-self: center;
}

.round-icon-container {
  border-radius: 500px;
  border: 1px solid var(--color-primary);
  min-width: 3.75em;
  min-height: 3.75em;
  display: flex;
  justify-content: center;
  align-self: center;
}

.point-separator {
  border-top: 1px dotted var(--color-primary);
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

h1 {
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
  color: var(--color-heading);
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
  margin-bottom: 20px;
}

input,
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  font-size: 16px;
  background-color: var(--color-background);
  color: var(--color-heading);
  transition: border-color 0.2s, background-color 0.2s;
}

input:hover,
textarea:hover {
  border-color: var(--color-border-hover);
}

input:focus,
textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  background-color: var(--color-background-mute);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

textarea {
  resize: vertical;
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
  width: 2.5em;
  padding: 4px 10px;
  border-radius: 5px;
  margin: 0 6px;
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

}</style>
