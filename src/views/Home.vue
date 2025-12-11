<script setup>
import { ref } from 'vue'
import { useFetch } from '@/composable/useFetch.js'

const url = ref(`https://www.themealdb.com/api/json/v1/1/random.php`)
const { data, error, loading } = useFetch(url)
</script>

<template>
  <div class="container">

    <h1 class="title">Benvigut a Receptari</h1>

    <!-- RANDOM MEAL -->
    <div v-if="loading" class="loading">Carregant...</div>
    <div v-else-if="error" class="error">{{ error }}</div>

    <div v-else>
      <h2 class="subtitle">Escull una recepta</h2>

      <div v-if="data && data.meals" class="card">
        <div v-for="meal in data.meals" class="meal-card">
          <img :src="meal.strMealThumb" :alt="meal.strMeal" class="meal-img">
          <h3 class="meal-name">{{ meal.strMeal }}</h3>
        </div>
      </div>
    </div>

    <!-- CATEGORY LINKS -->
    <div class="category-links">
      <RouterLink to="/receptes/beef" class="btn">Receptari de carn</RouterLink>
      <RouterLink to="/receptes/chicken" class="btn">Receptari de pollastre</RouterLink>
    </div>

  </div>
</template>

<style scoped>
/* Layout general */
.container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  text-align: center;
  font-family: 'Arial', sans-serif;
}

.title {
  font-size: 32px;
  margin-bottom: 10px;
  font-weight: bold;
}

/* Mensajes de carga o error */
.loading {
  font-size: 20px;
  color: #666;
}

.error {
  color: red;
  font-weight: bold;
}

/* Tarjeta del plato */
.card {
  display: flex;
  justify-content: center;
}

.meal-card {
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  max-width: 350px;
  margin: auto;
}

.meal-img {
  width: 100%;
  border-radius: 12px;
  margin-bottom: 10px;
}

.meal-name {
  font-size: 24px;
  font-weight: 600;
  margin: 10px 0;
}

/* Enlaces de categorías */
.category-links {
  margin-top: 25px;
  display: flex;
  justify-content: center;
  gap: 15px;
}

.btn {
  background: #ff6b6b;
  color: white;
  padding: 12px 18px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s;
}

.btn:hover {
  background: #ff3b3b;
}
</style>
