import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
    },

    {
      path: '/receptes/:category',
      name: 'receptes',
      component: () => import('@/views/Recipes.vue')
    },
    {
      path: '/meal/:idMeal',
      name: 'Meal',
      component: () => import('@/views/MealDetail.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFound.vue'),
    },
  ]
})

export default router
