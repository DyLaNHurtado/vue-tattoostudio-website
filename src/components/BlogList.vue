<template>
    <div class="blog-container">
    <div class="blog-cards">
        <router-link v-for="post in posts" :key="post.slug" :to="`/blog/${post.slug}`" class="blog-card">
            <div class="card-image">
                <img :src="`/blog-images/${post.slug}.webp`" :alt="post.title">
            </div>
            <div class="card-content">
                <h2>{{ post.title }}</h2>
                <p>{{ post.excerpt }}</p>
            </div>
        </router-link>
    </div>
</div>
</template>
  
  <script>
  import posts from '../blog/posts'; // Importa el array de posts desde posts.js
  
  export default {
    data() {
      return {
        posts: [], // Inicializa posts como un array vacío
      };
    },
    created() {
      this.posts = posts; // Asigna el array de posts importado a la variable local posts
    },
  };
  </script>
  
  <style scoped>

  .blog-container{
    text-align: center;
    gap: 15px;
    display: flex;
    flex-direction: column;
  }

  .blog-list h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
  
  .blog-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    text-align: center;
    margin-top: 40px;
    min-height: 100%;
    min-width: 100%;
  }
  
  .blog-card {
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    text-decoration: none;
    color: var(--color-text);
    min-width: 100%;
    min-height: 100%;
    border: 1px solid var(--color-border);
    transition: transform 0.3s ease; /* Para el efecto de hover */
  }
  
  .blog-card:hover {
    transform: translateY(-5px);
  border-color: var(--color-primary);
  }
  
  .card-image {
    height: 200px;
    overflow: hidden;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  
  .card-image img {
    width: 100%;
    object-fit: cover;
    border-radius: 8px;
  }


  .card-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; /* Asegurar que el overlay ocupe toda la altura */
  background: rgba(0, 0, 0, 0.6);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* Asegurar que el contenido esté al final del overlay */
  text-align: left;
  border-radius: 8px; /* Ajuste del borde del overlay */
}

.card-content h2 {
  font-size: 18px;
  font-weight: bold;
  color: var(--color-heading);
}

.card-content p {
  font-size: 14px;
  margin-bottom: 10px;
}
  </style>
  