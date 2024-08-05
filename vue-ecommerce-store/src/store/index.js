import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    products: [],
    categories: [],
    loading: false,
    currentProduct: null,
    filter: null,
    sort: null
  },
  mutations: {
    setProducts(state, products) {
      state.products = products
    },
    setCategories(state, categories) {
      state.categories = categories
    },
    setLoading(state, loading) {
      state.loading = loading
    },
    setCurrentProduct(state, product) {
      state.currentProduct = product
    },
    setFilter(state, filter) {
      state.filter = filter
    },
    setSort(state, sort) {
      state.sort = sort
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      commit('setLoading', true)
      try {
        const response = await axios.get('https://fakestoreapi.com/products')
        commit('setProducts', response.data)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
      commit('setLoading', false)
    },
    async fetchCategories({ commit }) {
      try {
        const response = await axios.get('https://fakestoreapi.com/products/categories')
        commit('setCategories', response.data)
      } catch (error) {
        console.error('Error fetching categories:', error)
      }
    },
    async fetchProductById({ commit }, id) {
      commit('setLoading', true)
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
        commit('setCurrentProduct', response.data)
      } catch (error) {
        console.error('Error fetching product:', error)
      }
      commit('setLoading', false)
    }
  },
  getters: {
    filteredAndSortedProducts: (state) => {
      let result = state.products

      if (state.filter) {
        result = result.filter(product => product.category === state.filter)
      }

      if (state.sort === 'lowToHigh') {
        result = [...result].sort((a, b) => a.price - b.price)
      } else if (state.sort === 'highToLow') {
        result = [...result].sort((a, b) => b.price - a.price)
      }

      return result
    }
  }
})