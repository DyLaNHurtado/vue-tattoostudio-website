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
    flex-direction: row;
    gap: 10px;
    margin-bottom: 20px;
  }
  
  .chip {
    padding: 5px 15px;
    border-radius: 50px;
    border: 1px solid #ccc;
    background-color: #f0f0f0;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .chip:hover {
    background-color: #ddd;
  }
  
  .chip-active {
    background-color: #ff6b6b;
    color: white;
    border-color: #ff6b6b;
  }
  </style>
  