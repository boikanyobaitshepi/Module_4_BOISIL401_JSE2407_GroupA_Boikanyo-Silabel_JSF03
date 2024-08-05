<template>
    <div>
      <div v-if="loading" class="loading">Loading products...</div>
      <div v-else-if="error" class="error">{{ error }}</div>
      <div v-else-if="products.length === 0" class="empty">No products found.</div>
      <div v-else class="product-grid">
        <product-card
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </template>
  
  <script>
  import { computed, onMounted, watch } from 'vue'
  import { useStore } from 'vuex'
  import ProductCard from './ProductCard.vue'
  
  export default {
    name: 'ProductGrid',
    components: {
      ProductCard
    },
    setup() {
      const store = useStore()
      const products = computed(() => store.getters.filteredAndSortedProducts)
      const loading = computed(() => store.state.products.loading)
      const error = computed(() => store.state.products.error)
  
      onMounted(() => {
        console.log('Products:', products.value)
      })
  
      watch(products, (newProducts) => {
        console.log('Products updated:', newProducts)
      })
  
      return {
        products,
        loading,
        error
      }
    }
  }
  </script>
  <style scoped>
  .product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    padding: 20px;
  }
  
  @media (min-width: 768px) {
    .product-grid {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
  }
  
  @media (min-width: 1024px) {
    .product-grid {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
  }
  </style>