import Vue from 'vue'
import VueRouter from 'vue-router'
import StoriesList from '../components/StoriesList.vue'
import StoryPage from "../components/StoryPage";
import PopularStoriesList from "../components/PopularStoriesList";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home Page',
    component: StoriesList
  },
  {
    path: '/popular',
    name: 'Top Stories',
    component: PopularStoriesList,
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
