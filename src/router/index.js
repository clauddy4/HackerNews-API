import Vue from 'vue'
import VueRouter from 'vue-router'
import NewStoriesList from '../components/NewStoriesList.vue'
import Comments from "../components/Comments";
import User from "../components/User";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home Page',
    component: NewStoriesList
  },
  {
    path: '/comments/:id',
    name: 'Comments',
    component: Comments,
  },
  {
    path: '/user/:id',
    component: User,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
