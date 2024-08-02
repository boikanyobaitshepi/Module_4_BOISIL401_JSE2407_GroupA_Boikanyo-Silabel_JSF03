<template>
    <div class="product-grid">
      <div v-for="product in products" :key="product.id" class="product-card">
        <img :src="product.image" :alt="product.title" class="product-image">
        <h3>{{ product.title }}</h3>
        <p>Price: ${{ product.price }}</p>
        <p>Category: {{ product.category }}</p>
        <router-link :to="{ name: 'ProductDetail', params: { id: product.id } }">
          View Details
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductList',
    data() {
      return {
        products: [
          { id: 1, title: 'Product 1', price: 19.99, category: 'Electronics', image: 'https://via.placeholder.com/150' },
          { id: 2, title: 'Product 2', price: 29.99, category: 'Clothing', image: 'https://via.placeholder.com/150' },
          // Add more products as needed
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
  }
  .product-card {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: center;
  }
  .product-image {
    max-width: 100%;
    height: auto;
  }
  </style>