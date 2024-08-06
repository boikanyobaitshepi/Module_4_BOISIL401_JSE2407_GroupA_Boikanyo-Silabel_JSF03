<template>
  <div class="filter-sort-component">
    <!-- Category filter dropdown -->
    <div class="category-filter">
      <select v-model="selectedCategory" @change="applyFilters">
        <option value="">All Categories</option>
        <option v-for="category in categories" :key="category" :value="category">
          {{ category }}
        </option>
      </select>
    </div>
    <!-- Price sorting dropdown -->
    <div class="sort-component">
      <select v-model="selectedSort" @change="applyFilters">
        <option value="">Price Sorting</option>
        <option value="lowToHigh">Price: Low to High</option>
        <option value="highToLow">Price: High to Low</option>
      </select>
    </div>
    <!-- Reset button -->
    <button class="reset-button" @click="resetFiltersAndSort">Reset</button>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'FilterSortComponent',
  setup() {
    const store = useStore()

    // Reactive references for selected category and sort
    const selectedCategory = ref('')
    const selectedSort = ref('')

    // Computed property to get categories from the store
    const categories = computed(() => store.state.categories)

    // Fetch categories when the component is mounted
    onMounted(() => {
      store.dispatch('fetchCategories')
    })

    /**
     * Apply both category filter and price sort
     * This function is called when either dropdown changes
     */
    const applyFilters = () => {
      store.commit('setCategory', selectedCategory.value)
      store.commit('setSort', selectedSort.value)
    }

    /**
     * Reset both category filter and price sort
     * This function is called when the reset button is clicked
     */
    const resetFiltersAndSort = () => {
      selectedCategory.value = ''
      selectedSort.value = ''
      store.commit('setCategory', '')
      store.commit('setSort', '')
    }

    return {
      selectedCategory,
      selectedSort,
      categories,
      applyFilters,
      resetFiltersAndSort
    }
  }
}
</script>

<style scoped>
.filter-sort-component {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

select {
  padding: 10px;
  margin-right: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  font-size: 14px;
  cursor: pointer;
}

select:focus {
  outline: none;
  border-color: #007bff;
}

.reset-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.reset-button:hover {
  background-color: #0056b3;
}

.reset-button:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.5);
}
</style>