import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import VueMaterial from 'vue-material'
import VueLocalStorage from 'vue-localstorage'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueScroll from 'vue-scroll'
// import VueResource from 'vue-resource'
import { router } from './router'

import '../config/date'

Vue.use(Vuex)
Vue.use(VueMaterial)
Vue.use(VueLocalStorage)
Vue.use(VueAxios, axios)
Vue.use(VueScroll)
// Vue.use(VueResource)

/* router.beforeEach((router, redirect, next) => {
  const jwt = window.localStorage.getItem('token')
  if (jwt && router.path === '/') {
    next('/index/shows')
  } else {
    next()
  }
}) */

new Vue(Vue.util.extend({ router }, App)).$mount('#app')
