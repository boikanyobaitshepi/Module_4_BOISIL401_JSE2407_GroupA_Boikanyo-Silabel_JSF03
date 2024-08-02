import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProductView from '../views/ProductView.vue'
import ProductList from '../components/ProductList.vue'
import ProductDetail from '../components/ProductDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product/:id',
    name: 'ProductView',
    component: ProductView
  },
  { path: '/', name: 'ProductList', component: ProductList },
  { path: '/product/:id', name: 'ProductDetail', component: ProductDetail }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router