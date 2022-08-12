import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OptionsView from '../views/OptionsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: './',
      name: 'home',
      component: HomeView,
      props: true,
    },
    {
      path: './options',
      name: 'options',
      component: OptionsView,
      props: true,
    }

  ]
})

export default router
