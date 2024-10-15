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
  }
  
  .search-input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 500px;
  }
  </style>
  