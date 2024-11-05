<template>
  <div class="search-bar">
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
export default {
  props: {
    value: String,
  },
  data() {
    return {
      searchTerm: this.value || '',
    };
  },
  methods: {
    handleInput() {
      this.$emit('input', this.searchTerm);
    },
  },
};
</script>

<style scoped>
.search-bar {
  margin-bottom: 20px;
  width: 100%;
}

.search-input {
  width: 100%;
  padding: 10px 15px;
  border: 1px solid #4a5568;
  border-radius: 50px;
  background-color: #2d3748;
  color: #e2e8f0;
  font-size: 1rem;
  transition: all 0.3s ease-in-out;
}

.search-input:focus {
  outline: none;
  border-color: #f56565;
  box-shadow: 0 0 0 2px rgba(245, 101, 101, 0.2);
}

.search-input::placeholder {
  color: #a0aec0;
}
</style>