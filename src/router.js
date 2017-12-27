import Vue from 'vue'
import VueRouter from 'vue-router'

import Root from './components/Root/Root'

import SignIn from './components/Register/SignIn'
import SignUp from './components/Register/SignUp'

import Dashboard from './components/Dashboard/Dashboard'
import Account from './components/Dashboard/Account'
import Statistics from './components/Dashboard/Statistics'
import Traiding from './components/Dashboard/Traiding'

/* import ErrorPage from './components/ErrorPage' */

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: Root,
      children: [
        {
          path: 'signIn',
          component: SignIn
        },
        {
          path: 'signUp',
          component: SignUp
        }
      ]
    },
    {
      path: '/',
      component: Dashboard,
      children: [
        {
          path: 'account',
          name: 'account',
          component: Account
        },
        {
          path: 'statistics',
          name: 'statistics',
          component: Statistics
        },
        {
          path: 'traiding',
          name: 'traiding',
          component: Traiding
        }
      ]
    }
  ]
})
