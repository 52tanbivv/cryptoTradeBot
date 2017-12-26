import * as types from '../mutation-types'

const state = {
  places: '',
  metric: '',
  section: '',
  booked: {
    bookedNumber: '0',
    bookedTotal: '0'
  }
}

const mutations = {
  [types.RECEIVE_TICKETS] (state, tickets) {
    state.places = tickets.places
    state.metric = tickets.metric
    state.section = tickets.section
    console.log('places ', state.places)
  }
}

export default {
  state, mutations
}
