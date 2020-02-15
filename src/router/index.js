import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import StoryPage from "../components/StoryPage";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/story/:id',
    name: 'Story',
    component: StoryPage,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
