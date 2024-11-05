<template>
  <div class="search-and-filter">
    <SearchBar v-model="searchTerm" />
    <CategoryChips
      :categories="categories"
      :selectedCategory="selectedCategory"
      @update:category="handleCategoryChange"
    />
  </div>
</template>

<script>
import SearchBar from './SearchBar.vue';
import CategoryChips from './CategoryChips.vue';

export default {
  components: {
    SearchBar,
    CategoryChips,
  },
  data() {
    return {
      searchTerm: '',
      selectedCategory: 'Todos',
      categories: ['Todos', 'Estilos', 'Cuidados', 'Tendencias', 'Cultura'],
    };
  },
  methods: {
    handleCategoryChange(category) {
      this.selectedCategory = category;
      this.$emit('update:filters', { searchTerm: this.searchTerm, selectedCategory: this.selectedCategory });
    },
  },
  watch: {
    searchTerm() {
      this.$emit('update:filters', { searchTerm: this.searchTerm, selectedCategory: this.selectedCategory });
    },
  },
};
</script>

<style scoped>
.search-and-filter {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  margin: 0 auto 40px;
}

@media (min-width: 768px) {
  .search-and-filter {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}
</style>