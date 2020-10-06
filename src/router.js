import Vue from 'vue'
import Router from 'vue-router'
import store from './store.js'
import Home from './views/Home.vue'
import Forgot from './components/Forgot.vue'
import Loggedin from './components/Loggedin.vue'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/logged',
      name: 'loggedin',
      component: Loggedin
    },
    {
      path: '/forgot',
      name: 'forgot',
      component: Forgot,
    },
  ]
})


export default router