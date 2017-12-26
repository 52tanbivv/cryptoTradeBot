import Vue from 'vue'
import Vuex from 'vuex'
import onload from './modules/onload'
import modals from './modules/modals'
import cart from './modules/cart'
import currentVenue from './modules/currentVenue'
import currentEvent from './modules/currentEvent'
import filteredContent from './modules/filteredContent'
import venues from './modules/venues'
import tickets from './modules/tickets'
import boxOffices from './modules/boxOffices'
import news from './modules/news'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    onload,
    cart,
    currentVenue,
    currentEvent,
    filteredContent,
    tickets,
    venues,
    modals,
    boxOffices,
    news
  }
})
