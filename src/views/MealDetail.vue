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
            <div v-for="meal in data.meals" class="meal-card">

                <h2>{{ meal.strMeal }}</h2>

                <img class="meal-image" :src="meal.strMealThumb" :alt="`Foto de ${meal.strMeal}`">

                <div v-if="ingredients.length" class="ingredients-container">
                    <h3>Ingredients</h3>

                    <ul>
                        <li v-for="item in ingredients" :key="item.ingredient">
                            <strong>{{ item.measure }}</strong> — {{ item.ingredient }}
                        </li>
                    </ul>
                </div>

                <div class="video-section">
                    <p>Video de YouTube</p>
                    <video :src="meal.strYoutube" controls></video>
                </div>

            </div>

        </div>

        <div v-else> No hi ha registre</div>
    </div>

</template>

<style scoped>
/* Fondo suave */
body,
.data {
    background: #faf7f2;
}

/* Título principal */
h1 {
    text-align: center;
    font-size: 34px;
    margin: 25px 0;
    font-weight: 800;
    color: #3a2e27;
    letter-spacing: 1px;
}

/* Loading & error */
.loading,
.error {
    text-align: center;
    font-size: 20px;
}

.error {
    color: #ff4d4d;
    font-weight: bold;
}

/* Contenedor principal */
.data {
    max-width: 900px;
    margin: 0 auto;
    padding: 20px;
}

/* Card principal del Meal */
.meal-card {
    background: #ffffff;
    border-radius: 18px;
    padding: 25px;
    box-shadow: 0 8px 22px rgba(0, 0, 0, 0.08);
    margin-bottom: 30px;
    text-align: center;
    transition: 0.25s ease;
}

.meal-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
}

/* Imagen destacada */
.meal-image {
    width: 100%;
    max-width: 420px;
    border-radius: 15px;
    margin: 15px auto;
    display: block;
}

/* Nombre del plato */
h2 {
    font-size: 30px;
    color: #2d1e15;
    font-weight: 800;
    margin-bottom: 10px;
}

/* Sección de ingredientes */
.ingredients-container {
    margin-top: 20px;
    text-align: left;
}

h3 {
    font-size: 22px;
    color: #4a372d;
    font-weight: 700;
    margin-bottom: 10px;
}

/* Lista bonita */
ul {
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
    gap: 10px;
}

li {
    background: #fff6e9;
    padding: 10px 12px;
    border-radius: 10px;
    border-left: 4px solid #ff9f43;
    font-size: 15px;
    color: #4a3b32;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
}

/* Video */
.video-section {
    margin-top: 25px;
}

.video-section p {
    font-weight: 600;
    color: #3a2e27;
    margin-bottom: 8px;
    font-size: 18px;
}

video {
    max-width: 100%;
    border-radius: 12px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.15);
}

/* Responsive */
@media (max-width: 600px) {
    h2 {
        font-size: 24px;
    }

    ul {
        grid-template-columns: 1fr;
    }
}
</style>
