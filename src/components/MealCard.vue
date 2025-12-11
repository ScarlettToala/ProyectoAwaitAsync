//El component MealCard, rebrà via props un objecte amb tots els atributs del plat. 

<script setup>
import {ref} from 'vue'

const props = defineProps(
    {
        meal: Object
    }
)
</script>   

<template>
<h1>MealCard</h1>
<RouterLink :to="{name:'Meal', params:{idMeal:props.meal.idMeal}}">
<img :src="`${props.meal.strMealThumb}`" :alt="`Foto de ${props.meal.strMeal}`">
          <p>{{ props.meal.strMeal }}</p>
          <p>{{ props.meal.strArea }} - {{ props.meal.strCategory }}</p>
</RouterLink>


</template>

<style scoped>
h1 {
  display: none; /* ocultamos el título “MealCard” */
}

/* 📦 Tarjeta */
:deep(a) {
  display: block;
  background: #ffffff;
  border-radius: 14px;
  padding: 15px;
  text-decoration: none;
  color: #333;
  box-shadow: 0 4px 12px rgba(0,0,0,0.12);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

/* Hover efecto elegante */
:deep(a:hover) {
  transform: translateY(-5px);
  box-shadow: 0 8px 18px rgba(0,0,0,0.2);
}

/* Imagen del plato */
img {
  width: 100%;
  border-radius: 12px;
  margin-bottom: 10px;
}

/* Nombre del plato */
p:first-of-type {
  font-size: 20px;
  font-weight: bold;
  margin: 6px 0;
}

/* Área + categoría */
p:last-of-type {
  font-size: 14px;
  color: #777;
}
</style>
