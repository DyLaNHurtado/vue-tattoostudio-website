<template>
  <div class="blog-container">
    <div class="blog-cards">
      <router-link
        v-for="post in posts"
        :key="post.slug"
        :to="`/blog/${post.slug}`"
        class="blog-card"
      >
        <div class="card-image">
          <img :src="`/blog-images/${post.slug}.webp`" :alt="post.title" />
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
import getAllPosts from '../blog/posts';

export default {
  data() {
    return {
      posts: [],
    };
  },
  created() {
    this.posts = getAllPosts();
  },
};
</script>

<style scoped>
.blog-container {
  text-align: center;
  gap: 15px;
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.blog-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 40px;
  width: 100%;
}

.blog-card {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  text-decoration: none;
  color: var(--color-text);
  border: 1px solid var(--color-border);
  transition: transform 0.3s ease, border-color 0.3s ease;
  display: flex;
  flex-direction: column;
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
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.blog-card:hover .card-image img {
  transform: scale(1.05);
}

.card-content {
  padding: 20px;
  background-color: var(--color-background-mute);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.card-content h2 {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--color-heading);
  margin: 0 0 10px 0;
}

.card-content p {
  font-size: 1rem;
  margin: 0;
}
</style>