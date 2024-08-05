<template>
  <div class="product-view">
    <div v-if="loading" class="loading-container">
      <div class="loading-spinner"></div>
      <p class="loading-text">Loading product...</p>
    </div>
    <div v-else-if="product" class="product-detail">
      <img :src="product.image" :alt="product.title" class="product-image" />
      <div class="product-info">
        <h2 class="product-title">{{ product.title }}</h2>
        <p class="product-description">{{ product.description }}</p>
        <p class="product-price">Price: ${{ product.price.toFixed(2) }}</p>
        <p class="product-category">Category: {{ product.category }}</p>
        <div class="product-rating">
          <span class="rating-stars">
            {{ '★'.repeat(Math.round(product.rating.rate)) }}{{ '☆'.repeat(5 - Math.round(product.rating.rate)) }}
          </span>
          <span class="rating-count">({{ product.rating.count }} reviews)</span>
        </div>
        <router-link to="/" class="back-link">Back to Products</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

export default {
  name: 'ProductView',
  setup() {
    const store = useStore()
    const route = useRoute()

    const product = computed(() => store.state.currentProduct)
    const initialLoading = computed(() => store.state.initialLoading)
    const newDataLoading = computed(() => store.state.newDataLoading)

    onMounted(() => {
      if (store.state.products.length === 0) {
        store.dispatch('fetchProducts')
      }
      store.dispatch('fetchProductById', route.params.id)
    })


    return {
      product,
      initialLoading,
      newDataLoading

    }
  }
}
</script>
<style scoped>
.product-view {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.loading-text {
  margin-top: 20px;
  font-size: 18px;
  color: #333;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.product-detail {
  display: flex;
  gap: 40px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 30px;
}

.product-image {
  max-width: 400px;
  height: auto;
  object-fit: contain;
}

.product-info {
  flex: 1;
}

.product-title {
  font-size: 24px;
  margin-bottom: 15px;
  color: #333;
}

.product-description {
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
  line-height: 1.5;
}

.product-price {
  font-size: 22px;
  font-weight: bold;
  color: #e74c3c;
  margin-bottom: 10px;
}

.product-category {
  font-size: 16px;
  color: #3498db;
  margin-bottom: 10px;
}

.product-rating {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.rating-stars {
  color: #f39c12;
  font-size: 20px;
  margin-right: 10px;
}

.rating-count {
  color: #666;
  font-size: 14px;
}

.back-link {
  display: inline-block;
  background-color: #3498db;
  color: #fff;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.back-link:hover {
  background-color: #2980b9;
}

@media (max-width: 768px) {
  .product-detail {
    flex-direction: column;
  }

  .product-image {
    max-width: 100%;
    margin-bottom: 20px;
  }
}
</style>