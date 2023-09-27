<template>
  <div class="contact-form">
    <h1>Contacto</h1>
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
      <button type="submit" @click="checkError">Enviar</button>
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
        to_name: 'Tatuajes Estudio', // Correo del destinatario
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

h1{
  margin-bottom: 2em;
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
  font-size: 18px;
  color: var(--color-heading);
}
.contact-form {
  text-align: center;
  padding: 40px;
  border: 2px solid var(--color-border);
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

button {
  background-color: var(--color-primary);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s;
}

button:hover {
  background-color: var(--color-primary-hover);
}

</style>
