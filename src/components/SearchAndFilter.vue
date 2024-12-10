<template>
  <div class="search-and-filter">
    <SearchBar v-model="searchTerm" @update:modelValue="handleSearch" />
    <CategoryChips
      :categories="['Todos', ...categories]"
      :selectedCategory="selectedCategory"
      @update:category="handleCategoryChange"
    />
  </div>
</template>

<script>
import { ref, watch, computed, defineAsyncComponent } from 'vue';

export default {
  components: {
    SearchBar: defineAsyncComponent(() => import('./SearchBar.vue')),
    CategoryChips: defineAsyncComponent(() => import('./CategoryChips.vue')),
  },
  props: {
    tags: {
      type: Array,
      required: true,
    },
  },
  emits: ['update:filters'],
  setup(props, { emit }) {
    const searchTerm = ref('');
    const selectedCategory = ref('Todos');
    
    const categories = computed(() => {
      return [...new Set(props.tags)].sort();
    });

    const emitFilters = () => {
      emit('update:filters', { 
        searchTerm: searchTerm.value, 
        selectedCategory: selectedCategory.value 
      });
    };

    const handleSearch = (value) => {
      searchTerm.value = value;
      emitFilters();
    };

    const handleCategoryChange = (category) => {
      selectedCategory.value = category;
      emitFilters();
    };

    watch(() => props.tags, () => {
      emitFilters();
    }, { immediate: true });

    return {
      searchTerm,
      selectedCategory,
      categories,
      handleSearch,
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
}
</style>