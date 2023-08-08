<template>
  <div class="contact-form">
    <h1>Contacto</h1>
    <form @submit.prevent="enviarMensaje">
      <div class="form-group">
        <input type="text" placeholder="Nombre" v-model="nombre" required>
      </div>
      <div class="form-group">
        <input type="email" placeholder="Correo Electrónico" v-model="correo" required>
      </div>
      <div class="form-group">
        <textarea placeholder="Mensaje" rows="8" v-model="mensaje" required></textarea>
      </div>
      <button type="submit">Enviar</button>
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
      mensaje: ''
    };
  },
  methods: {
    enviarMensaje() {
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
  }
};
</script>

<style scoped>

h1{
  margin-bottom: 2em;
}
.contact-form {
  text-align: center;
  padding: 40px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

}

form {
  max-width: 600px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
  font-size: 18px;
  color: #333;
}

input,
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  background-color: #f8f8f8;
  transition: border-color 0.2s, background-color 0.2s;
}

input:hover,
textarea:hover {
  border-color: #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #5865f2;
  background-color: #f5f5f5;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

textarea {
  resize: vertical;
}

button {
  background-color: #5865f2;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #4054d1;
}
</style>
