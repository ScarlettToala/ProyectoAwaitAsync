<script setup>
</script>

<template>
  <nav>
    <header>
      <Router-Link to="/">Home</Router-Link>
    </header>
  </nav>
  <router-view></router-view>
</template>

<style scoped>
nav {
  width: 100%;
  background: #ff7c39;
  padding: 12px 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

header {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  display: flex;
  align-items: center;
  gap: 20px;
}

a {
  padding: 8px 14px;
  color: white;
  font-size: 18px;
  text-decoration: none;
  font-weight: 600;
  border-radius: 8px;
  transition: 0.25s ease;
}

a:hover {
  background: rgba(255, 255, 255, 0.2);
}

a.router-link-active {
  background: rgba(255, 255, 255, 0.3);
}
</style>