<template>
  <div class="search-and-filter">
    <SearchBar v-model="searchTerm" @update:modelValue="handleSearch" />
    <CategoryChips
      :categories="categories"
      :selectedCategories="selectedCategories"
      @update:categories="handleCategoryChange"
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
    const selectedCategories = ref([]);
    
    const categories = computed(() => {
      return [...new Set(props.tags)].sort();
    });

    const emitFilters = () => {
      emit('update:filters', { 
        searchTerm: searchTerm.value, 
        selectedCategories: selectedCategories.value 
      });
    };

    const handleSearch = (value) => {
      searchTerm.value = value;
      emitFilters();
    };

    const handleCategoryChange = (categories) => {
      selectedCategories.value = categories;
      emitFilters();
    };

    watch(() => props.tags, () => {
      emitFilters();
    }, { immediate: true });

    return {
      searchTerm,
      selectedCategories,
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
  background-color: var(--color-background-mute);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>