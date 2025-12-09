import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
      path: '/',
      name: 'home',
      component: import("@/views/Home.vue"),
    },
    {
      path: '/receptes/:category',
      name: 'receptes',
      component: import("@/views/Receptes.vue"),
    },
    {
      path: '/receptes/:category/:id',
      name: 'receptes',
      component: import("@/views/Receptes.vue"),
      children: [{
        path:":id",
        name:"RecipeDetail",
        component: () => import("@/components/RecipeDetail.vue") 
      }]
    },
    {
    path: "/:pathMatch(.*)*", 
    name: 'NotFound', 
    component: import("@/views/NotFound.vue")
    },
  ],
})

export default router
