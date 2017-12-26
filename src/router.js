import Vue from 'vue'
import VueRouter from 'vue-router'

import Root from './components/Root/Root'
import MainHeaderWrapper from './components/Root/MainHeaderWrapper'

import SignIn from './components/Register/SignIn'
import SignUp from './components/Register/SignUp'

import Nested from './components/Nested/Nested'
/* import ErrorPage from './components/ErrorPage' */
import EventPage from './components/Nested/EventPage'
import AboutPage from './components/Nested/AboutPage'
import NewsPage from './components/Nested/NewsPage'
import TicketOffices from './components/Nested/TicketOffices'
import Organizations from './components/Nested/Organizations'
import OrganizationPage from './components/Nested/OrganizationPage'
import CartPage from './components/Nested/CartPage'

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
          path: 'mainHeaderWrapper',
          component: MainHeaderWrapper
        },
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
      component: Nested,
      children: [
        {
          name: 'eventPage',
          path: ':db/event/:id',
          component: EventPage
        },
        {
          name: 'aboutPage',
          path: 'aboutPage',
          component: AboutPage
        },
        {
          name: 'newsPage',
          path: ':db/newsPage',
          component: NewsPage
        },
        {
          name: 'ticketOffices',
          path: ':db/ticketOffices',
          component: TicketOffices
        },
        {
          name: 'organizations',
          path: ':db/organizations',
          component: Organizations
        },
        {
          name: 'organizationPage',
          path: ':db/organization/:name',
          component: OrganizationPage,
          props: true
        },
        {
          name: 'cartPage',
          path: 'cartPage',
          component: CartPage
        }
      ]
    }
  ]
})
