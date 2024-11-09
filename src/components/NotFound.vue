<template>
    <div class="not-found">
        <div class="icon-container">
            <font-awesome-icon :icon="['fas', 'ghost']"  class="ghost" />
            <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="lupa" />
        </div>

        <label class="message" >{{ label }}</label>
        <button class="back-button" @click="$emit('backFromNotFound')">{{ buttonLabel }}</button>
    </div>
</template>
  
<script>
export default {
    props: {
    label: {
      type: String,
      default: 'Página no encontrada'
    },
    buttonLabel: {
      type: String,
      default: 'Volver al Inicio'
    }
    }
};
</script>
  
<style scoped>
/* Estilos para la lista de reseñas */
.not-found {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.icon-container {
  position: relative;
  width: 200px;
  height: 200px;
  margin-bottom: 2rem;
}


.ghost {
    position: absolute;
    font-size: 8rem;
    color: #a0aec0;
    margin-bottom: 25px;
    opacity: 0;
    z-index: 2;
    animation: slide-in-out-top 3s ease-in-out infinite ;
}
.lupa{
    position: absolute;
    font-size: 7rem;
    color: #f56565;
    z-index: 3;
    bottom: 0;
    right: 0;
    transform: rotate(-30deg);
    transform: translateX(-25px);
    opacity: .8;
}

.message {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #f56565;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}
button {
    margin-top: 25px;
}


 @keyframes slide-in-out-top {
  0% {
    transform: translate(-30px,-30px);
    opacity: 0;
  }
  50% {
    transform: translate(5px,20px);
    opacity: 1;
  }

  100% {
    transform: translate(30px,-30px);
    opacity: 0;
  }

}

@media (max-width: 768px) {
  .icon-container {
    width: 150px;
    height: 150px;
  }

  .ghost {
    font-size: 6rem;
  }

  .lupa {
    font-size: 5rem;
    transform: translate(-25px,15px);
  }

  .message {
    font-size: 1.5rem;
  }
}

</style>
  