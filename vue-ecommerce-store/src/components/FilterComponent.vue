<template>
  <div class="filter-component">
    <select v-model="selectedCategory" @change="filterProducts">
      <option value="">All Categories</option>
      <option v-for="category in categories" :key="category" :value="category">
        {{ category }}
      </option>
    </select>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'FilterComponent',
  setup() {
    const store = useStore()
    const selectedCategory = ref('')
    const categories = computed(() => store.state.categories)

    const filterProducts = () => {
      store.commit('setFilter', selectedCategory.value)
    }

    return {
      selectedCategory,
      categories,
      filterProducts
    }
  }
}
</script>