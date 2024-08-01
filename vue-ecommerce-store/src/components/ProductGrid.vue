<template>
  <div class="product-grid">
    <product-card
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import { computed } from 'vue'
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

    return {
      products
    }
  }
}
</script>