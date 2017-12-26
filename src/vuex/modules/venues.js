import * as types from '../mutation-types'

const state = {
  venues: [],
  halls: [],
  events: [],
  shows: []
}

const mutations = {
  [types.RECEIVE_VENUES] (state, venues) {
    state.venues = venues
  },

  [types.RECEIVE_HALLS] (state, halls) {
    state.halls = halls
  },

  [types.RECEIVE_EVENTS_AND_SHOWS] (state, events) {
    state.events = events.event
    state.shows = events.show
    console.log(events)
    console.log(state.shows)
    console.log(state.events)
  }
}

export default {
  state, mutations
}
