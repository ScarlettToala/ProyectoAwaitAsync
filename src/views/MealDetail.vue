/*Recie el identificadro del plato como parametro de url(meal/53358)*/
<script setup>
import { useFetch } from '@/composable/useFetch'
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'


const route = useRoute()
const idMeal = parseInt(route.params.idMeal)

const url = ref(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
const { data, error, loading } = useFetch(url)

//Mostrar els ingredients de forma més organitzada
const ingredients = ref([])

watch(data, (nuevo) => {
    if (!nuevo || !nuevo.meals) return

    const meal = nuevo.meals[0]
    const list = []

    for (let i = 1; i <= 20; i++) {
        const ing = meal[`strIngredient${i}`]
        const measure = meal[`strMeasure${i}`]

        if (ing && ing.trim() !== "") {
            list.push({ ingredient: ing, measure })
        }
    }

    ingredients.value = list
})

</script>

<template>
    <h1>Has Accedido al Meal Detail</h1>
    <!--Primer Fem laproba de que carrega els elements-->
    <div v-if="loading" class="loading">Carregant...</div>

    <div v-else-if="error" class="error">{{ error }}</div>

    <div v-else class="data">
        <!--Existeinxen les dades?-->
        <div v-if="data && data.meals">
            <div v-for="meal in data.meals">
                <h2>{{ meal.strMeal }}</h2>
                <img :src="`${meal.strMealThumb}`" :alt="`Foto de ${meal.strMealThumb}`">

                <div v-if="ingredients.length">
                    <h3>Ingredients</h3>

                    <ul>
                        <li v-for="item in ingredients" :key="item.ingredient">
                            {{ item.measure }} — {{ item.ingredient }}
                        </li>
                    </ul>
                </div>

                <p>Video de Youtube</p>
                <video :src="`${meal.strYoutube}`" width="320" height="240" controls></video>
            </div>
        </div>

        <div v-else> No hi ha registre</div>
    </div>

</template>

<style scoped>
/* Título principal */
h1 {
    text-align: center;
    font-size: 32px;
    margin: 20px 0;
    font-weight: bold;
    color: #333;
}

/* Mensajes de carga o error */
.loading {
    text-align: center;
    font-size: 20px;
    color: #555;
}

.error {
    text-align: center;
    font-size: 18px;
    color: red;
    font-weight: bold;
}

/* Contenedor principal de la receta */
.data {
    max-width: 800px;
    margin: 20px auto;
    padding: 15px;
}

/* Cada meal */
.data>div[v-for] {
    background: #fff;
    border-radius: 14px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-bottom: 25px;
    text-align: center;
}

/* Imagen del plato */
img {
    width: 100%;
    max-width: 400px;
    border-radius: 12px;
    margin: 10px auto;
    display: block;
}

/* Nombre del plato */
h2 {
    font-size: 28px;
    font-weight: 700;
    margin: 15px 0;
    color: #222;
}

/* Título de ingredientes */
h3 {
    font-size: 20px;
    font-weight: 600;
    margin: 15px 0 10px;
    color: #444;
}

/* Lista de ingredientes */
ul {
    list-style: none;
    padding: 0;
    margin: 0 auto;
    max-width: 350px;
}

li {
    background: #f9f9f9;
    margin: 6px 0;
    padding: 8px 12px;
    border-radius: 8px;
    text-align: left;
    font-size: 16px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}

/* Video */
video {
    margin-top: 15px;
    border-radius: 12px;
    max-width: 100%;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Responsive */
@media (max-width: 600px) {
    h2 {
        font-size: 22px;
    }

    h3 {
        font-size: 18px;
    }

    li {
        font-size: 14px;
    }
}
</style>
