<script setup></script>
<template>
      <div class="home">
        <video autoplay muted loop id="myVideo">
            <source src="rain.mp4" type="video/mp4">
        </video>

<div class="content">
  <h1>Heading</h1>
  <p>Lorem ipsum...</p>
</div>
      </div>
</template>
<style scoped>
.home{
    display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
}

#myVideo {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
}

/* Add some content at the bottom of the video/page */
.content {
  position: fixed;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  color: #f1f1f1;
  width: 100%;
  padding: 20px;
}


#myBtn:hover {
  background: #ddd;
  color: black;
}
</style>