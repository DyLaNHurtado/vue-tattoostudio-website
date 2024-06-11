import { defineStore } from 'pinia';
import  httpService  from './httpService';


export const useMyBusinessApi = defineStore('myBusinessApi', {
  state: {
    accessToken: null, // Access token for API calls
    businessData: null, // Business data from My Business API
    reviews: null, // Reviews data from My Business API
    photos: null, // Photos data from My Business API (optional)
    posts: null, // Posts data from My Business API (optional)
    error: null, // Error state for API calls
    loading: false, // Loading state for API calls
  },
  getters: {
    getBusinessData(state) {
      return state.businessData;
    },
    getReviews(state) {
      return state.reviews;
    },
    getPhotos(state) {
      return state.photos;
    },
    getPosts(state) {
      return state.posts;
    },
    getError(state) {
      return state.error;
    },
    isLoading(state) {
      return state.loading;
    },
  },
  actions: {
    async fetchAccessToken() {
      if (this.accessToken) {
        return; // Already have access token
      }

      // Implement logic to fetch access token using OAuth flow
      // Update state with access token
    },

    async fetchDataFromMyBusinessApi(url) {
      this.setLoading(true);
      this.error = null;
    
      try {
        const headers = {
          Authorization: `Bearer ${accessToken}`
        };
        
        const response = await httpService.get(url, { headers });
        return response.data;
      } catch (error) {
        this.setError(error);
        console.error(`Error fetching data from ${url}:`, error);
      } finally {
        this.setLoading(false);
      }
    },

    async fetchBusinessData() {
      const businessId = 'YOUR_BUSINESS_ID';
      this.businessData = await this.fetchDataFromMyBusinessApi(`https://mybusiness.googleapis.com/v3/businesses/${businessId}`);
    },

    async fetchBusinessReviews() {
      const businessId = 'YOUR_BUSINESS_ID';
      this.reviews = await this.fetchDataFromMyBusinessApi(`https://mybusiness.googleapis.com/v3/businesses/${businessId}/reviews`);
    },

    async fetchBusinessPhotos() {
      const businessId = 'YOUR_BUSINESS_ID';
      this.photos = await this.fetchDataFromMyBusinessApi(`https://mybusiness.googleapis.com/v3/businesses/${businessId}/photos`);
    },

    async fetchBusinessPosts() {
      const businessId = 'YOUR_BUSINESS_ID';
      this.posts = await this.fetchDataFromMyBusinessApi(`https://mybusiness.googleapis.com/v3/businesses/${businessId}/posts`);
    },

    setError(error) {
      this.error = error;
    },
    setLoading(loading) {
      this.loading = loading;
    },
  },
});