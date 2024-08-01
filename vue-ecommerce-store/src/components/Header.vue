<template>
  <header class="e-commerce-header">
    <div class="logo">MyShop</div>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
      </ul>
    </nav>
    <div class="icons">
      <div class="icon-wrapper wishlist">
        <i class="fas fa-heart"></i>
        <span class="counter">{{ wishlistCount }}</span>
      </div>
      <div class="icon-wrapper cart">
        <i class="fas fa-shopping-cart"></i>
        <span class="counter">{{ cartCount }}</span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      cartCount: 0,
      wishlistCount: 0
    }
  },
  // In a real application, you'd likely use Vuex to manage these counts
  mounted() {
    // Simulating cart and wishlist counts
    this.cartCount = 3;
    this.wishlistCount = 2;
  }
}
</script>

<style scoped>
.e-commerce-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);
  color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
}

nav ul {
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

nav ul li {
  margin: 0 1rem;
}

nav ul li a {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

nav ul li a:hover {
  color: #ffd700;
}

.icons {
  display: flex;
  align-items: center;
}

.icon-wrapper {
  position: relative;
  margin-left: 1.5rem;
  cursor: pointer;
}

.icon-wrapper i {
  font-size: 1.2rem;
}

.counter {
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #ffd700;
  color: #333;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 0.8rem;
  font-weight: bold;
}
</style>