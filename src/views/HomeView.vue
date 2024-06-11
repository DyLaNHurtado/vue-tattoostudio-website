<script setup></script>
<template>
  <div class="home">
    <div class="header">
      <video autoplay muted loop id="myVideo">
        <!-- <source src="https://video.wixstatic.com/video/2b20fa_bcdb4298d7d44067baf30118eb8cfd83/720p/mp4/file.mp4"
        type="video/mp4"> -->
      </video>
      <div class="header-content">
        <img src="public/vite.svg" alt="">
        <h1>Estudio de tatuajes en Leganés</h1>
        <h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis animi maiores ullam,</h5>
        <button class="transparent-button">Quiero tatuarme</button>
      </div>
    </div>
    <div class="last-tattoos">
      <img src="public/vite.svg" alt="">
      <img src="public/vite.svg" alt="">
      <img src="public/vite.svg" alt="">
    </div>


    <div class="contact-us">
      <h2>Contacta con nosotros</h2>
      <p> </p>
      <form> </form>
    <div class="map"> </div>
  </div>



  </div>
</template>
<style scoped>
.home {
  display: flex;
  height: 100%;
  width: 100%;
  min-height: 100%;
  min-width: 100%;
  flex-direction: column;
}

.header {
  height: 40%;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#myVideo {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  min-width: 100%;
  min-height: 100%;
}

/* Add some content at the bottom of the video/page */
.header-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 16px;
  width: 40%;
}

.header-content img {
  width: 100px;
}

.last-tattoos{
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  padding: 16px;
  justify-content: space-around;
  min-height: 100%;
  min-width: 100%;
}

.last-tattoos img {
  min-width: 200px;
  min-height: 200px;
}
</style>