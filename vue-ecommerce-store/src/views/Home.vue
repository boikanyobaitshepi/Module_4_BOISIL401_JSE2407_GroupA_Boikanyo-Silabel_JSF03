<template>
  <div class="home">
    <h1>Our Products</h1>
    <filter-component />
    <sort-component />
    <product-grid />
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import ProductGrid from '../components/ProductGrid.vue'
import FilterComponent from '../components/FilterComponent.vue'
import SortComponent from '../components/SortComponent.vue'

export default {
  name: 'Home',
  components: {
    ProductGrid,
    FilterComponent,
    SortComponent
  },
  setup() {
    const store = useStore()

    onMounted(() => {
      store.dispatch('fetchProducts')
      store.dispatch('fetchCategories')
    })
  }
}
</script>