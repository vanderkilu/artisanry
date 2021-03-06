import Vue from 'vue'
import Router from 'vue-router'
import Slide from './components/Slide'
import Signup from './components/Signup'
import Login from './components/Login'
import Artisan from './components/Artisan'
import Users from './components/Users'
import UserProfile from './components/UserProfile'
import ChatRoom from './components/ChatRoom'
import NearestArtisans from './components/NearestArtisans'

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
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/chatroom',
      name: 'chatroom',
      component: ChatRoom
    },
    {
      path: '/artisans',
      name: 'artisans',
      component: Artisan
    },
    {
      path: '/nearest-artisans',
      name: 'nearest-artisans',
      component: NearestArtisans
    },
    {
      path: '/artisans/:id/users',
      name: 'users',
      component: Users
    },
    {
      path: '/users/:id/profile',
      name: 'user-profile',
      component: UserProfile
    }
  ]
})
