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
}

.search-icon {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-text-light);
}

.search-input {
  width: 100%;
  padding: 10px 15px 10px 40px;
  border: 1px solid var(--color-border);
  border-radius: 50px;
  background-color: var(--color-background-mute);
  color: var(--color-text);
  font-size: 1rem;
  transition: all 0.3s ease-in-out;
}

.search-input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 2px var(--color-primary-transparent);
}

.search-input::placeholder {
  color: var(--color-text-light);
}
</style>