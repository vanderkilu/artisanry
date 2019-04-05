import Vue from 'vue'
import Router from 'vue-router'
import Slide from './components/Slide'
import Signup from './components/Signup'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      name: 'home',
      component: Slide
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    }
  ]
})
