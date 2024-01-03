<template>
  <div class="lightbox" v-if="show"></div>
    <div v-if="show" class="lightbox-content">
    <span class="lightbox-close" @click="close">&times;</span>
        <div class="lightbox-image-container">
            <img :src="image" alt="Lightbox Image" class="lightbox-image" />
            
      </div>
      <div class="tattoo-data">
                <h1>Detalles: </h1>
                <p>Watercolor, Neotradicional</p>
                <p>80$ por 10cm 120$ mas de 10cm</p>
                <p></p>
                <p></p>
            </div>
    </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  },
  methods: {
    close() {
      this.$emit('close');
    }
  }
};
</script>

<style scoped>
.lightbox {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(1.5rem);
  z-index: 200;
}

.lightbox-content {
    display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 50px;
  z-index: 300;
}

.lightbox-image-container{
  width: 800px;
  max-width: 100%;
  max-height: 100%;
  margin: 10px; 
  border-radius: 8px;
  padding: 5px;
  border: 1px solid var( --color-border);
  transition: all .1s;
}

.lightbox-image{
  width: 100%;
  height: auto;
}

.lightbox-close {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 4em;
  cursor: pointer;
  color: white;
}

.tattoo-data{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>