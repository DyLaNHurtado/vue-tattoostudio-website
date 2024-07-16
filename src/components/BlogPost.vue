<template>
    <div class="blog-post">
      <article v-html="postContent"></article>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';
  
  export default {
    setup() {
      const route = useRoute();
      const postContent = ref('');
  
      // Importa y muestra el contenido del artículo basado en el slug del route
      import(`../blog/${route.params.slug}.md`).then((module) => {
        postContent.value = module.default;
      });
  
      return { postContent };
    },
  };
  </script>
  
  <style scoped>
  .blog-post {
    max-width: 800px;
    margin: 40px auto;
    padding: 20px;
    background-color: var(--color-background);
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .blog-post article {
    line-height: 1.6;
    font-size: 1.1rem;
    color: var(--color-background-mute);
  }
  
  .blog-post h1,
  .blog-post h2,
  .blog-post h3,
  .blog-post h4,
  .blog-post h5,
  .blog-post h6 {
    margin-top: 30px;
    margin-bottom: 20px;
  }
  
  .blog-post p {
    margin-bottom: 15px;
  }
  
  .blog-post img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin: 20px 0;
  }
  
  .blog-post a {
    color: var(--color-primary);
    text-decoration: underline;
  }
  
  .blog-post a:hover {
    color: var(--color-primary-hover);
    text-decoration: none;
  }
  
  @media (max-width: 768px) {
    .blog-post {
      padding: 15px;
    }
  }
  
  @media (max-width: 576px) {
    .blog-post {
      max-width: 90%;
    }
  }
  </style>