import Vue from 'vue'
import VueRouter from 'vue-router'
import StoriesList from '../components/StoriesList.vue'
import Comments from "../components/Comments";
import User from "../components/User";
import Search from "../components/Search";

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
    component: Comments,
  },
  {
    path: '/user/:id',
    component: User,
  },
  {
    path: '/search/:id',
    component: Search,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
