<template>
  <div class="blog-container">
    <div class="parallax">
      <h1 class="blog-title">Blog de Delaitto Tattoo</h1>
    </div>
    <div class="content-wrapper">
      <SearchAndFilter @update:filters="updateFilters" />
      <div class="blog-view">
        <div class="blog-list">
          <BlogList :filteredPosts="filteredPosts" />
        </div>
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
.blog-container {
  background-color: #1a202c;
  color: #e2e8f0;
  min-height: 100vh;
}

.parallax {
  background-image: url("/placeholder.svg?height=400&width=1200&text=Delaitto+Tattoo+Blog");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.blog-title {
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.blog-view {
  background-color: #2d3748;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.blog-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  justify-content: center;
  width: 100%;
}

@media (max-width: 768px) {
  .blog-list {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .parallax {
    height: 200px;
  }

  .blog-title {
    font-size: 2.5rem;
  }
}
</style>