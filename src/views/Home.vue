<script setup>
import {ref} from 'vue'
import {useFetch }from '@/composable/useFetch.js'

const url = ref(`https://www.themealdb.com/api/json/v1/1/categories.php`)
//Para llamarlo si o si se debe hacer asi
const {data, error, loading, fetchData} = useFetch(url);

console.log(data.value);
</script>

<template>
<h1>Receptari Vue + TheMealDB</h1>
<div v-if="loading"> Carregant...</div>
<div v-else-if="error">{{ error }}</div>
<div v-else> 
  <h3>Pinto la llista</h3>
  <div v-if="data && data.categories">
   <div v-for=" data in data.categories">
        <Router-Link :to="`/receptes/${data.strCategory}`">{{ data.strCategory }}</Router-Link>
   </div>
  </div>
</div>
</template>