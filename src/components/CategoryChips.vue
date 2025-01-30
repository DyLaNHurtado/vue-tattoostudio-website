<template>
  <div class="category-chips">
    <button
      v-for="category in categories"
      :key="category"
      :class="['chip', { 'chip-active': selectedCategories.includes(category) }]"
      @click="toggleCategory(category)"
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
    selectedCategories: {
      type: Array,
      default: () => [],
    },
  },
  emits: ['update:categories'],
  setup(props, { emit }) {
    const toggleCategory = (category) => {
      const index = props.selectedCategories.indexOf(category);
      if (index === -1) {
        emit('update:categories', [...props.selectedCategories, category]);
      } else {
        emit('update:categories', props.selectedCategories.filter(c => c !== category));
      }
    };

    return {
      toggleCategory,
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
  font-weight: bold;
}

.chip:hover {
  background-color: var(--color-background-soft);
  transform: translateY(-2px);
}

.chip-active {
  background-color: var(--color-primary);
  color: var(--color-text-invert);
  border-color: var(--color-primary);
}

.chip-active:hover {
  background-color: var(--color-primary-dark);
}
</style>