import * as types from '../mutation-types'

const state = {
  filtered: {
    building: [],
    events: [],
    hall: [],
    promoter: [],
    shows: [],
    showType: [],
    subdivision: []
  }
}

const mutations = {
  [types.RECEIVE_FILTERED_CONTENT] (state, filteredContent) {
    console.log(filteredContent)
    state.filtered.building = filteredContent.building
    state.filtered.events = filteredContent.event
    state.filtered.hall = filteredContent.hall
    state.filtered.promoter = filteredContent.rollerman
    state.filtered.shows = filteredContent.show
    state.filtered.showType = filteredContent.show_type
    state.filtered.subdivision = filteredContent.subdivision
  }
}

export default {
  state, mutations
}
