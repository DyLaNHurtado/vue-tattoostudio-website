<template>
  <div class="category-chips">
    <button
      v-for="category in categories"
      :key="category"
      :class="['chip', { 'chip-active': selectedCategory === category }]"
      @click="selectCategory(category)"
    >
      {{ category }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      required: true,
    },
    selectedCategory: {
      type: String,
      default: 'Todos',
    },
  },
  methods: {
    selectCategory(category) {
      this.$emit('update:category', category);
    },
  },
};
</script>

<style scoped>
.category-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

.chip {
  padding: 5px 15px;
  border-radius: 50px;
  border: 1px solid #4a5568;
  background-color: #2d3748;
  color: #e2e8f0;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-size: 0.875rem;
}

.chip:hover {
  background-color: #4a5568;
}

.chip-active {
  background-color: #f56565;
  color: #1a202c;
  border-color: #f56565;
}
</style>