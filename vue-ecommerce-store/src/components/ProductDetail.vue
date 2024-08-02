<template>
    <div v-if="product" class="product-detail">
      <h2>{{ product.title }}</h2>
      <img :src="product.image" :alt="product.title" class="product-image">
      <p>{{ product.description }}</p>
      <p>Price: ${{ product.price }}</p>
      <p>Category: {{ product.category }}</p>
      <p>Rating: {{ product.rating.rate }} ({{ product.rating.count }} reviews)</p>
      <router-link to="/">Back to Products</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductDetail',
    data() {
      return {
        product: null
      }
    },
    created() {
      // In a real app, you'd fetch the product data based on the route param
      this.product = {
        id: this.$route.params.id,
        title: 'Sample Product',
        description: 'This is a sample product description.',
        price: 39.99,
        category: 'Electronics',
        image: 'https://via.placeholder.com/300',
        rating: { rate: 4.5, count: 100 }
      }
    }
  }
  </script>
  
  <style scoped>
  .product-detail {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }
  .product-image {
    max-width: 100%;
    height: auto;
  }
  </style>