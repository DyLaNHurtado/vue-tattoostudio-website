<template>

<div class="main-data">
  <h1>Puedes contactarnos por:</h1>
  <p><font-awesome-icon :icon="['fas', 'phone']"  class="icon"/><span>638795342</span></p>
  <p><font-awesome-icon :icon="['fas', 'envelope']" class="icon"/> <span>dylanhurtado43@gmail.com</span></p>
  <p><font-awesome-icon :icon="['fas', 'location-dot']" class="icon"/> <span>Calle Rioja 71 Local 6 Leganés, Madrid</span></p>
</div>


  <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d760.3816649120513!2d-3.7542042!3d40.3306615!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4189f81dcfffff%3A0x620e63886d96bd76!2sC.%20de%20la%20Rioja%2C%2071%2C%20local%205%2C%2028915%20Legan%C3%A9s%2C%20Madrid!5e0!3m2!1ses!2ses!4v1695916507056!5m2!1ses!2ses" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

  <div class="contact-form">
    <h1>Envia un mensaje</h1>
    <form @submit.prevent="enviarMensaje">
      <div class="form-group">
        <input type="text" placeholder="Nombre" v-model="nombre" required>
        {{ nombre }}
      </div>
      <div class="form-group">
        <input type="email" placeholder="Correo Electrónico" v-model="correo" required>
      </div>
        <textarea placeholder="Mensaje" rows="8" v-model="mensaje" required></textarea>
        <p :class="['error',{'display-error':displayError}]">{{ errorMessage }}</p>
      <button class="primary-button" type="submit" @click="checkError">Enviar</button>
    </form>
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
      if(this.nombre.length>1 && this.correo.length>1 && this.mensaje.length>1){
        this.displayError = false;
      // Configuración de Email.js
      const serviceID = 'service_q4y3dvq';
      const templateID = 'template_8kwmb0d';

      // Datos del correo
      const templateParams = {
        from_name: this.nombre,
        to_name: 'Delaito Tattoo', // Correo del destinatario
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
  },checkError(){
    this.displayError = !(this.nombre.length>1 && this.correo.length>1 && this.mensaje.length>1);
  }
  }
};
</script>

<style scoped>
.main-data{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px;
  font-size: 25px;
}
.main-data .icon{
  padding-right: 10px;
}

h1{
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
  color: var(--color-heading);
}
.contact-form {
  margin-top: 20px;
  text-align: center;
  padding: 40px;
  background-color: var(--color-background-soft);
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
  background-color: var(--color-background-soft);
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
.error.display-error{
  opacity: 1;
}

.map{
  width: 100%;
  border: 2px solid var(--color-border);
  border-radius: 8px;
}

@media (prefers-color-scheme: dark) {
  .map{
    filter: invert(90%);
  }
}
</style>
