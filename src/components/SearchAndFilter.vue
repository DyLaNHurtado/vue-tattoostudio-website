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
import { ref, watch } from 'vue';
import SearchBar from './SearchBar.vue';
import CategoryChips from './CategoryChips.vue';

export default {
  components: {
    SearchBar,
    CategoryChips,
  },
  emits: ['update:filters'],
  setup(props, { emit }) {
    const searchTerm = ref('');
    const selectedCategory = ref('Todos');
    const categories = ref(['Todos', 'Estilos', 'Cuidados', 'Tendencias', 'Cultura']);

    const handleCategoryChange = (category) => {
      selectedCategory.value = category;
      emitFilters();
    };

    const emitFilters = () => {
      emit('update:filters', { searchTerm: searchTerm.value, selectedCategory: selectedCategory.value });
    };

    watch(searchTerm, emitFilters);

    return {
      searchTerm,
      selectedCategory,
      categories,
      handleCategoryChange,
    };
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
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>