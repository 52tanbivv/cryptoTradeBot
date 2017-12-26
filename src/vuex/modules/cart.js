import * as types from '../mutation-types'

const state = {
  sessionId: null,
  sessionIdArray: [],
  ticketsInCart: [],
  totalTicketsInCart: []
}

const mutations = {
  [types.ADD_SESSION_ID] (state, sessionIdObject) {
    let sessionId = sessionIdObject.data.content.session.id
    let eventId = sessionIdObject.eventId
    sessionIdObject = {sessionId, eventId}
    console.log('sessionIdObject ', sessionIdObject)
    state.sessionIdArray.push(sessionIdObject)
    console.log('sessionIdArray in vuex', state.sessionIdArray)
    state.sessionId = sessionIdObject.sessionId
    console.log(state.sessionId)
  },

  [types.ADD_PLACE_TO_CART] (state, result) {
    console.log('place params', result)
    state.ticketsInCart = result
    console.log('ticketsInCart ', state.ticketsInCart)
  },

  [types.GET_PLACES_IN_CART] (state, result) {
    console.log('place params', result)
    state.totalTicketsInCart = result
    console.log('totalTicketsInCart ', state.totalTicketsInCart)
  }
}

export default {
  state, mutations
}
