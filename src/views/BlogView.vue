<template>
  <div class="blog-container">
    <div class="parallax">
      <h1 class="blog-title">Blog de Delaitto Tattoo</h1>
    </div>
    <div class="content-wrapper">
      <div class="search-and-filter-wrapper">
        <SearchAndFilter :tags="allTags" @update:filters="updateFilters" />
      </div>
      <transition name="fade" mode="out-in">
        <div v-if="loading" class="loading-spinner">
          <font-awesome-icon :icon="['fas', 'spinner']" spin size="3x" />
        </div>
        <div v-else-if="error" class="error-message">
          <font-awesome-icon :icon="['fas', 'exclamation-circle']" size="3x" />
          <p>{{ error }}</p>
        </div>
        <div v-else class="blog-view">
          <transition-group name="list" tag="div" class="blog-list">
            <BlogList :filteredPosts="paginatedPosts" :key="rerenderKey" />
          </transition-group>
          <div v-if="filteredPosts.length > postsPerPage" class="pagination">
            <button 
              :disabled="currentPage === 1" 
              @click="changePage(-1)" 
              class="pagination-button"
            >
              <font-awesome-icon :icon="['fas', 'chevron-left']" />
            </button>
            <span class="page-info">{{ currentPage }} / {{ totalPages }}</span>
            <button 
              :disabled="currentPage === totalPages" 
              @click="changePage(1)" 
              class="pagination-button"
            >
              <font-awesome-icon :icon="['fas', 'chevron-right']" />
            </button>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, watch, defineAsyncComponent } from 'vue';
import { useHead } from '@vueuse/head';
import { getAllPosts } from '../blog/posts';

export default {
  components: {
    BlogList: defineAsyncComponent(() => import('../components/blog/BlogList.vue')),
    SearchAndFilter: defineAsyncComponent(() => import('../components/blog/SearchAndFilter.vue')),
  },
  setup() {
    useHead({
      title: 'Blog de Tatuajes Delaitto | Noticias, Curiosidades y Consejos sobre el mundo de los Tatuajes',
      meta: [
        { name: 'description', content: 'Explora nuestro blog de tatuajes en Leganés. Encuentra consejos, tendencias y noticias sobre el mundo del tatuaje de la mano de los expertos de Delaitto Tattoo.' },
        { name: 'keywords', content: 'blog tatuajes Leganés, consejos tatuajes Madrid, tendencias tatuajes, cuidado tatuajes, Delaitto Tattoo blog' },
        { property: 'og:title', content: 'Blog de Tatuajes Delaitto - Leganés, Madrid' },
        { property: 'og:description', content: 'Descubre las últimas tendencias y consejos sobre tatuajes en nuestro blog.' },
        { property: 'og:image', content: 'https://delaittotattoo.es/blog.webp' },
        { property: 'og:url', content: 'https://delaittotattoo.es/blog' },
        { property: 'og:type', content: 'website' },
      ],
      link: [
        { rel: 'canonical', href: 'https://delaittotattoo.es/blog' },
      ],
    });

    const posts = ref([]);
    const filteredPosts = ref([]);
    const loading = ref(true);
    const error = ref(null);
    const filters = ref({
      searchTerm: '',
      selectedCategories: [],
    });
    const currentPage = ref(1);
    const postsPerPage = 6;
    const rerenderKey = ref(0);

    const totalPages = computed(() => Math.ceil(filteredPosts.value.length / postsPerPage));

    const paginatedPosts = computed(() => {
      const start = (currentPage.value - 1) * postsPerPage;
      const end = start + postsPerPage;
      return filteredPosts.value.slice(start, end);
    });

    const updateFilters = (newFilters) => {
      filters.value = newFilters;
      currentPage.value = 1;
      applyFilters();
    };

    const applyFilters = () => {
      const { searchTerm, selectedCategories } = filters.value;
      filteredPosts.value = posts.value.filter((post) => {
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                              post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategories = selectedCategories.length === 0 || selectedCategories.every(category => post.tags.includes(category));
        return matchesSearch && matchesCategories;
      });
      rerenderKey.value += 1;
    };

    const changePage = (direction) => {
      currentPage.value += direction;
    };

    onMounted(async () => {
      try {
        posts.value = await getAllPosts();
        filteredPosts.value = posts.value;
      } catch (e) {
        error.value = "Error al cargar los artículos. Por favor, inténtalo de nuevo más tarde.";
      } finally {
        loading.value = false;
      }
    });

    watch(filters, applyFilters);

    const allTags = computed(() => {
      return [...new Set(posts.value.flatMap(post => post.tags))];
    });

    return {
      filteredPosts,
      paginatedPosts,
      loading,
      error,
      updateFilters,
      currentPage,
      totalPages,
      changePage,
      postsPerPage,
      rerenderKey,
      allTags,
    };
  },
};
</script>

<style scoped>
.blog-container {
  color: var(--color-text);
  min-height: 100vh;
}

.parallax {
  background-image: url("/blog.webp");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.parallax::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(26, 32, 44, 0.5), rgba(26, 32, 44, 0.8));
}

.blog-title {
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  position: relative;
  z-index: 1;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.search-and-filter-wrapper {
  margin-bottom: 40px;
}

.blog-view {
  border-radius: 8px;
  padding: 20px;
}

.blog-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  justify-content: center;
  width: 100%;
}

.loading-spinner, .error-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  color: var(--color-primary);
}

.error-message p {
  margin-top: 1rem;
  text-align: center;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
}

.pagination-button {
  background-color: var(--color-background-mute);
  border: none;
  color: var(--color-text);
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.pagination-button:hover:not(:disabled) {
  background-color: var(--color-primary);
}

.pagination-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.page-info {
  font-size: 1rem;
  margin: 0 1rem;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
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