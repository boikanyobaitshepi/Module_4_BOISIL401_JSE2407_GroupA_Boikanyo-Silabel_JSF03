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
  
<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.product-info {
  padding: 15px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.product-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.product-price {
  font-size: 16px;
  color: #4a4a4a;
  margin-top: auto;
}
</style>