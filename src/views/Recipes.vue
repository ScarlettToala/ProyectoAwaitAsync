//Debe conetner el searchBar

<script setup>
import { ref } from 'vue'
import { useFetch } from '@/composable/useFetch.js'
import { useRoute } from 'vue-router'
import MealCard from '@/components/MealCard.vue'

const route = useRoute();
const cerca = route.params.category
const url = ref(`https://www.themealdb.com/api/json/v1/1/search.php?s=${cerca}`)
//Para llamarlo si o si se debe hacer asi
const { data, error, loading, fetchData } = useFetch(url);

</script>

<template>
  <h1>Receptari Vue + TheMealDB</h1>

  <div v-if="loading"> Carregant...</div>
  <div v-else-if="error">{{ error }}</div>
  <div v-else>
    <h3>Pinto la llista</h3>
    <!--Si existeixen les receptes-->
    <div v-if="data && data.meals">

      <div class="containerReceptesDetall">

        <div v-for="meal in data.meals" :key="meal.idMeal">
          <MealCard 
            :meal="meal">
          </MealCard>
        </div>

      </div>

    </div>
    <!--No hi han receptes-->
    <div v-else> No hi han receptes d'aquest tipus</div>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
  margin: 20px 0;
  font-size: 32px;
  font-weight: bold;
}

h3 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 22px;
  color: #5a5a5a;
}

/* 📌 Contenedor en grid para visualizar muchas MealCard */
.containerReceptesDetall {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
  padding: 20px;
  max-width: 1200px;
  margin: auto;
}

</style>
