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
  emits: ['update:category'],
  setup(props, { emit }) {
    const selectCategory = (category) => {
      emit('update:category', category);
    };

    return {
      selectCategory,
    };
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
  padding: 8px 16px;
  border-radius: 50px;
  border: 1px solid var(--color-border);
  background-color: var(--color-background-mute);
  color: var(--color-text);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-size: 0.875rem;
  font-weight: 500;
}

.chip:hover {
  background-color: var(--color-background-soft);
  transform: translateY(-2px);
}

.chip-active {
  background-color: var(--color-primary);
  color: var(--color-text-inverse);
  border-color: var(--color-primary);
}

.chip-active:hover {
  background-color: var(--color-primary-dark);
}
</style>