<template>
  <div v-if="loading" class="loading">Loading...</div>
  <div v-else-if="product" class="product-detail">
    <img :src="product.image" :alt="product.title" />
    <h2>{{ product.title }}</h2>
    <p>{{ product.description }}</p>
    <p>Price: ${{ product.price }}</p>
    <p>Category: {{ product.category }}</p>
    <p>Rating: {{ product.rating.rate }} ({{ product.rating.count }} reviews)</p>
    <router-link to="/">Back to Products</router-link>
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
    const loading = computed(() => store.state.loading)

    onMounted(() => {
      store.dispatch('fetchProductById', route.params.id)
    })

    return {
      product,
      loading
    }
  }
}
</script>