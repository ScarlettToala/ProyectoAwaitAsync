<script setup>
import {ref} from 'vue'
import {useFetch } from '@/composable/useFetch.js'
import {useRoute} from 'vue-router'
import RecipeDetail from '@/components/RecipeDetail.vue'

const route = useRoute(); 
const cerca = route.params.category //Aqui se puede escoger las categorias 

console.log(cerca)
const url = ref(`https://www.themealdb.com/api/json/v1/1/search.php?s=${cerca}`)
//Para llamarlo si o si se debe hacer asi
const {data, error, loading, fetchData} = useFetch(url);

console.log( "Categoria:" + data.value);
</script>

<template>
<h1>Receptari Vue + TheMealDB</h1>

<div v-if="loading"> Carregant...</div>
<div v-else-if="error">{{ error }}</div>
<div v-else> 


  <h3>Pinto la llista</h3>
  <div v-if="data && data.meals">
   <div v-for=" data in data.meals">
      <img :src="`${data.strMealThumb}`" :alt="`Foto de ${data.strMeal}`">
      <p>{{data.strMeal}}</p>
      <p>{{data.strArea}} - {{ data.strCategory }}</p>

          <!--Pintar El componenete hijo-->
    

   </div>
   


  </div>
<div v-else> No s'han trobat resultats </div>
</div>
</template>