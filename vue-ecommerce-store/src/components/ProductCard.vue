<template>
    <div class="product-card">
      <img :src="product.image" :alt="product.title" />
      <h3>{{ product.title }}</h3>
      <p>Price: ${{ product.price }}</p>
      <p>Category: {{ product.category }}</p>
      <router-link :to="{ name: 'ProductView', params: { id: product.id } }">
        View Details
      </router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductCard',
    props: {
      product: {
        type: Object,
        required: true
      }
    }
  }
  </script>