<template>
  <div class="product-card">
    <img :src="product.image" :alt="product.name" class="product-image">
    <h3 class="product-name">{{ product.name }}</h3>
    <p class="product-price">${{ product.price.toFixed(2) }}</p>
    <div class="product-actions">
      <button @click="addToCart" class="btn btn-cart">
        <i class="fas fa-shopping-cart"></i> Add to Cart
      </button>
      <button @click="addToWishlist" class="btn btn-wishlist">
        <i class="fas fa-heart"></i> Wishlist
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
     ...mapActions(['addToCart', 'addToWishlist'])
  }
}
</script>

<style scoped>
.product-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem;
  width: 250px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
}

.product-name {
  margin: 0.5rem 0;
  font-size: 1.2rem;
}

.product-price {
  font-weight: bold;
  color: #e44d26;
}

.product-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}

.btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-cart {
  background-color: #4CAF50;
  color: white;
}

.btn-cart:hover {
  background-color: #45a049;
}

.btn-wishlist {
  background-color: #ff9800;
  color: white;
}

.btn-wishlist:hover {
  background-color: #e68a00;
}
</style>