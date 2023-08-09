<template>
  <div class="modal">
    <div class="modal-content">
      <div class="add-review-form">
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
          <input type="text" placeholder="Nombre:" v-model="newReview.userName">
        </div>
        <div class="form-group">
          <textarea placeholder="Reseña:" rows="4" v-model="newReview.content"></textarea>
        </div>
        <div class="action-buttons">
          <button class="primary-button" @click="enviarResena" :disabled="false">Enviar Reseña</button>
          <button class="close-button" @click="closeModal">Cerrar</button>
        </div>
      </div>
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
        content: ''
      }
    };
  },
  methods: {
    setRating(star) {
      this.newReview.rating = star;
    },
    enviarResena() {
        this.$emit('addReview', this.newReview);
        this.newReview = {
          userName: '',
          rating: 0,
          content: ''
        };
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
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 70%;
  max-width: 600px;
}

.add-review-form .form-group {
  margin-bottom: 20px;
}

.add-review-form label {
  font-weight: bold;
  font-size: 18px;
  color: #333;
  display: block;
  margin-bottom: 8px;
}

.add-review-form input,
.add-review-form textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  background-color: #f8f8f8;
  transition: border-color 0.2s, background-color 0.2s;
}

.add-review-form input:hover,
.add-review-form textarea:hover {
  border-color: #ccc;
}

.add-review-form input:focus,
.add-review-form textarea:focus {
  outline: none;
  border-color: #5865f2;
  background-color: #f5f5f5;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.add-review-form input::placeholder,
.add-review-form textarea::placeholder {
  color: #999;
}

.add-review-form textarea {
  resize: vertical;
}

.add-review-form .primary-button {
  background-color: #5865f2;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s;
}

.add-review-form .primary-button:hover {
  background-color: #4054d1;
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
  color: #ccc;
  /* Estrella apagada en gris */
}

.add-review-form .star:hover,
.add-review-form .star.active-star:hover {
  color: #ffac07;
}

.add-review-form .star.active-star {
  color: #ffc107;
}

.action-buttons{
  display: flex;
  width: 100%;
  align-items: end;
  justify-content: space-between;
  gap: 20px;
}
.close-button {
  background-color: #e0e0e0;
  color: #333;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  margin-top: 10px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.close-button:hover {
  background-color: #ccc;
}
</style>
  
  