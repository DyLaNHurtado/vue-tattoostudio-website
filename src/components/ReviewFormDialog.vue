<template>
  <div class="modal">
    <div class="modal-content">
      <form class="add-review-form" @submit.prevent="enviarResena">
        <div class="form-group">
          <div class="rating">
            <label>Calificación:</label>
            <div class="stars">
              <span v-for="star in 5" :key="star" class="star" @click="setRating(star)"
                :class="{ 'active-star': star <= newReview.rating }"><font-awesome-icon :icon="['fas', 'star']" /></span>
            </div>
          </div>
        </div>
        <div class="form-group">
          <input type="text" placeholder="Nombre:" v-model="newReview.userName" @keydown="checkError" required >
        </div>
        <textarea placeholder="Reseña:" rows="4" v-model="newReview.content" @keydown="checkError" required></textarea>
        <span :class="['error', { 'display-error': displayError }]">{{ errorMessage }}</span>
        <div class="action-buttons">
          <button class="primary-button" type="submit" @click="checkError" :disabled="disableButton" >Enviar Reseña</button>
          <button class="transparent-button" @click="closeModal">Cerrar</button>
        </div>
      </form>
    </div>
  </div>
</template>
  
<script>
export default {
  props: {
    showModal: Boolean
  },
  data() {
    return {
      newReview: {
        userName: '',
        rating: 0,
        content: '',
        likes: 0,
        usefulled: 0
      },
      errorMessage: '* Error: Faltan campos por rellenar antes de enviar. Revisa las estrellas *',
      displayError: false,
      disableButton: true,
    };
  },
  methods: {
    setRating(star) {
      this.newReview.rating = star;
      this.checkError();
    },
    enviarResena() {
      if (this.newReview.rating > 0 && this.newReview.userName.length > 0 && this.newReview.content.length > 0) {
        this.$emit('addReview', this.newReview);
        this.newReview = {
          userName: '',
          rating: 0,
          content: '',
          likes: 0,
          usefulled: 0
        };
        this.displayError = false;
      } else {
        this.displayError = true;
      }

    },
    checkError(){
      this.displayError = this.disableButton = !(this.newReview.rating > 0 && this.newReview.userName.length > 0 && this.newReview.content.length > 0);
    },
    closeModal() {
      this.$emit('close');
    },
  }
};
</script>
  
<style scoped>
/* Estilos para el modal */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.modal-content {
  background-color: var(--color-background-mute);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 70%;
  max-width: 600px;
}

.add-review-form .form-group {
  margin-bottom: 20px;
}

.error {
  text-align: center;
  font-weight: 500;
  opacity: 0;
  margin: 5px;
  color: var(--color-text-error);
}

.error.display-error {
  opacity: 1;
}

.add-review-form label {
  font-weight: bold;
  font-size: 18px;
  color: var(--color-heading);
  display: block;
  margin-bottom: 8px;
}

.add-review-form input,
.add-review-form textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  font-size: 16px;
  background-color: var(--color-background);
  transition: border-color 0.2s, background-color 0.2s;
  color: var(--color-heading);

}

.add-review-form input:hover,
.add-review-form textarea:hover {
  border-color: var(--color-border-hover);
}

.add-review-form input:focus,
.add-review-form textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  background-color: var(--color-background-mute);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.add-review-form input::placeholder,
.add-review-form textarea::placeholder {
  color: var(--color-text-mute);
}

.add-review-form textarea {
  resize: vertical;
}

.add-review-form .primary-button {
  background-color: var(--color-primary);
  color: var(--color-heading);
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s;
}

.add-review-form .primary-button:hover {
  background-color:  var(--color-primary-hover);
}
.add-review-form .primary-button:disabled {
  opacity: .5;
  cursor: not-allowed;
}
.add-review-form .primary-button:disabled:hover {
  background-color: var(--color-primary);
}

.add-review-form .rating {
  display: flex;
  align-items: end;
  justify-content: start;
  gap: 20px;
  margin-top: 10px;

}

.add-review-form .star {
  font-size: 28px;
  cursor: pointer;
  transition: transform .3s, color .3s;
  color: var(--color-text-mute);
  /* Estrella apagada en gris */
}

.add-review-form .star:hover,
.add-review-form .star.active-star:hover {
  color: #ffac07;
}

.add-review-form .star.active-star {
  color: #ffc107;
}

.action-buttons {
  display: flex;
  width: 100%;
  align-items: end;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
}
</style>
  
  