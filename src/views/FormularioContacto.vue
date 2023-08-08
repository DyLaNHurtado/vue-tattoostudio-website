<!-- FormularioContacto.vue -->
<template>
    <div>
      <h1>Contacto</h1>
      <form @submit.prevent="enviarMensaje">
        <div>
          <label for="nombre">Nombre:</label>
          <input type="text" id="nombre" v-model="nombre" required>
        </div>
        <div>
          <label for="correo">Correo Electrónico:</label>
          <input type="email" id="correo" v-model="correo" required>
        </div>
        <div>
          <label for="mensaje">Mensaje:</label>
          <textarea id="mensaje" v-model="mensaje" required></textarea>
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
  }
  </script>
  
  <style>
  /* Estilos del formulario (opcional) */
  form {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: 0 auto;
  }
  
  label {
    margin-bottom: 5px;
  }
  
  input,
  textarea {
    margin-bottom: 10px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  button {
    padding: 10px 20px;
    background-color: #007BFF;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>
  