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
    console.log(state.currentEvent.id)
  },

  [types.RECEIVE_CURRENT_EVENT] (state, currentEvent) {
    console.log('currentEvent in currentEvent module- ', currentEvent)
    state.currentEventForDirectLink = currentEvent
    console.log(state.currentEventForDirectLink)
  },

  [types.RECEIVE_CURRENT_SHOW] (state, currentShow) {
    console.log('currentShow in currentEvent module- ', currentShow)
    state.currentShowForDirectLink = currentShow
    console.log(state.currentShowForDirectLink)
  },

  [types.RECEIVE_CURRENT_BUILDING] (state, currentBuilding) {
    console.log('currentBuilding in currentEvent module- ', currentBuilding)
    state.currentBuildingForDirectLink = currentBuilding
    console.log(state.currentBuildingForDirectLink)
  },

  [types.RECEIVE_CURRENT_HALL] (state, currentHall) {
    console.log('currentHall in currentEvent module- ', currentHall)
    state.currentHallForDirectLink = currentHall
    console.log(state.currentHallForDirectLink)
  }
}

export default {
  state, mutations
}
