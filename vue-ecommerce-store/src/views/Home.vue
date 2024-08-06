<template>
  <div class="home">
    <!-- <loading-spinner v-if="isLoading" loading-text="Fetching products..." /> -->

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
// import SortComponent from '../components/SortComponent.vue'
// import LoadingSpinner from '../components/LoadingSpinner.vue'


export default {
    components: {
    // LoadingSpinner
  },
  data() {
    return {
      isLoading: true
    }
  },
  name: 'Home',
  components: {
    ProductGrid,
    FilterComponent,
    // SortComponent
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