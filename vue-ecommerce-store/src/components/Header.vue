<template>
  <header class="e-commerce-header">
    <div class="logo">MyShop</div>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
    <div class="cart">
      <i class="fas fa-shopping-cart"></i>
      <span class="cart-count">3</span>
    </div>
  </header>
</template>

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

.cart {
  position: relative;
  cursor: pointer;
}

.cart i {
  font-size: 1.2rem;
}

.cart-count {
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