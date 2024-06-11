<template>
    <div class="oauth-redirect">
      <div class="loading-container">
        <font-awesome-icon :icon="['fab', 'google']" class="google-icon" size="3x" />
        <div class="loading-circle-container">
          <div class="loading-circle circle-1"></div>
          <div class="loading-circle circle-2"></div>
          <div class="loading-circle circle-3"></div>
        </div>
      </div>
      <p class="message">Redirecting to Google OAuth...</p>
    </div>
  </template>
  
  <script>
  import { onMounted, ref } from 'vue';
  import initiateOAuthFlow from './oauth'; // Import your 'initiateOAuthFlow' function
  
  export default {
    setup() {
      const isLoading = ref(true);
  
      onMounted(async () => {
        // Initiate OAuth flow using 'initiateOAuthFlow' from 'oauth.js'
        await initiateOAuthFlow();
  
        // Once OAuth flow is complete, redirect back to the main app route
        isLoading.value = false;
        this.$router.push('/');
      });
  
      return {
        isLoading,
      };
    },
  };
  </script>
  
  <style scoped>
  .oauth-redirect {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh; /* Fill the viewport height */
    background-color: #f5f5f5; /* Light background color */
  }
  
  .loading-container {
    display: flex;
    align-items: center;
    margin-bottom: 25px;
  }
  
  .google-icon {
    color: #f44336; /* Google red color */
    margin-right: 20px;
    animation: spin 2s linear infinite;
  }
  
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
  .loading-circle-container {
    width: 50px;
    height: 50px;
    position: relative;
  }
  
  .loading-circle {
    position: absolute;
    border-radius: 50%;
    border: 5px solid #ddd;
    border-color: transparent #ddd #ddd transparent; /* Animated border */
    animation: circle-animation 1.2s cubic-bezier(0.5, 0, 1, 1) infinite;
  }
  
  .circle-1 {
    animation-delay: -0.4s;
  }
  
  .circle-2 {
    animation-delay: -0.2s;
  }
  
  @keyframes circle-animation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  
  .message {
    color: #333;
    font-size: 18px;
  }
  </style>