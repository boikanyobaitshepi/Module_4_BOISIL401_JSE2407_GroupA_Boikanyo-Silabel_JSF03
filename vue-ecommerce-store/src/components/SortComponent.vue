<template>
  <div class="sort-component">
    <select v-model="selectedSort" @change="sortProducts">
      <option value="">Default Sorting</option>
      <option value="lowToHigh">Price: Low to High</option>
      <option value="highToLow">Price: High to Low</option>
    </select>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'SortComponent',
  setup() {
    const store = useStore()
    const selectedSort = ref('')

    const sortProducts = () => {
      store.commit('setSort', selectedSort.value)
    }

    return {
      selectedSort,
      sortProducts
    }
  }
}
</script>