<script setup></script>
<template>
  <div class="parallax">
    <h1>Nuestro estudio</h1>
    <p>Conoce un poco mas sobre nosostros</p>
  </div>
  <div class="info-container">
    <div class="img-container">
      <img src="public/vite.svg" alt="" />
    </div>
    <h2>Nuestros valores y prioridades</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, ad! Laboriosam alias fugit itaque voluptates officiis
      ipsa velit praesentium quos!</p>
  </div>
  <div class="parallax">
    <h1>Lorem, ipsum dolor.</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, unde.</p>
  </div>
  <div class="info-container">
    <div class="img-container">
      <img src="" alt="" />
    </div>
    <h2>Nuestros valores y prioridades</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, ad! Laboriosam alias fugit itaque voluptates officiis
      ipsa velit praesentium quos!</p>
  </div>
  <div class="info-container">
    <h1>Nuestro templo</h1>
    <div class="three-column-photos">
      <div class="img-container">
        <img src="public/vite.svg" alt="" />
      </div>
      <div class="img-container">
        <img src="public/vite.svg" alt="" />
      </div>
      <div class="img-container">
        <img src="public/vite.svg" alt="" />
      </div>
    </div>
  </div>
  <div class="parallax">
    <h1>Lorem, ipsum dolor.</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, unde.</p>
  </div>
  <div class="info-container">
    <h1>En plena acción</h1>
    <div class="three-column-photos">
      <div class="img-container">
        <img src="public/vite.svg" alt="" />
      </div>
      <div class="img-container">
        <img src="public/vite.svg" alt="" />
      </div>
      <div class="img-container">
        <img src="public/vite.svg" alt="" />
      </div>
      <div class="img-container">
        <img src="public/vite.svg" alt="" />
      </div>
      <div class="img-container">
        <img src="public/vite.svg" alt="" />
      </div>
      <div class="img-container">
        <img src="public/vite.svg" alt="" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.parallax {
  background-image: url("public/vite.svg");
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
  gap: 16px;
}
.three-column-photos{
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  place-items: start;
  gap: 32px;
  min-width: 100%;
}
.img-container{
  width: 100%;
}

img{
  width: 100%;
  height: auto;
  max-height: 500px;
}
</style>