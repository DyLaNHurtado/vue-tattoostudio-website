<template>
    <div class="parallax">
        <h1>Blog</h1>
        <p class="subheading">Explora nuestros artículos más recientes</p>
    </div>
    <div class="blog-view">
        <div class="blog-list">
            <BlogList />
        </div>
    </div>
</template>
  
  <script>
  import BlogList from '../components/BlogList.vue';
  
  export default {
    components: {
      BlogList,
    },
  };
  </script>
  
  <style scoped>

.parallax {
  background-image: url("/vite.svg");
}

  .blog-view {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: var(--color-background);
    color: var(--color-text);
    min-height: 100%;
    min-width: 100%;
  }
  
  .blog-header {
    text-align: center;
  }
  
  .blog-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    justify-content: center;
    width: 100%;
    max-width: 1200px;
  }
  
  @media (max-width: 768px) {
    .blog-list {
      grid-template-columns: 1fr;
      gap: 20px;
    }
  }
  </style>
  