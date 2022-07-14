import { createRouter, createWebHistory } from 'vue-router'
import home from "@/views/Home";


const routes = [
  {
    path:'/home',
  component:home
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
