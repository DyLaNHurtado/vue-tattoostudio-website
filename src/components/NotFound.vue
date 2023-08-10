<template>
    <div class="not-found">
        <font-awesome-icon :icon="['fas', 'ghost']"  class="ghost" />
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="lupa" />
        <label class="message">{{ label }}</label>
        <button class="transparent-button" @click="$emit('backFromNotFound')">{{ buttonLabel }}</button>
    </div>
</template>
  
<script>
export default {
    props: {
        label: String,
        buttonLabel: String,
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


.ghost {
    position: relative;
    font-size: 4em;
    margin-bottom: 25px;
    opacity: 0;
    color: #ddd;
    z-index: 2;
    animation: slide-in-out-top 3s ease-in-out infinite ;
}
.lupa{
    font-size: 6em;
    color: #777;
    position: absolute;
    z-index: 3;
    transform: translate(15px,-45px);
}
.message{
    margin-top: 25px;
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

</style>
  