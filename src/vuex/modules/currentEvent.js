import * as types from '../mutation-types'

const state = {
  curentEvent: '',
  building: '',
  hall: '',
  show: '',
  currentShowForDirectLink: '',
  currentEventForDirectLink: '',
  currentBuildingForDirectLink: '',
  currentHallForDirectLink: ''
}

const mutations = {
  [types.SAVE_CURRENT_EVENT] (state, currentEvent) {
    state.currentEvent = currentEvent.item
    state.building = currentEvent.building
    state.hall = currentEvent.hall
    state.show = currentEvent.show
    console.log(state.show)
  },

  [types.RECEIVE_CURRENT_EVENT] (state, currentEvent) {
    console.log('currentEvent in currentEvent module- ', currentEvent)
    state.currentEventForDirectLink = currentEvent.event[0]
    state.currentShowForDirectLink = currentEvent.show[0]
    state.currentBuildingForDirectLink = currentEvent.building[0]
    state.currentHallForDirectLink = currentEvent.hall[0]
    state.building = currentEvent.building[0]
    state.show = currentEvent.show[0]
    state.hall = currentEvent.hall[0]
    console.log(state.currentEventForDirectLink)
    console.log(state.currentShowForDirectLink)
    console.log(state.currentBuildingForDirectLink)
    console.log(state.currentHallForDirectLink)
  }
}

export default {
  state, mutations
}
