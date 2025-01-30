<template>
  <div class="blog-cards">
    <router-link
      v-for="post in filteredPosts"
      :key="post.slug"
      :to="`/blog/${post.slug}`"
      class="blog-card"
    >
      <div class="card-image">
        <img :src="`/blog-images/${post.slug}.webp`" :alt="post.title" loading="lazy" />
      </div>
      <div class="card-content">
        <!-- Mostrar categorias/tags en la card  de forma estetica en el UI-->
        <div class="card-tags">
          <span class="card-category" v-for="tag in post.tags">{{ tag }}</span>
        </div>
        <h1>{{ post.title }}</h1>
        <p>{{ post.excerpt }}</p>
        <div class="card-footer">
          <span class="card-date">{{ formatDate(post.date) }}</span>
          <span class="card-read-more">
            Leer más
            <font-awesome-icon :icon="['fas', 'arrow-right']" />
          </span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    filteredPosts: {
      type: Array,
      required: true,
    },
  },
  setup() {
    const formatDate = (dateString) => {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('es-ES', options);
    };

    return {
      formatDate,
    };
  },
};
</script>

<style scoped>
.blog-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  width: 100%;
}

.blog-card {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  text-decoration: none;
  background-color: var(--color-background-mute);
  color: var(--color-text);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

.blog-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.card-image {
  height: 200px;
  overflow: hidden;
  background-color: var(--color-background-soft);
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
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-category {
  font-size: 0.875rem;
  color: var(--color-primary);
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 5px;
  line-height: 1.4;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 10px;
}

.card-tags .card-category {
  background-color: var(--color-background-soft);
  padding: 2px 8px;
  border-radius: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-content h1 {
  font-size: 1.25rem;
  font-weight: bold;
  color: var(--color-heading);
  margin: 0 0 10px 0;
  line-height: 1.4;
}

.card-content p {
  font-size: 1rem;
  margin: 0 0 15px 0;
  color: var(--color-text-light);
  line-height: 1.6;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}

.card-date {
  font-size: 0.875rem;
  color: var(--color-text-light);
}

.card-read-more {
  color: var(--color-primary);
  font-weight: 600;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  transition: color 0.3s ease;
}

.card-read-more svg {
  margin-left: 5px;
  transition: transform 0.3s ease;
}

.blog-card:hover .card-read-more {
  color: var(--color-primary-dark);
}

.blog-card:hover .card-read-more svg {
  transform: translateX(3px);
}
</style>