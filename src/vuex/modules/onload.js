import * as types from '../mutation-types'

const state = {
  recomended: {
    building: [],
    events: [],
    hall: [],
    promoter: [],
    shows: [],
    showType: []
  },
  concert: {
    building: [],
    events: [],
    hall: [],
    promoter: [],
    shows: [],
    showType: []
  },
  movie: {
    building: [],
    events: [],
    hall: [],
    promoter: [],
    shows: [],
    showType: []
  },
  currentLocation: {
    city: null,
    currentLocation: null
  },
  currentCoords: {
    lat: null,
    lon: null
  },
  subdivisions: null,
  currentDb: undefined,
  currentContentView: true,
  subdivision: '',
  preloader: false
}

const mutations = {
  [types.RECEIVE_RECOMENDED] (state, recomended) {
    state.recomended.building = recomended.building
    state.recomended.events = recomended.event
    state.recomended.hall = recomended.hall
    state.recomended.promoter = recomended.rollerman
    state.recomended.shows = recomended.show
    state.recomended.showType = recomended.show_type
    console.log(state.recomended.shows)
    console.log(state.recomended.events)
    console.log(state.recomended.building)
    console.log(state.recomended.hall)
  },

  [types.RECEIVE_CONCERTS] (state, concert) {
    console.log(concert)
    state.concert.building = concert.building
    state.concert.events = concert.event
    state.concert.hall = concert.hall
    state.concert.promoter = concert.rollerman
    state.concert.shows = concert.show
    state.concert.showType = concert.show_type
  },

  [types.RECEIVE_MOVIES] (state, movie) {
    state.movie.building = movie.building
    state.movie.events = movie.event
    state.movie.hall = movie.hall
    state.movie.promoter = movie.rollerman
    state.movie.shows = movie.show
    state.movie.showType = movie.show_type
  },

  [types.RECEIVE_LOCATION] (state, currentLocation) {
    console.log(currentLocation)
    state.currentLocation.city = currentLocation
    console.log(state.currentLocation.city)
    state.currentLocation.currentLocation = currentLocation
  },

  [types.RECEIVE_COORDS] (state, coords) {
    console.log('coords in onload - ', coords)
    state.currentCoords.lat = coords.latitude
    state.currentCoords.lon = coords.longitude
    console.log(state.currentCoords.lon)
  },

  [types.RECEIVE_SUBDIVISIONS] (state, subdivisions) {
    state.subdivisions = subdivisions
    console.log(state.subdivisions)
  },

  [types.CHANGE_CURRENT_CONTENT] (state, content) {
    state.currentContentView = content
    console.log(state.currentContentView)
  },

  [types.CHANGE_CURRENT_DB] (state, currentDb) {
    console.log(currentDb)
    state.currentDb = currentDb
    console.log('currentDb - ', state.currentDb)
  },

  [types.START_PRELOADER] (state) {
    console.log('preloader fired')
    state.preloader = true
    console.log('preloader = ', state.preloader)
  },

  [types.STOP_PRELOADER] (state) {
    console.log('preloader stoped')
    state.preloader = false
    console.log('preloader = ', state.preloader)
  }
}

export default {
  state, mutations
}
