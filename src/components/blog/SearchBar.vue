<template>
  <div class="search-bar">
    <font-awesome-icon :icon="['fas', 'search']" class="search-icon" />
    <input
      type="text"
      v-model="searchTerm"
      @input="handleInput"
      placeholder="Buscar artículos..."
      class="search-input"
    />
  </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  props: {
    modelValue: String,
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const searchTerm = ref(props.modelValue || '');

    const handleInput = () => {
      emit('update:modelValue', searchTerm.value);
    };

    watch(() => props.modelValue, (newValue) => {
      searchTerm.value = newValue;
    });

    return {
      searchTerm,
      handleInput,
    };
  },
};
</script>

<style scoped>
.search-bar {
  position: relative;
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: var(--color-background-mute);
  border-radius: 50px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.search-icon {
  margin-left: 15px;
  color: var(--color-primary);
}

.search-input {
  width: 100%;
  padding: 10px 15px 10px 40px;
  border: none;
  border-radius: 50px;
  background-color: transparent;
  color: var(--color-text);
  font-size: 1rem;
  transition: all 0.3s ease-in-out;
}

.search-input:focus {
  outline: none;
  box-shadow: 0 0 0 2px var(--color-primary-transparent);
}

.search-input::placeholder {
  color: var(--color-indigo);
}
</style>