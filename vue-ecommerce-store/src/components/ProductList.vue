<template>
    <div class="product-grid">
      <div v-for="product in products" :key="product.id" class="product-card">
        <div class="product-image-container">
          <img :src="product.image" :alt="product.title" class="product-image">
        </div>
        <div class="product-details">
          <h3 class="product-title">{{ product.title }}</h3>
          <p class="product-price">Price: ${{ product.price.toFixed(2) }}</p>
          <p class="product-category">Category: {{ product.category }}</p>
          <router-link :to="{ name: 'ProductDetail', params: { id: product.id } }" class="view-details-btn">
            View Details
          </router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'ProductList',
    data() {
      return {
        products: []
      }
    },
    created() {
      this.fetchProducts();
    },
    methods: {
      async fetchProducts() {
        try {
          const response = await axios.get('https://fakestoreapi.com/products');
          this.products = response.data;
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    padding: 20px;
  }
  
  .product-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: box-shadow 0.3s ease;
  }
  
  .product-card:hover {
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
  
  .product-image-container {
  height: 200px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
}
  .product-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  
  .product-details {
    padding: 15px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
  
  .product-title {
    margin: 0 0 10px;
    font-size: 1.1em;
    /* Limit to 2 lines */
    display: -webkit-box;
    /* -webkit-line-clamp: 2; */
    -webkit-box-orient: vertical;
    overflow: hidden;
    /* -webkit-line-clamp: 2; */
    height: 2.7em;
  }
  
  .product-price, .product-category {
    margin: 5px 0;
    font-size: 0.9em;
  }
  
  .view-details-btn {
    margin-top: auto;
    display: inline-block;
    padding: 8px 15px;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    text-align: center;
    transition: background-color 0.3s ease;
  }
  
  .view-details-btn:hover {
    background-color: #0056b3;
  }
  </style>