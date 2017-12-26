import * as types from '../mutation-types'

const state = {
  venue: {
    buildings: [],
    events: [],
    halls: [],
    shows: [],
    showType: []
  }
}

const mutations = {
  [types.RECEIVE_CURRENT_VENUE_EVENTS] (state, currentEvent) {
    console.log(currentEvent)
    state.venue.buildings = currentEvent.building
    state.venue.events = currentEvent.event
    state.venue.halls = currentEvent.hall
    state.venue.shows = currentEvent.show
    state.venue.showType = currentEvent.show_type
  }
}

export default {
  state, mutations
}
