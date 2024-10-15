<template>
  <div class="container">
    <h1 class="blog-title">Blog de Delaitto Tattoo</h1>
    <SearchAndFilter @update:filters="updateFilters" />
    <div class="blog-view">
      <div class="blog-list">
        <BlogList :filteredPosts="filteredPosts" />
      </div>
    </div>
  </div>
</template>

<script>
import BlogList from '../components/BlogList.vue';
import SearchAndFilter from '../components/SearchAndFilter.vue';
import getAllPosts from '../blog/posts';

export default {
  components: {
    BlogList,
    SearchAndFilter,
  },
  data() {
    return {
      posts: [],
      filteredPosts: [],
      filters: {
        searchTerm: '',
        selectedCategory: 'Todos',
      },
    };
  },
  created() {
    this.posts = getAllPosts();
    this.filteredPosts = this.posts;
  },
  methods: {
    updateFilters(filters) {
      this.filters = filters;
      this.applyFilters();
    },
    applyFilters() {
      const { searchTerm, selectedCategory } = this.filters;
      this.filteredPosts = this.posts.filter((post) => {
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory;
        return matchesSearch && matchesCategory;
      });
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.blog-title {
  font-size: 2.5rem;
  text-align: center;
  margin: 70px 0;
}

.parallax {
  background-image: url("/vite.svg");
}

.parallax h1 {
  font-size: 3rem;
  margin-bottom: 10px;
}


.blog-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: var(--color-background);
  color: var(--color-text);
  width: 100%;
  border-radius: 8px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  min-height: 100vh;
}

.blog-header {
  text-align: center;
  margin-bottom: 40px;
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
