import Vue from 'vue'
import VueRouter from 'vue-router'
import StoriesList from '../components/StoriesList.vue'
import StoryComments from "../components/StoryComments";
import User from "../components/User";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home Page',
    component: StoriesList
  },
  {
    path: '/comments/:id',
    name: 'Comments',
    component: StoryComments,
  },
  {
    path: '/user/:id',
    component: User,
  },
  {
    path: '/search/:id',
    component: StoriesList,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
